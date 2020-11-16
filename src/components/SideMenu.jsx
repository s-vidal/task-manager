import React from "react";
import "./SideMenu.css";
import UsersDropdown from "./UsersDropdown";

const SideMenu = ({usersData, setUser}) => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row mt-5 d-flex justify-content-center">
          <UsersDropdown usersData={usersData} setUser={setUser} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
