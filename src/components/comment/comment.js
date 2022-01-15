import './commen.css'


export default function Comment(props){
    let {id, postId, name, body} = props;

    return(
        <div>
            <div>id : {id}</div>
            <div> post id : {postId}</div>
            <div> comment name : {name}</div>
            <div>{body}</div>
        </div>
    )
}