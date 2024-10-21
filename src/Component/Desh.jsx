import { useState } from "react";
import './Desh.css'
const Desh =({id,view}) => {
    const [btnitem,setbtn]=useState(false)
   let handelfun=()=>{
    setbtn(!btnitem)
   }

    const {name}=id;
    return (
        <div className={btnitem &&'visited'}>
          <div >
           <li>name:{name.common}</li> 
           <img src={id.flags.png} />
           <button onClick={()=>{
            handelfun()
            view(id)
           }}>{btnitem ?'visited':'visit now'}</button>
           </div>
        </div>
    )
}


export default Desh;