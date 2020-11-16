import React from "react";
import "./SideMenu.css";
import UserNav from "./UserNav";

const SideMenu = ({usersData, setUser}) => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row" style={{marginTop: "11rem"}}>
          <div className="col-12">
            <UserNav usersData={usersData} setUser={setUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
