import {useEffect, useState} from "react";
import Comment from "../comment/comment";


export  default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(comment=>comment.json())
            .then(comment => {
                setComments(comment)
            })



    },[])
    return(
        <div>
            {
                comments.map(comment=>
                    <Comment key={comment.id} id={comment.id} postId={comment.postId} name={comment.name} body={comment.body}/>
                )
            }
        </div>
    )

}

