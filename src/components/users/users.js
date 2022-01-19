import User from "../user/user";
import './users.css'

export default function Users({users,userById}){
    return(
        <div className={'userBox'}>
            {
    users.map((user)=><User key={user.id} user={user} userById={userById}/>)
            }
        </div>
    )
}