import {useState, useEffect} from "react";
import Launch from "../launch/launch";


export default function Launches() {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flight => {
                let filter = flight.filter(flight => flight.launch_year !== 2020);
                setLaunches(filter)

            });

    }, [])

    return (
        <div>
            {
                launches.map(launch =>
                    <Launch key={launch.mission_name} mission_name={launch.mission_name}
                            launch_year={launch.launch_year} mission_patch_small={launch.links.mission_patch_small}/>
                )
            }

        </div>
    )
}