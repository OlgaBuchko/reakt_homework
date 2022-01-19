import Post from "../post/post";

export default function  Posts ({posts}) {

    return(
<div>
    {
        posts.map((post)=> <Post key={post.id} post={post} />)
    }
</div>
    )
}