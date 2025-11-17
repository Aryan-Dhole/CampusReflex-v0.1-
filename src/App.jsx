import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Notices from './pages/Notices'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ImportantLinks from './components/ImportantLinks'
import LatestNews from './components/LastestNews'
import AlertSection from './components/AlertSection'
import UpcomingEvents from './components/UpcomingEvents'


function App() {

  return (

    <BrowserRouter>

      <Navbar />
      <Hero />
      <StatsSection />

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ImportantLinks />
          </div>

          <div className="lg:col-span-1 space-y-4">
            <LatestNews />
            <UpcomingEvents />
          </div>

          <div className="lg:col-span-1">
            <AlertSection />
          </div>
        </div>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/notices' element={<Notices />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App
