import Form from "./components/forms/forms";
import Users from "./components/users/users";
import {useEffect, useState} from "react";
import {userService} from "./services/userServiser";


function App() {

    const [users, setUsers] = useState([]);
    const [filteredUser, setFilteredUser] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredUser([...value])
        });
    }, []);

    const getFilter = (data) => {
        let filterArr = [...users]
        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.id) {
            filterArr = filterArr.filter(user => user.id == (data.id))
        }

        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUser(filterArr)
    }

    return (
        <div className="App">
            <Form getFilter={getFilter}/>
            <Users users={filteredUser}/>
        </div>
    );
}

export default App;
