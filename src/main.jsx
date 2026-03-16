import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as HashRouter} from 'react-router-dom'
import { Contextdata } from './Context/ContextComponent.jsx'
import { ContextInfo } from './Context/ContextPages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ContextInfo>
      <Contextdata>
    <App />
    </Contextdata>
    </ContextInfo>
    </HashRouter>
  </StrictMode>,
)
