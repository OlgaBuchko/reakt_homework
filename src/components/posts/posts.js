import {useEffect, useState} from "react";
import {postService} from "../../services/postServise/postService";

import Post from "../post/post";

export default function Posts(){
const [posts,setPosts]=useState([]);
useEffect(()=>{
    postService.getAll().then(value=>setPosts([...value]))
},[])

return(
    <div>
        {posts.map(post=> <Post key={post.id} post={post}/>)}
    </div>
)
}