import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../../../services/postServise/postService";
import Post from "../post/post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, {})

    return (
        <div>
            <div className={'postsBlock'}>
                <div className={'post'}>
                    {
                        posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
                <div className={'postDetails'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}