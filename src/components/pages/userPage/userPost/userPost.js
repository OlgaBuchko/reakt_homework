import '../usersPage.css'

export default function UserPost({post}) {

    return (
        <div>{post &&
        <div className={'userPost'}>
            Post id : {post.id}<br/>
            user id : {post.userId}<br/>
            title : {post.title} <br/>
            body : {post.body}
        </div>
        }
        </div>
    )
}