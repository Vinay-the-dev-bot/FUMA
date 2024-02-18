import { useDispatch, useSelector } from "react-redux";
import "./CSS/userCard.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
const UserCard = ({ user }) => {
  const toast = useToast();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [location, setLocation] = useState(user.location);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();
  const {
    isOpen: updateIsOpen,
    onOpen: updateOnOpen,
    onClose: updateOnClose,
  } = useDisclosure();
  const {
    isOpen: adminIsOpen,
    onOpen: adminOnOpen,
    onClose: adminOnClose,
  } = useDisclosure();

  const handleMakeAdmin = async () => {
    const res = await fetch(`${state.url}/user/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify({ role: "Admin" }),
    });
    const data = await res.json();
    if (data.msg.includes("User Updated")) {
      dispatch({
        type: "UPDATEUSER",
        payload: { _id: user._id, role: "Admin" },
      });
      toast({
        title: `User Made Admin`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      adminOnClose();
    }
  };

  const handleUpdateUser = async () => {
    console.log(name, email, role, location);
    const updatedUser = { name, email, role, location };
    console.log("UpdatedUSer", updatedUser);
    const res = await fetch(`${state.url}/user/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(updatedUser),
    });
    const data = await res.json();
    console.log(data);
    if (data.msg.includes("User Updated")) {
      dispatch({
        type: "UPDATEUSER",
        payload: { _id: user._id, name, email, role, location },
      });
      toast({
        title: `User Updated`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      updateOnClose();
    }
  };

  const handleDeleteUser = async () => {
    const res = await fetch(`${state.url}/user/${user._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
    });
    const data = await res.json();
    if (data.msg.includes("User Deleted")) {
      dispatch({ type: "USERDELETED", payload: user._id });
      deleteOnClose();
      toast({
        title: `User Deleted`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <div className="userCard">
        <div className="userDetails">
          <div className="userDetailsRow">
            <p className="detailsLabel">Name : </p>
            <p className="detailsValue">{user.name} </p>
          </div>
          <div className="userDetailsRow">
            <p className="detailsLabel">Email : </p>
            <p className="detailsValue">{user.email} </p>
          </div>
          <div className="userDetailsRow">
            <p className="detailsLabel">Date of Birth : </p>
            <p className="detailsValue">{user.dateOfBirth} </p>
          </div>
          <div className="userDetailsRow">
            <p className="detailsLabel">Role : </p>
            <p className="detailsValue">{user.role} </p>
          </div>
          <div className="userDetailsRow">
            <p className="detailsLabel">Location : </p>
            <p className="detailsValue">{user.location} </p>
          </div>
        </div>
        <div className="actionButtons">
          <button className="addAUser" onClick={adminOnOpen}>
            Make as Admin{" "}
          </button>
          <button className="updateUser" onClick={updateOnOpen}>
            Update User
          </button>
          <button className="deleteUser" onClick={deleteOnOpen}>
            Delete User
          </button>
        </div>
      </div>

      <Modal isOpen={deleteIsOpen} onClose={deleteOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are deleting {`${user.name}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This will erase all user data </ModalBody>
          <ModalFooter>
            <button className="confirmDelete" onClick={handleDeleteUser}>
              Delete
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={adminIsOpen} onClose={adminOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are making {`${user.name}`}a Admin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{`${user.name} will be adle to add, delete and update other users`}</ModalBody>
          <ModalFooter>
            <button className="makeAdmin" onClick={handleMakeAdmin}>
              Make Admin
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={updateIsOpen} size="lg" onClose={updateOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are Editing {`${user.name}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="Updateform">
              <label for="name">name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
              {/* <br /> */}
              <label for="email">Email:</label>
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
                  <label for="role">Role:</label>
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
              <label for="location">Location:</label>
              <input
                value={location}
                type="text"
                id="location"
                placeholder="Enter Location"
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <button className="confirmUpdate" onClick={handleUpdateUser}>
              Update
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default UserCard;
