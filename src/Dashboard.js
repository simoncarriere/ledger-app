// Components
import Ledger from "./Ledger";
import Stats from "./components/Stats";
import Walkthrough from "./components/Walkthrough";
// Charts
// import {PieChart} from './components/Pie'
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

      <div className="my-6">
        <Stats />
      </div>

      <div className="my-6 lg:flex">
        {/* <div className="relative flex-1 p-6 mr-2 border rounded-lg">
                    <h3 className="mb-6 text-lg font-medium text-gray-900 ">Spent By Member</h3>
                    <PieChart/>
                    </div>
                */}
        <div className="flex-1 p-6 border rounded-lg lg:mr-2">
          <h3 className="mb-6 text-lg font-medium text-gray-900 ">
            Spent By Member
          </h3>
          <div className="flex justify-center ">
            <PolarAreaChart />
          </div>
        </div>

        <div className="flex-1 p-6 my-6 border rounded-lg lg:ml-2 lg:my-0">
          <h3 className="mb-6 text-lg font-medium text-gray-900 ">
            Spent By Category
          </h3>
          <div className="">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Ledger />
      </div>
    </>
  );
};

export default Dashboard;
