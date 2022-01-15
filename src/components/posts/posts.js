import {useEffect, useState} from "react";
import Post from "../post/post";
import "./posts.css"


export  default function Posts() {
    let [posts, setPosts]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(post=>post.json())
            .then(post=>{
                setPosts(post)})
    },[])

    return(
        <div className={'post_block'}>
            {
                posts.map(post=><Post key={post.id}  id={post.id} userId={post.userId} title={post.title}body={post.body}/>
                )}
        </div>
    )
}