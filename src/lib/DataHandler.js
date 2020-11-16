import {usersCollection} from "../firebase";

class DataHandler {
  constructor() {
    this._usersCollection = usersCollection;
  }

  getUserTasks = (user) => {
    const userTaks = this._usersCollection.where("name", "==", user).get();
    return userTaks;
  };

  getDataSnapShot = (callBack) => {
    const unsubscribe = this._usersCollection.onSnapshot((update) => {
      const data = update.docs.map((doc) => doc.data());
      callBack(data);
    });
    return unsubscribe;
  };

  getUserTodosSnapshot = (user, callBack) => {
    const unsubscribe = this._usersCollection
      .doc(user)
      .collection("to-do")
      .onSnapshot((update) => {
        const data = update.docs.map((doc) => doc.data());
        callBack(data);
      });
    return unsubscribe;
  };

  getUserDoneTodosSnapshot = (user, callBack) => {
    const unsubscribe = this._usersCollection
      .doc(user)
      .collection("done")
      .onSnapshot((update) => {
        const data = update.docs.map((doc) => doc.data());
        callBack(data);
      });
    return unsubscribe;
  };

  addTaskByUser = (user, task) => {
    this._usersCollection
      .doc(user)
      .collection("to-do")
      .add({task: task})
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        return docRef;
      });
  };
}

export default DataHandler;
