import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/postServise/postService";

export default function PostDetails({commentsByPostId}) {
    const {id} = useParams()
    const [post, setPost] = useState(null);
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getId(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div>
            {post &&
            <div>
                post id : {post.id}<br/>
                user id : {post.userId}<br/>
                tittle : {post.title}<br/>
                body : {post.body}
                <button onClick={() => {
                    commentsByPostId(post.id)
                }}>comments
                </button>
            </div>}
        </div>
    )
}
