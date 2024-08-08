import Home from './pages/home'
import Register from './pages/register'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route name="/" element={<Home/>}/>
      <Route name="/register" element={<Register/>}/>

      
      
    </Routes>
  )
}
export default App