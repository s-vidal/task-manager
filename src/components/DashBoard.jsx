import React, {useEffect, useState} from 'react';
import {usersCollection} from "../firebase"

const DashBoard = () => {
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        const unsubscribe = usersCollection.onSnapshot(update => {
            const data = update.docs.map(doc => doc.data());
            setUsersData(data)
        })
        return () => unsubscribe()
    }, [])

return ( <div className="m-5">
            <div>
            {usersData && usersData.map(user => <h1>{user.name}</h1>)}
            </div>
    </div> );
}
 
export default DashBoard;