import React, {useEffect, useState} from "react";
import {usersCollection} from "../firebase";
import UsersDropdown from "./UsersDropdown";
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
    <div className="m-5">
      <h1>{user}</h1>
      <UsersDropdown usersData={usersData} setUser={setUser} />
    </div>
  );
};

export default DashBoard;
