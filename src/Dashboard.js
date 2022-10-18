// Components
import Ledger from "./Ledger";
import Stats from "./components/Stats";
import Walkthrough from "./components/Walkthrough";
// Charts
import {PieChart} from './components/Pie'
import { PolarAreaChart } from "./components/PolarAreaChart";
import { BarChart } from "./components/BarChart";

const Dashboard = () => {

    return ( 
        <>
            {/* Title  */}
            <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-medium text-gray-900">Activity</h1>
            </div>


            <Walkthrough />

            <div className='my-8'>
                <Stats/>
            </div>
          
            
            {/* {transactions.length > 0 && ( */}
                <div className="mt-16 align-middle lg:flex">

                <div className="flex-1">
                    <PieChart/>
                </div>
                
                <div className="flex justify-center flex-1">
                    <PolarAreaChart />
                </div>
                
                <div className="flex-1">
                    <BarChart />
                </div>
              
            </div>
            {/* ) } */}
            

            
            
            
            <div className="mt-16">
                <Ledger/>
            </div>
        </>
     );
}
 
export default Dashboard;