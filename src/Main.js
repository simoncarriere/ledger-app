import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./Dashboard";
import Ledger from "./components/Ledger";
import Reports from "./Reports";
import Team from "./Team";

const Main = () => {
    return ( 
     
        <main className="flex-1">
            <div className="py-12">
                
                {/* Main */}
                <div className="px-4 sm:px-6 md:px-0">
                    <Routes>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="ledger" element={<Ledger />}/>
                        <Route path="team" element={<Team />}/>
                        <Route path="reports" element={<Reports />}/>
                    </Routes>
                
                </div>
            </div>
        </main>

     );
}
 
export default Main;