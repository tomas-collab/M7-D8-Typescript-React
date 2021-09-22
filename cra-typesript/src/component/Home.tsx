import {Form} from 'react-bootstrap' 
import { useEffect,useState } from 'react'
import AllMusic from './AllMusic'

interface Music {
  title_short:string
  type:string
  rank:number
  id:number
}
const Home = ({...props})=>{
   console.log('props',props)
    const [music, setMusic] = useState<Music[]>([])
    const [search, setSearch] = useState('')
console.log('music',music)
    useEffect(() => {
        const fetchMusic =async()=>{
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`)
            if(response){
                const data = await response.json()
                console.log('data',data)
                setMusic(data.data)
            }else{
                console.log('what in the typescript hv you done?')
            }
        } 
        fetchMusic()
    }, [search])
    return(
        <div>
          <Form.Control
             className='my-5 mx-5 '
             type="text"
             placeholder="search"
             value={search}
             onChange={(e)=>{setSearch(e.target.value)}}
        />
        {
            music&& music.map(m=>
                
                   <AllMusic m={m}/>
                )
        }
        
        </div>
    )
}
export default Home