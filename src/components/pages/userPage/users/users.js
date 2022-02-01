import {useEffect, useState} from "react";

import '../usersPage.css'
import {userService} from "../../../../services/userService/userService";
import User from "../user/user";
import {Outlet} from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div>
            <div className={'usersBlock'}>
                <div className={'users'}>
                    {
                        users.map(user => <User key={user.id} user={user}/>)
                    }
                </div>

                <div className={'usersOutlet'}>
                    <Outlet/>
                </div>
            </div>


        </div>
    )
}