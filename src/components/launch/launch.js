import './launch.css'


export default function Launch(props){
    let {mission_name, launch_year, mission_patch_small} = props
    return(
        <div className={'launch'}>
            <div className={'h1_p'}>
                <h1>{mission_name}</h1>
                <p>{launch_year}</p>
            </div>
            <div className={'img'}>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    )
}