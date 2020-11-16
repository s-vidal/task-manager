import React, {useEffect, useState} from "react";

import SideMenu from "./SideMenu";
import Tasks from "./Tasks";
import DataHandler from "../lib/DataHandler";

const DashBoard = () => {
  const [dataHandler] = useState(new DataHandler());
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState("levy");

  useEffect(() => {
    dataHandler.getDataSnapShot((data) => {
      setUsersData(data);
    });

    dataHandler.getUserCollectionSnapshot(user, (data) => {
      console.log(data);
    });
  }, [user]);

  return (
    <div className="d-flex">
      <SideMenu usersData={usersData} setUser={setUser} />
      <Tasks user={user} />
    </div>
  );
};

export default DashBoard;
