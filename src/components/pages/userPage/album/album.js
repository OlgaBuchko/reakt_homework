import {useNavigate} from "react-router-dom";

import '../usersPage.css'

export default function Album({album}) {
    let navigate = useNavigate();

    return (
        <div>
            <div className={'album'}>
                id : {album.id}<br/>
                user Id : {album.userId}<br/>
                title : {album.title}<br/>
                <button onClick={() => {
                    navigate(`/users/id/albums/${album.id}/photos`, {state: album.id})
                }}>photo
                </button>

            </div>

        </div>
    )
}