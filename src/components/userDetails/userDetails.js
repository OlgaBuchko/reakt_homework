import {useParams, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/userService/userService";

export default function UserDetails({userPosts}) {
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
                <div><h1>User Details</h1></div>
                <div>
                    <div>
                        <h3>{user.id} -- {user.name}</h3>
                        <h4>user name : {user.username}</h4>
                        <h4>phone: {user.phone}</h4>
                        <p>email : {user.email}</p>
                        <p> website : {user.website}</p>
                    </div>
                    <div>
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
                </div>
                <button onClick={
                    () => {
                        userPosts(user.id)
                    }
                }>posts
                </button>

            </div>}
        </div>
    )
}