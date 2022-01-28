import {NavLink, Outlet} from "react-router-dom";

import './layout.css'

export default function Layout() {
    return (
        <div>
            <div className={'header'}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Users"}>Users</NavLink>
                <NavLink to={"/Posts"}>Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}