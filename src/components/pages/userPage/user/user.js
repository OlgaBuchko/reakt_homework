import {Link} from "react-router-dom";
import '../usersPage.css'

export default function User({user}) {
    const {id, name,} = user
    return (
        <div>
            <div>
                {name}
            </div>
            <div className={'userButton'}>
                <button><Link to={id.toString()} state={user}>User details</Link></button>
                <button><Link to={`${id.toString()}/albums`}>albums</Link></button>
            </div>
        </div>
    )
}