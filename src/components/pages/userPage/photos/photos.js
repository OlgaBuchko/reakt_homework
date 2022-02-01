import {useEffect, useState} from "react";
import {AlbumsService} from "../../../../services/albomsService/albomsServise";
import Photo from "../photo/photo";
import {useLocation} from "react-router-dom";

export default function Photos(){
    const {state}=useLocation()
    const [photos, setPhotos] = useState(null);
    useEffect(()=>{
        AlbumsService.getPhotoByAlbumId(state).then(value=>setPhotos([...value]))
    },[state])
    return(
        <div>
            {photos &&
                photos.map(photo=><Photo key={photo.id} photo={photo}/>)
            }
        </div>
    )
}