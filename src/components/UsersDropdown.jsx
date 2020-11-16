import React from "react";

const UsersDropdown = ({usersData, setUser}) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select User
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {usersData.length > 0 &&
            usersData.map((user, index) => (
              <a
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setUser(user["name"]);
                }}
              >
                {user["name"]}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UsersDropdown;
