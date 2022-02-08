import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux";
import {createCar} from "../../store";

export default function Form() {
    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const onsubmit = (data) => {
        console.log(data);
        console.log(new Date().getTime())
        dispatch(createCar({id: new Date().getTime(), data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Save</button>
            </form>
        </div>
    )
}