import React from "react";
import "./UserNav.css";

const UserNav = ({usersData, setUser}) => {
  return (
    <div>
      <ul className="nav justify-content-center">
        {usersData.length > 0 &&
          usersData.map((user, index) => (
            <li
              key={index}
              className="d-flex nav-item user-item rounded align-items-center cursor-pointer"
              onClick={() => {
                setUser(user["name"]);
              }}
            >
              <a className="nav-link  ">
                <p className="text-white m-0">{user["name"]}</p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserNav;
