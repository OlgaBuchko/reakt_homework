import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../../../services/userService/userService";
import UserPost from "../userPost/userPost";

export default function UserPosts() {
    const [posts, setPosts] = useState([]);
    let {id} = useParams()
    useEffect(() => {
        userService.getUserPosts(id).then(value => setPosts([...value]))
    }, [id])
    return (
        <div>
            <div>
                {
                    posts.map(post => <UserPost key={post.id} post={post}/>)
                }
            </div>

        </div>
    )
}