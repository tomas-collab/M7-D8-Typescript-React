import { RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'

interface FormComponentProps{
    m:any
}
type MixedProps = RouteComponentProps & FormComponentProps
const AllMusic =({m,history}:MixedProps)=>{
    return(
        // <div>{m}</div>
        <ul className='musics'>
            <button onClick={()=>history.push(`/:${m.id}`)}>Title: {m.title_short}</button>
            <li>Type: {m.type}</li>
            <li>Rank: {m.rank}</li>
            <li>MusicID: {m.id}</li>
       </ul> 
    ) 
}
export default withRouter(AllMusic)