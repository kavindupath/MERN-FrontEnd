import React from "react";
import UserList from "../Components/UserList";

const Users = () => {
  //an array of User objects
  const USERS = [
    { id: "u1", name: "Kavindu pathberiya", image: "https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Niki_Lauda/_jcr_content/featureContent/manual_gallery/image7.img.jpg/1421238625518.jpg", places: 3 },
  ];
  
  //Send the object List to UsersList Component
  return <UserList items={USERS} />;
};

export default Users;
