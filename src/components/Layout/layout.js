import {NavLink, Outlet} from "react-router-dom";

import './layout.css'

export default function Layout() {
    return (
        <div>
            <div className={'header'}>
                <NavLink to={"/users"}>Users</NavLink>
                <NavLink to={"/posts"}>Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}