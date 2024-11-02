import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Snippet = ({code}) => {
//   const codeString = `useEffect(()=>{
//     //Your Side Effects will appear here
//     return ()=>{
//         // Optionally, return a cleanup function that 
//         // runs when the component unmount Cleanup code, 
//         // e.g., unsubscribing from an event or clearing timers.
//         }
//     },[/* dependencies */])`;


  return (
    <div className="snippet">
      <SyntaxHighlighter
        language="jsx"
        style={atomDark}
        customStyle={{ padding:"25px", background: "#303030" }}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Snippet;
