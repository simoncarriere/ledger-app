import { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import './App.css';

// Context
import LedgerContextProvider from './contexts/LedgerContext';

// Components
import Sidenav from './components/Sidenav';
import Topbar from './components/Topbar';
import Main from './Main'
// import CmdPalette from './components/CmdPalette'

function App() {

  // Mobile main nav
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <LedgerContextProvider>
      <BrowserRouter>
          <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

          {/* Right Section */}             
          <div className="md:pl-64">
            <div className="flex flex-col mx-auto md:px-8">

              {/* Search Bar, Notification Icon, and Hamburger Menu */}        
              <Topbar setSidebarOpen={setSidebarOpen}/>

              {/* MAIN CONTENT */}              
              <Main/>

              {/* <CmdPalette /> */}
              
            </div>
          </div>
      </BrowserRouter>
    </LedgerContextProvider>
  );
}

export default App;