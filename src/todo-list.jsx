import { MdDelete } from "react-icons/md"
import {useContext} from "react"
import { Mycontext } from "./mycontext.jsx"
import {useState, useRef, useEffect} from "react"
import {MdModeEdit} from "react-icons/md"
import { FaSave } from "react-icons/fa";

export default function Todolist() {
  
  const {items, dispatch, hideh1, setHideh1, Textarea, editval, setEditval, oninput, edit, save, setConfirm, setDeletedata, showconfirm, containerRef} = useContext(Mycontext)
  
  
 
  
  
  
  
  
  useEffect(() => {
    if(Textarea.current){
     
      Textarea.current.style.height = `${Textarea.current.scrollHeight}px`
       Textarea.current.focus()
          Textarea.current.setSelectionRange(Textarea.current.value.length, Textarea.current.value.length);
       
      
    }
   
  }, [hideh1])
  
  
  return <>
    <div className="list-container" ref={containerRef}>
    {items.length !== 0 ? 
    items.map((item, index) => 
    <div className="item-div" key={"item-div" + index }>
      
      
      {hideh1 == index && <textarea value={editval} onChange={oninput} className="areatext" ref={Textarea} rows="1" placeholder="can't save empty value"></textarea>}
      
      
      
      {hideh1 == index && <button onClick={() => save(index)} className="savebtn"><FaSave /></button>}
      
      
      
      
      {hideh1 != index && <button onClick={() => edit(index)} className="editbtn"><MdModeEdit /></button>}
      
      
      
      {hideh1 != index && <h1 key={item}>{item}</h1>}
      
      
      
      <button key={index} onClick={() => showconfirm({type: "delete", payload: index})} className="deletebtn"><MdDelete /></button>
      
      
    </div>
    ) : <h1>There is Nothing !</h1> }
    
    
    </div>
    </>
}