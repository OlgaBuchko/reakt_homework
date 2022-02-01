import {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../../../services/userService/userService";
import '../usersPage.css'

export default function UserDetails() {
    const {id} = useParams()
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getId(id).then(value => setUser([...value]))
    }, [id]);

    return (
        <div>
            {user &&
            <div>
                <div className={'userDetails'}><h1>User Details</h1></div>
                <div className={'userDetails'}>

                    <h3>{user.id} -- {user.name}</h3>
                    <h4>user name : {user.username}</h4>
                    <h4>phone: {user.phone}</h4>
                    <p>email : {user.email}</p>
                    <p> website : {user.website}</p>

                    <h3>address</h3>
                    <h4>city : {user.address.city}</h4>
                    <h5>street : {user.address.street}</h5>
                    <p>
                        suite: {user.address.suite} <br/>
                        zipcode: {user.address.zipcode} <br/>
                        geo: lat = {user.address.geo.lat}, lng = {user.address.geo.lng}
                    </p>
                    <h3>company</h3>
                    <h5>{user.company.name}</h5>
                    <p>catchPhrase : {user.company.catchPhrase} <br/> bs : {user.company.bs}</p>

                </div>
                <button><Link to={`/users/${id}/posts`}>User Posts</Link></button>
            </div>}
            <Outlet/>
        </div>
    )
}