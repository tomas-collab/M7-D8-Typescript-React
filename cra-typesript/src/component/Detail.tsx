import { withRouter } from "react-router"
import { RouteComponentProps } from 'react-router-dom'
import {useEffect,useState} from 'react'
interface HomeProps{
    home:string

}

const Detail =({...props}:RouteComponentProps)=>{
    console.log('props',props)
    console.log('path',props.match.params)
    const [detail, setDetail] = useState([])
    useEffect(() => {
        const fetchMusic =async()=>{
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${props.match.url}`)
            if(response){
                const data = await response.json()
                console.log('all tracksssss',data)
                setDetail(data)
            }else{
                console.log('what in the typescript hv you done?')
            }
        } 
        fetchMusic()
    }, [])

    return(
       <div> detail hello</div>
//        <ul className='musics'>
//        <li>Title: {m.title_short}</li>
//        <li>Type: {m.type}</li>
//        <li>Rank: {m.rank}</li>
//        <li>MusicID: {m.id}</li>
// </ul>
    )
}

export default withRouter(Detail)