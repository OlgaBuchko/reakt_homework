import {useEffect, useState} from "react";

import {userService} from "../../services/userService/userService";
import User from "../user/user";
import UserPostDetails from "../userPostDetails/userPostDetails";
import UserDetails from "../userDetails/userDetails";
import './users.css'

export default function Users() {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    const userPosts = (id) => {
        userService.getUserPosts(id).then(value => setPosts(value))
    };

    return (
        <div>
            <div className={'users'}>
                <div className={'usersList'}>
                    {
                        users.map(user => <User key={user.id} user={user}/>)
                    }
                </div>
                <div className={'userDetails'}>
                    <UserDetails userPosts={userPosts}/>
                </div>
            </div>
            <div>
                {
                    posts && posts.map(post => <UserPostDetails key={post.id} postById={post}/>)
                }
            </div>
        </div>
    )
}