import {useState} from "react"
import {useContext} from 'react'
import {Mycontext} from "./mycontext.jsx"

export default function Confirmbox() {
  
  const {deletedata, setConfirm, dispatch, cancel, deletetodo} = useContext(Mycontext)
  

    
  
  
  return (
      <div className="confirm-container">
        <div className="confirm-box">
          <h1>Are You Sure To Delete ?</h1>
          <div className="confirm-btn-box">
            <button className="no-btn" onClick={cancel}>No</button>
            <button className="yes-btn" onClick={deletetodo}>Yes</button>
          </div>
        </div>
      </div>
    
    
    )
}