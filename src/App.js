import {useEffect,useState} from "react";
import './App.css';

import {getUser, getUsers, postsById} from "./services/api";
import Users from "./components/users/users";
import UserDetails from "./components/userDetails/userDetails";
import Posts from "./components/posts/posts";




function App() {

  const [user,setUser] = useState()
    const userById = (id) =>{
        getUser(id).then(userDetails=>setUser(userDetails.data))
    }

  const [users,setUsers] = useState([]);
        useEffect(()=>{
        getUsers().then(users => setUsers(users.data));
    },[]);

  const [posts, setPosts] = useState([])
    const userPosts = (id)=>{
      postsById(id).then(posts =>setPosts(posts.data))
    }

  return (
    <div>
        <div className={'users_block'}>

            <Users users={users} userById={userById} />
            {
                user && <UserDetails user={user} userPosts={userPosts}/>
            }

        </div>
        <div>{
            posts && <Posts posts={posts}/>
        }</div>
    </div>
  );
}

export default App;
