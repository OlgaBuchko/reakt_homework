import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/layout";
import Users from "./components/pages/userPage/users/users";
import UserDetail from "./components/pages/userPage/userDetails/userDetail";
import UserPosts from "./components/pages/userPage/userPosts/UserPosts";
import Posts from "./components/pages/postPage/posts/posts";
import PostDetails from "./components/pages/postPage/postDetails/PostDetails";
import PostComments from "./components/pages/postPage/postComments/postComments";
import Albums from "./components/pages/userPage/alboms/alboms";
import Photos from "./components/pages/userPage/photos/photos";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={`/users/:id/albums/:albumId/photos`} element={<Photos/>}/>
                        </Route>
                        <Route path={':id'} element={<UserDetail/>}>
                            <Route path={'/users/:id/posts'} element={<UserPosts/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'/posts/:id/comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
