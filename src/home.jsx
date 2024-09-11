import {useContext} from "react"
import { Mycontext } from "./mycontext.jsx"; 

export default function Home() {
  
  const {togglehome} = useContext(Mycontext)
  
  return (
    <h1 className="home-text" onClick={togglehome}>GO TO TODO</h1>
    )
}