import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Notices from './pages/Notices'


function App() {

  return (

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/notices' element={<Notices />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App
