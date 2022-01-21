import {useState} from "react";

const Form = ({getFilter}) => {
    const [form, setForm] = useState({id: '', name: '', email: ''})

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})

    }
    const onSubmit = (e) => {
        e.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            <form>
                <label> id: <input type="number" name={"id"} value={form.id} onChange={formHandler}/></label>
                <label> name: <input type="text" name={"name"} value={form.name} onChange={formHandler}/></label>
                <label> email: <input type="text" name={"email"} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>search</button>
            </form>
        </div>
    )
}
export default Form