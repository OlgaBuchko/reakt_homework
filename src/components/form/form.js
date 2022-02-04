import {useRef} from "react";

import '../../App.css'
import Cats from "../cats/cats";
import Dogs from "../dogs/dogs";

export default function Form({dispatch, cats, dogs}) {
    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type: 'Add_cat', payload: {cat: catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type: 'Add_dog', payload: {dog: dogInput.current.value}})
    }
    return (
        <div className={"forms"}>
            <form onSubmit={form}>
                <label>Cat: <input type={'text'} name={"cat"} ref={catInput}/></label>
                <button onClick={saveCat}>save</button>
                <Cats cats={cats} dispatch={dispatch}/>
            </form>
            <form onSubmit={form}><label>Dog: <input type={'text'} name={"dog"} ref={dogInput}/></label>
                <button onClick={saveDog}>save</button>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </form>
        </div>
    )
}