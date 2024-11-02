import Snippet from "./Snippet"

const Theory = () => {
    const code = 
    `
useEffect(() => {
  // Code here is the "effect" — this is where side effects happen
  fetchData();

  // Optionally, return a cleanup function that runs when the component unmounts.
  return () => {
    // Cleanup code, e.g., unsubscribing from an event or clearing timers.
  };
}, [/* dependencies */]);
    `
  return (
    <div className="theory">
        <h1>useEffect()</h1>
      Before we understand useEffect , let’s understand what are Side effects.
      <h2>Side Effect</h2>
Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:
<div></div>
    <div style={{marginLeft:"20px"}}>
    <div style={{marginTop:"10px"}}>1.
    <b> Fetching data </b>from an API.
    </div>
    <div>2.
    <b> Modifying the DOM </b>manually.
    </div>
    <div>3.
    <b> Subscribing to events</b> (like WebSocket connections, timers, or browser events).
    </div>
    <div style={{marginBottom:"10px"}}>4.<b> Starting a clock</b></div>
    </div>

These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.
    <div className="line"></div>
    <div>
    <h2>How `useEffect` Manages Side Effects:</h2>

The `useEffect` hook lets you perform side effects in functional components in a safe, predictable way:
    <Snippet code={code}/>
    <div style={{marginLeft:"20px",marginTop:"20px"}}>
    <div style={{marginTop:"10px"}}>1. <b>The first argument</b> to `useEffect` is the effect function, where you put the code that performs the side effect.</div>
    <div>2. <b>The second argument</b> is the dependencies array, which controls when the effect runs. This array tells React to re-run the effect only when certain values (props or state) change. If you pass an empty array `[]`, the effect will only run <b>once</b> after the initial render.</div>
    <div>3. <b>Optional Cleanup</b>: If your side effect needs cleanup (e.g., unsubscribing from a WebSocket, clearing intervals), `useEffect` allows you to return a function that React will call when the component unmounts or before re-running the effect.</div>
    </div>


    </div>
    
    </div>

  )
}

export default Theory
