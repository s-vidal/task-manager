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

  getUserTasksSnapshot = (user, collection = "to-do", callBack) => {
    const unsubscribe = this._usersCollection
      .doc(user)
      .collection(collection)
      .onSnapshot((update) => {
        const data = update.docs.map((doc) => {
          const todo = doc.data();
          todo["id"] = doc.id;
          return todo;
        });
        callBack(data);
      });
    return unsubscribe;
  };

  addTaskByUser = (user, task, collection = "to-do") => {
    this._usersCollection
      .doc(user)
      .collection(collection)
      .add({task: task})
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        return docRef;
      });
  };

  deleteTaskById = (user, taskId, collection = "to-do") => {
    this._usersCollection
      .doc(user)
      .collection(collection)
      .doc(taskId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  markTaskAsDone = (user, taskId, taskText) => {
    this.deleteTaskById(user, taskId, "to-do");
    this.addTaskByUser(user, taskText, "done");
  };

  markDoneTaskAsTodo = (user, taskId, taskText) => {
    this.deleteTaskById(user, taskId, "done");
    this.addTaskByUser(user, taskText, "to-do");
  };

  editTaskById = (user, taskId, collection = "to-do", newText) => {
    this._usersCollection
      .doc(user)
      .collection(collection)
      .doc(taskId)
      .update({
        task: newText,
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };
}

export default DataHandler;
