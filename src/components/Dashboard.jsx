import React, {useEffect, useState} from "react";

import SideMenu from "./SideMenu";
import TasksDashBoard from "./TasksDashboard";
import DataHandler from "../lib/DataHandler";

const Dashboard = () => {
  const [dataHandler] = useState(new DataHandler());
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState("levy");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    dataHandler.getDataSnapShot((data) => {
      setUsersData(data);
    });

    dataHandler.getUserCollectionSnapshot(user, (data) => {
      setTasks(data);
    });
  }, [user]);

  return (
    <div className="d-flex">
      <SideMenu usersData={usersData} setUser={setUser} />
      <TasksDashBoard user={user} />
    </div>
  );
};

export default Dashboard;
