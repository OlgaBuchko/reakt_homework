import {useEffect, useState} from "react";
import User from "../user/user";
import "./users.css"

export  default function Users(){
    let [users, setUsers] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(user=>user.json())
            .then(user=>{
                setUsers(user)
            });

    } ,[]);
    return(
        <div className={'user_block'}>
            {users.map(user=>
                <User key={user.id} id={user.id} name={user.name} username={user.username}
                      city={user.address.city} street={user.address.street} compname={user.company.name} email={user.email}/>
            )}

        </div>)

}