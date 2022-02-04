import '../../App.css'

export default function Cat({id, name, dispatch}) {

    return (
        <div className={'cat'}>
            {name}
            <button onClick={() => dispatch({type: 'Del_cat', payload: {id}})}> delete cat</button>
        </div>
    )
}