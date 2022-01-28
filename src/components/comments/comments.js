import './coments.css'

export default function Comments({comment}) {
    return (
        <div className={'comment'}>
            <h3>Post Id : {comment.postId}</h3>
            <h3>Id : {comment.id}</h3>
            <h4>Name : {comment.name}</h4>
            <h4>Email : {comment.email}</h4>
            <h5>{comment.body}</h5>
        </div>
    )
}