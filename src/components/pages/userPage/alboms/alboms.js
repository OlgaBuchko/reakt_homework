import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {AlbumsService} from "../../../../services/albomsService/albomsServise";
import Album from "../album/album";

export default function Albums() {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        AlbumsService.getByUserId(id).then(value => setAlbums([...value]))
    })

    return (
        <div>
            <div>
                {
                    albums.map(album => <Album key={album.id} album={album}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}