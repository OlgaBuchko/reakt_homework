import '../../App.css'

export default function Dog({name, id, dispatch}) {
    return (
        <div className={'dog'}>
            {name}
            <button onClick={() => dispatch({type: 'Del_dog', payload: {id}})}>delete dog</button>
        </div>
    )
}