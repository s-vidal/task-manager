import React from "react";
import "./UserNav.css";

const UserNav = ({usersData, currentUser, setUser}) => {
  return (
    <div>
      <ul className="nav justify-content-center">
        {usersData.length > 0 &&
          usersData.map((user, index) => (
            <li
              key={index}
              className={
                currentUser === user["name"]
                  ? "nav-item selected-user-item rounded align-items-center cursor-pointer"
                  : "nav-item user-item rounded align-items-center cursor-pointer"
              }
              onClick={() => {
                setUser(user["name"]);
              }}
            >
              <a className="nav-link">
                <div className="row">
                  <div className="col-3">
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      className="bi bi-person-circle text-secondary"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                      <path
                        fillRule="evenodd"
                        d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                      />
                    </svg>
                  </div>
                  <div className="col-9">
                    <p
                      className={
                        currentUser === user["name"]
                          ? "text-white m-0"
                          : "text-white  m-0"
                      }
                    >
                      {user["name"]}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        <li className=" nav-item user-item rounded align-items-center cursor-pointer mt-4">
          <a className="nav-link text-white">
            <div className="row mt-1">
              <div className="col-3">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </div>
              <div className="col-9">
                <p>Add new user</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
