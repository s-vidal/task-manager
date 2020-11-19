import React, {useEffect, useState} from "react";
import SideMenu from "./SideMenu";
import TasksDashBoard from "./TasksDashboard";
import * as dataHandler from "../lib/DataHandler";

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState("levy");

  useEffect(() => {
    dataHandler.getDataSnapShot((data) => {
      setUsersData(data);
    });
  }, [user]);

  return (
    <div className="d-flex">
      <SideMenu usersData={usersData} user={user} setUser={setUser} />
      <TasksDashBoard user={user} />
    </div>
  );
};

export default Dashboard;
