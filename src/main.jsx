import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mycontextprovider from "./mycontext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mycontextprovider>
    <App />
    </Mycontextprovider>
  </StrictMode>,
)
