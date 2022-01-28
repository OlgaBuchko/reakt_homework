import '../users/users.css'

export default function UserPostDetails({postById}) {

    return (
        <div className={'postByUserId'}>
            post id : {postById.id}<br/>
            user id : {postById.userId}<br/>
            tittle : {postById.title}<br/>
            body : {postById.body}
        </div>
    )
}
