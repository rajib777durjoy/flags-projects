
import { useEffect, useState } from "react";
import Desh from "./Desh";

const Country = () => {
    const [countris,setCounts]=useState([])

    useEffect(()=>{
     fetch("https://restcountries.com/v3.1/all")
     .then(res=>res.json())
     .then(data=>setCounts(data))
    },[])
    const [visitName,setvisitName]=useState([])

    let clickView=(id)=>{

        let add=[...visitName,id]
        setvisitName(add)
    }
    // console.log(visitName)
   
    return (
        <div>
            <div style={{width:"100%",display:'flex',flexWrap:"wrap"}}>
                {visitName.map(single=>{
                    return (
                    <div>
                    <li>{single.name.common}</li>
                    <img src={single.flags.png} alt=""/>
                   </div>
                    )
                }
                    )}
            </div>
            <br />

            <div style={{width:'100%',border:'2px solid yellow',display:'flex',flexWrap:"wrap"}}>
            {
            countris.map(e=><Desh key={e.cca3} id={e} view={clickView}>  
            </Desh>)
           }
            </div>
          
        </div>
    );
};

export default Country;