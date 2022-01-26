import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/layout";
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import UserDetails from "./components/userDetails/userDetails";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
