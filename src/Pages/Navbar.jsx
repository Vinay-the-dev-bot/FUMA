import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const toast = useToast();

  const url = useSelector((state) => state.url);
  const handleLogOut = async () => {
    const res = await fetch(`${state.url}/user/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
    });
    const data = await res.json();
    if (data.msg === "logged Out") {
      dispatch({ type: "LOGOUT" });
      toast({
        title: `${data.msg}`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {/* <p>{JSON.stringify(state)}</p> */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <p>HomePage</p>
            </Link>
          </li>
          {/* <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li> */}
          {!state.isLoggedIn && (
            <li>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </li>
          )}
          {!state.isLoggedIn && (
            <li>
              <Link to="/signUp">
                <p>Sign Up</p>
              </Link>
            </li>
          )}
          {state.isLoggedIn && (
            <li>
              <Link to="/dashboard">
                <p>{state.user.name}</p>
              </Link>
            </li>
          )}
          {state.isLoggedIn && (
            <li>
              <button id="logoutButton" onClick={handleLogOut}>
                LOGOUT
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
