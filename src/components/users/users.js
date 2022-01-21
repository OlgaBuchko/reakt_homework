import User from "../user/user";

export default function Users({users}) {
    return (
        <div>
            {
                users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    )
}