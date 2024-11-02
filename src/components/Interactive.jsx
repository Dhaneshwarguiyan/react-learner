import Snippet from "./Snippet";
import Clock from "./Clock";
import { useEffect, useState } from "react";

const Interactive = () => {
  const [visible, setVisible] = useState(true);
  const [depend, setDepend] = useState(true);
  const [display,setDisplay] = useState("");
  console.log(display);

  useEffect(()=>{
    if(visible) setDisplay("Mounted");
    else setDisplay("Un mounted");
    return ()=>{
      setDisplay("Un Mounted");
    }
  },[depend,visible])

  const code = `useEffect(()=>{
        const clock = setInterval(()=>{
            setTimer((timer)=>timer+1);
        },1000)
        return ()=>{
            console.log("unMounted");
            clearInterval(clock);
        }
    },[depend]);`;

  return (
    <div className="snip">
      <Snippet code={code} />
      <div className="inter">
        <div className="ctrl">
          {visible && <Clock depend={depend} setDepend={setDepend} />}
          <div className="btn">
            <button onClick={() => setVisible(true)}>Mount</button>
            <button onClick={() => setVisible(false)}>unMount</button>
            <button onClick={() => setDepend(!depend)}>Rerender</button>
          </div>
        </div>
          <div className="on-mounted box" >
            {display}
          </div>
      </div>
    </div>
  );
};

export default Interactive;
