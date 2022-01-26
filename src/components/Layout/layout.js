import {NavLink, Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <div>
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Users"}>Users</NavLink>
            <NavLink to={"/Posts"}>Posts</NavLink>
        </div>
            <div className={"left"}>
                <Outlet/>
            </div>
        </div>
    )
}