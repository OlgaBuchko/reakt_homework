import './post.css'

export default function Post ({post}){

    return(
        <div className={'post'}>
            userId : {post.userId} <br/>
            id : {post.id}<br/>
            title : {post.title}<br/>
            body : {post.body}
        </div>
    )
}