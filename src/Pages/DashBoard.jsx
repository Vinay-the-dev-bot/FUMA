import { useDispatch, useSelector } from "react-redux";
import "./CSS/dashboard.css";
import UserCard from "./UserCard";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import LoadingToast from "./LoadingToast";

const DashBoard = () => {
  const state = useSelector((state) => state);
  const toast = useToast();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminAcces = () => {
    setTimeout(() => {
      toast({
        title: `Admin Access Request Sent`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }, 500);
  };
  const getUsers = async () => {
    setIsLoading(true);
    const res = await fetch(`${state.url}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
    });
    const data = await res.json();
    dispatch({ type: "ALLUSERS", payload: data.msg });
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <LoadingToast message={"Getting Users"} />}
      <div id="userProfile">
        <h1 id="userPrf">User Profile</h1>

        {state.isLoggedIn && (
          <table>
            <tr>
              <td>Name</td>
              <td>|</td>
              <td>{state.user.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>|</td>
              <td>{state.user.email}</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>|</td>
              <td>{state.user.dateOfBirth}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>|</td>
              <td>{state.user.role}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>|</td>
              <td>{state.user.location}</td>
            </tr>
          </table>
        )}
        {state.user.role === "Explorer" && (
          <button id="reqRoleChange" onClick={handleAdminAcces}>
            Request For Admin Access
          </button>
        )}
        {state.user.isLoggedIn && <h1>Please Login to View Your Profile</h1>}
        {state.isAdmin && (
          <>
            <button id="getUsers" onClick={(e) => getUsers(e)}>
              Get Users
            </button>
          </>
        )}
        {/* {state.isAdmin && (
          <>
            <button id="addAUser">Add A User</button>
            <button id="deleteUser">Delete User</button>
            <button id="updateUser">Update User</button>
            <RegForm />
          </>
        )} */}
        {state.users.length > 0 && (
          <div id="usersDiv">
            {state.users.map((user) => {
              return state.user.email != user.email && <UserCard user={user} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DashBoard;
