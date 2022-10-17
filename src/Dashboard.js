// Components
import Ledger from "./Ledger";
import {PieChart} from './components/Pie'
import Stats from "./components/Stats";
import { PolarAreaChart } from "./components/PolarAreaChart";
import { GroupedBarChart } from "./components/GroupedBarChart";
import { BarChart } from "./components/BarChart";

const Dashboard = () => {
    
    return ( 
        <>
            {/* Title  */}
            <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-medium text-gray-900">Activity</h1>
            </div>
          
            
            <div className="flex mt-16">

                {/* <PieChart/> */}
                <div className="w-full h-full">
                    <PolarAreaChart />
                </div>
                {/* <GroupedBarChart/> */}
                <div className="w-full">
                    <BarChart />
                </div>
              
            </div>
            <div className="mt-16">
                <Stats/>
            </div>
            <div className="mt-16">
                <Ledger/>
            </div>
        </>
     );
}
 
export default Dashboard;