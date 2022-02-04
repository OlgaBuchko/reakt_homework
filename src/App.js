import {useReducer} from "react";
import Form from "./components/form/form";

const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_cat':
            return {
                ...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]
            }
        case 'Add_dog':
            return {
                ...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]
            }
        case 'Del_cat':
            return {
                ...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)
            }
        case 'Del_dog':
            return {
                ...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)
            }
        default :
            return state
    }
}

function App() {
    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    return (
        <div>
            <Form dispatch={dispatch} cats={cats} dogs={dogs}/>
        </div>
    );
}

export default App;
