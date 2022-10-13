import { useState } from 'react'
import { BrowserRouter, Link } from "react-router-dom"

import './App.css';
// Components
import Sidebar from './components/Sidebar';
import Main from './Main'
import Topbar from './components/Topbar';



function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

        {/* Right Section */}             
        <div className="md:pl-64">
          <div className="flex flex-col mx-auto md:px-8">

            {/* Search Bar, Notification Icon, and Hamburger Menu */}        
            <Topbar setSidebarOpen={setSidebarOpen}/>

            {/* MAIN CONTENT */}              
            <Main/>
            
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
