// Components
import Ledger from "./Ledger";
import {PieChart} from './components/Pie'

const stats = [
    { name: 'Total Amount Spent', stat: '$2,000.00' },
    { name: 'Allocated Amount Spent', stat: '58.16%' },
    { name: 'Avg. Amount Spent', stat: '24.57%' },
  ]
  

const Dashboard = () => {
    
    return ( 
        <>
            {/* Title  */}
            <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-medium text-gray-900">Activity</h1>
            </div>
          
            {/* Divider  */}
            <div className="w-full mt-16 ">

                <PieChart/>
            

                
                <div className="mt-16">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>
                    <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
                        {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 overflow-hidden bg-white border rounded-lg cursor-pointer hover:bg-slate-100 sm:p-6">
                            <dd className="text-3xl text-gray-900 ">{item.stat}</dd>
                            <dt className="mt-1 text-sm truncate text-slate-400">{item.name}</dt>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="mt-16">
                <Ledger/>
            </div>
        </>
     );
}
 
export default Dashboard;