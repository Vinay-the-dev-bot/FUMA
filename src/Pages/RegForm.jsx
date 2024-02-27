import { useState } from "react";
import "./CSS/RegForm.css";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import LoadingToast from "./LoadingToast";

const RegForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const url = useSelector((state) => state.url);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, SetDOB] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const resetForm = () => {
    setUsername("");
    setEmail("");
    SetDOB("");
    setRole("");
    setPassword("");
    setConfirmPassword("");
    setLocation("");
  };

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const userData = {
      email: email,
      name: userName,
      dateOfBirth: dob,
      role: role,
      location: location,
      password: password,
    };
    if (
      userName &&
      email &&
      dob &&
      role &&
      location &&
      password &&
      confirmPassword
    ) {
      if (password != confirmPassword) {
        toast({
          title: `Passwords are Not Mathing`,
          status: "warning",
          duration: 1000,
          isClosable: true,
        });
        setIsLoading(false);
      } else {
        const res = await fetch(`${url}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        setIsLoading(false);
        const data = await res.json();
        if (data.msg.includes("dup key")) {
          toast({
            title: `User Already registered, Please Login`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          setIsLoading(false);
        } else {
          setTimeout(() => {
            resetForm();
            navigate("/login");
          }, 1000);
          toast({
            title: `User has been registerd, please login `,
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top-right",
          });
        }
      }
    } else {
      toast({
        title: `Enter All Fields`,
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "bottom-right",
        variant: "subtle",
      });
    }
  };
  return (
    <>
      {isLoading && <LoadingToast message={"Signing Up"} />}
      <div id="regForm">
        <form id="form" onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            placeholder="Enter Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <br /> */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <br /> */}
          <div id="innerForm">
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={dob}
                placeholder="Enter Date Of Birth"
                onChange={(e) => SetDOB(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" defaultValue={"Select"}>
                  Select
                </option>
                <option value="Admin">Admin</option>
                <option value="Explorer">Explorer</option>
              </select>
            </div>
            {/* <br /> */}
          </div>

          {/* <br /> */}
          <label htmlFor="location">Location:</label>
          <input
            value={location}
            type="text"
            id="location"
            placeholder="Enter Location"
            name="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* <br /> */}
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <br /> */}
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* <br /> */}
          <button type="submit" id="regButton" value="Submit">
            {window.location.href.includes("dashboard")
              ? "Add User"
              : "Register"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RegForm;
