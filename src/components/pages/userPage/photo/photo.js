import '../usersPage.css'

export default function Photo({photo}){
    return(
        <div className={'photoOutlet'}>
            <div>
            {photo.title}<br/>
            </div>
            <div>
            <img src={`${photo.thumbnailUrl}`} alt={'photo'} />
        </div>
        </div>
    )
}