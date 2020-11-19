import React, {useEffect, useState} from "react";
import SideMenu from "./SideMenu";
import TasksDashBoard from "./TasksDashboard";
import * as dataHandler from "../lib/DataHandler";

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState("ido");

  useEffect(() => {
    dataHandler.getDataSnapShot((data) => {
      setUsersData(data);
    });
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(currentUser);
    }
  }, [user]);

  const setCurrentUser = (user) => {
    localStorage.setItem("currentUser", user);
    setUser(user);
  };

  return (
    <div className="d-flex">
      <SideMenu usersData={usersData} user={user} setUser={setCurrentUser} />
      <TasksDashBoard user={user} />
    </div>
  );
};

export default Dashboard;
