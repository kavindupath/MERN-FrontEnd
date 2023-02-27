import React from "react";
import UserList from "../Components/UserList";

const Users = () => {
  //an array of User objects
  const USERS = [
    { id: "u1", name: "Kavindu path", Image: "Image Path", places: 3 },
  ];
  
  //Send the object List to UsersList Component
  return <UserList items={USERS} />;
};

export default Users;
