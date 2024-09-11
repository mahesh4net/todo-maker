import {useEffect} from "react"
import { useContext } from "react"
import { Mycontext } from "./mycontext.jsx";

export default function Input() {
  
  
   const {dispatch, inputval} = useContext(Mycontext)
  
  
  
 useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        dispatch({ type: "add" });
      }
    };

    const inputElement = inputval.current;
   
      inputElement.addEventListener("keydown", handleKeyDown);
    console.log('eventlistener added')

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
        console.log('eventlistener removed')
      }
    };
  }, []);
  
  
  
  
  return (
    <>
     <div className="input-div">
      <input placeholder="enter your todo" ref={inputval}></input>
      <button onClick={() => dispatch({type: "add"})}>ADD</button>
      </div>
    </>
    )
}