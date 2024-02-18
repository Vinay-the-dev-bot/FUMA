import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CSS/navBar.css";
import "./CSS/Login.css";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const toast = useToast();
  const url = useSelector((state) => state.url);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (email && password) {
      const res = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (data.msg != "Authenticated") {
        toast({
          title: `${data.msg}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      } else {
        dispatch({
          type: "LOGIN",
          payload: { isLoggedIn: true, user: data.user },
        });
        dispatch({
          type: "ADMIN",
          payload:
            data.user.role === "Admin" || data.user.role === "superAdmin",
        });
        toast({
          title: `Welcome ${data.user.name} `,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        dispatch({ type: "TOKEN", payload: data.token });
        navigate("/dashboard");
      }
    } else {
      toast({
        title: `Enter All Fields`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <div id="loginDiv">
        <form id="loginForm" onSubmit={handleFormSubmit}>
          <label for="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="username"
          />
          <br />

          <label for="password">Password:</label>
          <br />
          <input
            type="password"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <br />

          <button id="loginButton">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
