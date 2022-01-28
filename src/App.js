import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/layout";
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import UserDetails from "./components/userDetails/userDetails";
import PostDetails from "./components/postDetails/postDetails";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
