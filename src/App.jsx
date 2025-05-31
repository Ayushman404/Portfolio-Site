import './index.css'
import { Outlet } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-secondary-bg to-primary-bg overflow-x-hidden">

      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default App