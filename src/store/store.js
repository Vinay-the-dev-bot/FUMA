import { createStore } from "redux";
const url = "https://fuma-server.onrender.com";
// const url = "http://localhost:4500";
const intialstate = {
  isLoggedIn: false,
  isAdmin: false,
  token: "",
  user: {},
  url: url,
  users: [],
};

const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    case "ADMIN":
      return { ...state, isAdmin: action.payload };
    case "ALLUSERS":
      return { ...state, users: action.payload };
    case "USERDELETED":
      const updatedUsers = state.users.reduce((user) => {
        return user._id != action.payload;
      });
      return { ...state, users: updatedUsers };
    case "UPDATEUSER":
      const updatedUsers2 = state.users.map((user) => {
        if (user._id == action.payload._id) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      return { ...state, users: updatedUsers2 };
    case "TOKEN":
      return { ...state, token: action.payload };
    case "LOGOUT":
      return intialstate;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
