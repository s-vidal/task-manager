import React from "react";
import "./SideMenu.css";
import UserNav from "./UserNav";

const SideMenu = ({usersData, user, setUser}) => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h4 className="text-secondary" style={{marginLeft: "30px"}}>
              Group
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5
              className="group-name shadow-sm rounded"
              style={{marginLeft: "30px", marginRight: "30px"}}
            >
              Sprint 3
            </h5>
          </div>
        </div>
        <div className="row" style={{marginTop: "7em"}}>
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
