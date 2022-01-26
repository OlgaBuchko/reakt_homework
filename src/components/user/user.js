import {Link} from "react-router-dom";



export default function User({user}){
    const {id,name,}=user
    return(
        <div>
            <Link to={id.toString()} state={user}>{name}</Link>
        </div>
    )
}