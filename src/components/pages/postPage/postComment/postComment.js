import '../postPage.css'

export default function PostComment({comment}) {
    return (
        <div>
            {comment &&
            <div className={'comment'}>
                comment id : {comment.id} <br/>
post id : {comment.postId}<br/>
                name : {comment.name}<br/>
                body : {comment.body}<br/>
                email : {comment.email}
            </div>
            }
        </div>
    )
}