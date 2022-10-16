import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Components
import Ledger from "./Ledger";
import {PieChart} from './components/Pie'


const Dashboard = () => {
    
    return ( 
        <>
            {/* Title  */}
            <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-medium text-gray-900">Today</h1>
            </div>
            {/* Divider  */}
            <div className="flex w-full my-16">
                <div className="w-1/2">

                  <p>Pie Chart</p>
                </div>
                <div>
                    <PieChart/>
                </div>
            </div>
            <Ledger/>
        </>
     );
}
 
export default Dashboard;