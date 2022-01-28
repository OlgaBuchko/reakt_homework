import {useEffect, useState} from "react";

import {postService} from "../../services/postServise/postService";
import Post from "../post/post";
import PostDetails from "../postDetails/postDetails";
import Comments from "../comments/comments";
import {commentsService} from "../../services/commentsService/commentsService";
import './posts.css'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    const commentsByPostId = (id) => {
        commentsService.getPostId(id).then(value => setComments([...value]))
    }

    return (
        <div>
            <div className={'posts'}>
                <div>
                    {
                        posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
                <div>
                    <PostDetails commentsByPostId={commentsByPostId}/>
                </div>
            </div>
            <div>
                {
                    comments && comments.map(comment => <Comments key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    )
}