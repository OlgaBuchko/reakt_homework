import './user.css'

export default function User ({user,userById}) {
    return(
        <div className={'user'}>
        <div> {user.id}) {user.name}</div>
            <button onClick={()=>
                userById(user.id)
            }>user details</button>
        </div>
    )
}
