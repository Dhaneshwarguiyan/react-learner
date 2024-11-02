import { useEffect, useState } from "react"


const Clock = ({depend}) => {
    const [timer,setTimer] = useState(0);

    useEffect(()=>{
        const clock = setInterval(()=>{
            setTimer((timer)=>timer+1);
        },1000)
        return ()=>{
            clearInterval(clock);
        }
    },[depend]);


  return (
    <div >
        <div style={{fontSize:"40px"}}>Clock Counter</div>
      <div className="clock">{timer}</div>
    </div>
  )
}

export default Clock
