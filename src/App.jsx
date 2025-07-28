import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bg from './components/bg/Bg.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  </StrictMode>,
)

function App() {
  return (
    <div>
      <Bg />
    </div>
  );
}
