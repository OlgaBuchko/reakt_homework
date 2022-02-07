import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


export default function Form(){
    const {register,setValue}=useForm();
   const {carUpdate} = useSelector(state=>state.cars)

    const dispatch=useDispatch();

    const onsubmit = (data)=>{
        e.preventDefault()

    }

    useEffect(()=>{
        if(carUpdate){
             setValue('model',carUpdate.model)
            setValue('price',carUpdate.price)
            setValue('year',carUpdate.year)
        }
    },[carUpdate])

    return(
        <div>
            <form onSubmit={onsubmit}>
                <input type="text" name={'model'} placeholder={'model'} {...register('model')}/>
                <input type="text" name={'price'} placeholder={'price'} {...register('price')}/>
                <input type="text" name={'year'}placeholder={'year'} {...register('year')}/>
                <button>Save</button>
            </form>
        </div>
    )
}