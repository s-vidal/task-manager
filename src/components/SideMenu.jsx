import React from "react";
import "./SideMenu.css";
import UserNav from "./UserNav";

const SideMenu = ({usersData, user, setUser}) => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row" style={{marginTop: "15rem"}}>
          <div className="col-12">
            <UserNav
              usersData={usersData}
              setUser={setUser}
              currentUser={user}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
