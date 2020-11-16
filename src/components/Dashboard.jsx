import React, {useEffect, useState} from "react";

import SideMenu from "./SideMenu";
import TasksDashBoard from "./TasksDashboard";
import DataHandler from "../lib/DataHandler";

const Dashboard = () => {
  const [dataHandler] = useState(new DataHandler());
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState("levy");

  useEffect(() => {
    dataHandler.getDataSnapShot((data) => {
      console.log(data);
      setUsersData(data);
    });
  }, [user, dataHandler]);

  return (
    <div className="d-flex">
      <SideMenu usersData={usersData} user={user} setUser={setUser} />
      <TasksDashBoard user={user} dataHandler={dataHandler} />
    </div>
  );
};

export default Dashboard;
