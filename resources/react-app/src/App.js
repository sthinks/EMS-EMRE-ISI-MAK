import { BrowserRouter } from 'react-router-dom'
import Rotate from './routing/Rotate'
import './css/app.css'

function App() {
  return (
    <div style={{ fontFamily: 'Myriad Pro' }}>
      <BrowserRouter>
        <Rotate />
      </BrowserRouter>
    </div>
  )
}

export default App
