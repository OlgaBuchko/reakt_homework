import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {commentsService} from "../../../../services/commentsService/commentsService";

import PostComment from "../postComment/postComment";

export default function PostComments() {
    const [comments, setComments] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        commentsService.getPostId(id).then(value => setComments([...value]))
    })

    return (
        <div>
            {
                comments && comments.map(comment => <PostComment key={comment.id} comment={comment}/>)
            }
        </div>
    )
}