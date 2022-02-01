import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import '../postPage.css'
import {postService} from "../../../../services/postServise/postService";

export default function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getId(id).then(value => setPost([...value]))
    })

    return (
        <div>
            {post &&
            <div>
                post id : {post.id} <br/>
                user id : {post.userId}<br/>
                title : {post.title}<br/>
                body : {post.body}
                <Link to={`/posts/${id}/comments`}>
                    <button>comments</button>
                </Link>
            </div>}
            <div>
                <Outlet/>
            </div>
        </div>
    )
}