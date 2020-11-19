import {usersCollection} from "../firebase";

export const getUserTasks = (user) => {
  const userTaks = usersCollection.where("name", "==", user).get();
  return userTaks;
};

export const getDataSnapShot = (callBack) => {
  const unsubscribe = usersCollection.onSnapshot((update) => {
    const data = update.docs.map((doc) => doc.data());
    callBack(data);
  });
  return unsubscribe;
};

export const getUserTasksSnapshot = (user, collection = "to-do", callBack) => {
  const unsubscribe = usersCollection
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

export const addTaskByUser = (user, task, collection = "to-do") => {
  usersCollection
    .doc(user)
    .collection(collection)
    .add({task: task})
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      return docRef;
    });
};

export const deleteTaskById = (user, taskId, collection = "to-do") => {
  usersCollection
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

export const markTaskAsDone = (user, taskId, taskText) => {
  deleteTaskById(user, taskId, "to-do");
  addTaskByUser(user, taskText, "done");
};

export const markDoneTaskAsTodo = (user, taskId, taskText) => {
  deleteTaskById(user, taskId, "done");
  addTaskByUser(user, taskText, "to-do");
};

export const editTaskById = (user, taskId, collection = "to-do", newText) => {
  usersCollection
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
