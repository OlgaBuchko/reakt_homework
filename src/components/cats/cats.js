import Cat from "../cat/cat";
import '../../App.css'

export default function Cats({cats, dispatch}) {
    return (
        <div className={'cats'}>
            {
                cats.map(cat => <Cat key={cat.id} id={cat.id} name={cat.name} dispatch={dispatch}/>)}
        </div>
    )
}