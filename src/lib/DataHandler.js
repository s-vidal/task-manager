import { usersCollection } from "../firebase"

class DataHandler {
    constructor() {
      this._usersCollection = usersCollection
    }

    getUserTasks = (user) => {
        const userTaks = this._db.collection("users").where("name", "==", user)
        return userTaks
    }
}

export default DataHandler