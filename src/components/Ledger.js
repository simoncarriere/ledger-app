import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import NewTransaction from './NewTransaction';

const Ledger = () => {

    const [transactions, setTransactions] = useState([])
    const [openNewTransaction, setOpenNewTransaction] = useState(false)

    return (
    <div>
        
        {/* Table Heading */}
        <div className="flex items-center justify-between ">
            <h3 className="text-xl font-medium leading-6 text-gray-900">Recent Transactions</h3>
            <div className="flex mt-3 sm:mt-0 sm:ml-4">
                <button
                    onClick={() => setOpenNewTransaction(true)}
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    New Transaction
                </button>
            </div>
        </div>
        
        {/* Table */}
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden md:rounded-lg">
                        {transactions.length > 0 ? (
                            <table className="min-w-full ">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6 hidden xl:table-cell">
                                        <a href="#" className="inline-flex group">
                                            Transaction ID
                                            <span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
                                                <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-medium text-gray-900">
                                        <a href="#" className="inline-flex group">
                                            Title
                                            <span className="flex-none ml-2 text-gray-900 bg-gray-200 rounded group-hover:bg-gray-300">
                                                <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-medium text-gray-900 hidden lg:table-cell">
                                        <a href="#" className="inline-flex group">
                                            Amount
                                            <span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
                                                <ChevronDownIcon
                                                    className="flex-none invisible w-5 h-5 ml-2 text-gray-400 rounded group-hover:visible group-focus:visible"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-medium text-gray-900 hidden lg:table-cell">
                                        <a href="#" className="inline-flex group">
                                            Date
                                            <span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
                                                <ChevronDownIcon
                                                    className="flex-none invisible w-5 h-5 ml-2 text-gray-400 rounded group-hover:visible group-focus:visible"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-medium text-gray-900">
                                    <a href="#" className="inline-flex group">
                                        Purchased By
                                        <span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
                                        <ChevronDownIcon
                                            className="flex-none invisible w-5 h-5 ml-2 text-gray-400 rounded group-hover:visible group-focus:visible"
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-medium text-gray-900">
                                        <a href="#" className="inline-flex group">
                                            Type
                                            <span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
                                                <ChevronDownIcon
                                                    className="flex-none invisible w-5 h-5 ml-2 text-gray-400 rounded group-hover:visible group-focus:visible"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                           
                            <tbody className='divide-y divide-slate-200'>
                                {transactions.map((transaction) => (
                                    <tr key={transaction.transaction_id} className="cursor-pointer hover:bg-slate-100">
                                        <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap sm:pl-6">
                                            #{transaction.transaction_id}
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                            {transaction.title}
                                            <dl className="font-normal lg:hidden">
                                                <dt className="sr-only">Title</dt>
                                                <dd className="mt-1 text-gray-700 truncate">{transaction.amount}</dd>
                                                <dt className="sr-only lg:hidden">Email</dt>
                                                <dd className="mt-1 text-gray-500 truncate lg:hidden">{transaction.date}</dd>
                                            </dl>
                                        </td>
                                        <td className="hidden px-3 py-4 text-sm text-gray-500 whitespace-nowrap lg:table-cell">${transaction.amount}</td>
                                        <td className="hidden px-3 py-4 text-sm text-gray-500 whitespace-nowrap lg:table-cell">{transaction.date}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{transaction.purchased_by}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{transaction.type}</td>
                                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                            <a href="#" className="text-gray-800 hover:text-lime-400">
                                            Edit<span className="sr-only">, {transaction.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="py-8 text-center border-t border-slate-200 ">
                                <svg
                                    className="w-12 h-12 mx-auto text-gray-400 transition ease-in-out cursor-pointer hover:text-lime-400 hover:-translate-y-1 hover:scale-105"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    onClick={() => setOpenNewTransaction(true)}
                                >
                                    <path
                                       vectorEffect="non-scaling-stroke"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                    />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No Transactions</h3>
                                <p className="mt-1 text-sm text-gray-500">Get started by adding your first transaction.</p>  
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Slideout */}
        <NewTransaction openNewTransaction={openNewTransaction} setOpenNewTransaction={setOpenNewTransaction} transactions={transactions} setTransactions={setTransactions}/>
    
    </div>
  )
}

export default Ledger;