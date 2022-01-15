import "./user.css"

export default function User(props){
    let {id, name, username, city, street, compname, email} = props;

    return(
        <div className={'user'}>
            <div>id : {id} </div>
            <div>{name}</div>
            <div> User name: {username}</div>
            <div>city : {city}</div>
            <div> street : {street}</div>
            <div>company : {compname}</div>
            <div>email : {email}</div>
        </div>
    );
};