import Ledger from "./components/Ledger";

const Main = () => {
    return ( 
        <main className="flex-1">
            <div className="py-12">
                {/* Title 
                <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-2xl font-medium text-gray-900">Today</h1>
                </div>
                */}
                 <div className="py-8">
                    <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                    <Ledger />
                </div>
            </div>
        </main>
     );
}
 
export default Main;