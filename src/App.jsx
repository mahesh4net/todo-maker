import {useEffect} from "react"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./nav.jsx";
import Home from "./home.jsx";
import Input from "./input.jsx"
import Todolist from "./todo-list.jsx"
import { useContext } from "react"
import { Mycontext } from "./mycontext.jsx"
import Confirmbox from "./confirmbox.jsx"

function App() {
  
  const {inputval, home, toasts, updateTrigger, confirm} = useContext(Mycontext)
  
  
  
  
  
    useEffect(() => {
    if (updateTrigger > 0) {
      inputval.current.value = "";
      inputval.current.focus();
    }
  }, [updateTrigger]);
  
    return (
        <>
            <Nav></Nav>
            {confirm && <Confirmbox></Confirmbox>}
            <div className="main-container">
             {home ? <Home/> :
               <div className="todo-container">
                <Input></Input>
                <Todolist></Todolist>
               </div>
               
             }
             
            </div>
            <div className="toast-container">
              
              {toasts.map((toast, index) =>
              <>
              {toast.type == "add" ?
                <h1 key={toast.id} className="add-toast">{toast.text}</h1> :
                <h1 key={toast.id} className="delete-toast">{toast.text}</h1> }
                
              </>
              )}
            </div>
        </>
    )
}

export default App;
