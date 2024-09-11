import { createContext } from "react"
import { useState, useReducer, useRef} from "react";

export const Mycontext = createContext()

export default function Mycontextprovider(props) {
  
  const initialval = ["go to work", "walk the dog"]
  const inputval = useRef(null)
  const [toasts, setToasts] = useState([])
  const [updateTrigger, setUpdateTrigger] = useState(0)
  const [hideh1, setHideh1] = useState(-1)
  const Textarea = useRef(null)
  const [editval, setEditval] = useState("default")
  const [home, sethome] = useState(true)
  const [confirm, setConfirm] = useState(false)
  const [deletedata, setDeletedata] = useState(null)
  const containerRef = useRef(null)
  
  
  
  
  
  const [items, dispatch] = useReducer(reducer, initialval)
  
  function reducer(store, action){
    switch(action.type){
      case "add" :
        if(inputval.current.value != ""){
          const newlist =   [...store, inputval.current.value]
          
    
          
          setToasts([...toasts, {id: Date.now(), type: "add", text: "item added"}])
          
          
          
          
            setUpdateTrigger(updateTrigger + 1)
         return newlist
          }
          
        return store
        break;
        
      case "delete" :
        setHideh1(-1)
        setToasts([...toasts, {id: Date.now(), type: "delete", text: "item deleted"}])
        return store.filter((_item, i) => action.payload !== i)
        
        break;
        
      case "edit" :
        const updatedlist = [...store]
        updatedlist[action.id] = action.payload
        
        return updatedlist
        break;
        
        
        
      default :
        return store
    }
  }
  
   
  function togglehome(){
    sethome(false)
    console.log("togglehome called")
  }
  
  function oninput(e){
    setEditval(e.target.value)
    
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  
  
  
  function edit(index){
   setHideh1(index)
   setEditval(items[index])
  }
  
  function save(index){
    if(Textarea.current.value !== "") {
   dispatch({type: "edit", payload: Textarea.current.value, id: index})
   setTimeout(() => {
     setHideh1(-1)
   }, 10 )
    }
    
  else {
    Textarea.current.classList.add("redmsg")
    setTimeout(()=>{
      Textarea.current.classList.remove("redmsg")
    }, 200)
    
    
  }
    
  }
  
   function showconfirm(action){
    setConfirm(true)
    setDeletedata(action)
  }
  
    function cancel(){
    setConfirm(false)
  }
  
  function deletetodo(){
    setConfirm(false)
    containerRef.current.querySelectorAll('div')[deletedata.payload].classList.add("remove-anim")
   
   
   setTimeout(()=>{
    containerRef.current.querySelectorAll('div')[deletedata.payload].classList.remove("remove-anim")
   }, 300)
    
    
    setTimeout(()=>{
     
      dispatch(deletedata)
       
    }, 300)
    
  }
  
  
  return (
  <Mycontext.Provider value={{updateTrigger, inputval, home, toasts, dispatch, items, togglehome, hideh1, setHideh1, Textarea, editval, setEditval, oninput, edit, save, confirm, setConfirm, deletedata, setDeletedata, cancel, deletetodo, showconfirm, containerRef}}>
    {props.children}
    </Mycontext.Provider>
    )
}