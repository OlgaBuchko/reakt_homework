import Dog from "../dog/dog";
import '../../App.css'

export default function Dogs({dogs, dispatch}) {
    return (
        <div className={'dogs'}>
            {dogs.map(dog => <Dog key={dog.id} name={dog.name} id={dog.id} dispatch={dispatch}/>)}
        </div>
    )
}