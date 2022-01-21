export default function User({user}) {
    return (
        <div>
            <p> {user.id}) {user.name} email: {user.email}</p>
        </div>
    )
}
