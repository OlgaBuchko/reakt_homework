import "./post.css"

export default function Post(props){
    let {id, userId,title,body} = props;

    return(
        <div className={'post'}>
            <div>id : {id}</div>
            <div>user.id : {userId}</div>
            <div>title: {title}</div>
            <div>{body}</div>
        </div>
    )
}