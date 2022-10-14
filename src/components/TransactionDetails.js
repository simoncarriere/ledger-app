import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function TransactionDetails({openTransactionDetails, setOpenTransactionDetails, transactionDetail}) {
  

    return (
    <Transition.Root show={openTransactionDetails} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenTransactionDetails}>
            <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative w-screen max-w-md pointer-events-auto">
                                <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        onClick={() => setOpenTransactionDetails(false)}
                                    >
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                                </Transition.Child>

                                {/* Form Title */}
                                <div className="flex flex-col h-full px-4 py-6 overflow-y-scroll bg-white shadow-xl sm:px-6">

                                    <div className="mt-4">
                                        <div>
                                            <Dialog.Title className="text-xl font-medium text-gray-900">
                                                <span className="sr-only">Details for </span>
                                                {transactionDetail.title} transaction details
                                            </Dialog.Title>
                                            <p className="mt-1 text-sm text-gray-400">#{transactionDetail.transaction_id}</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center p-8 my-4 full-w bg-lime-100'>
                                        <h2 className='text-2xl tracking-wide text-slate-800'>${transactionDetail.amount}.00 CAD</h2>
                                        {/* <p className='mt-1 text-slate-400'>{transactionDetail.date}</p> */}
                                    </div>
                                    
                                    <div className='mt-8'>
                                        <h3 className="font-medium text-gray-900">Details</h3>
                                        <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                            <div className="flex justify-between py-3 text-sm ">
                                                <dt className="text-gray-500">Purchased by</dt>
                                                <dd className="text-gray-900">{transactionDetail.purchased_by}</dd>
                                            </div>
                                            <div className="flex justify-between py-3 text-sm ">
                                                <dt className="text-gray-500">Purchased on</dt>
                                                <dd className="text-gray-900">{transactionDetail.date}</dd>
                                            </div>
                                            <div className="flex justify-between py-3 text-sm ">
                                                <dt className="text-gray-500">Purchase Category</dt>
                                                <dd className="text-gray-900">{transactionDetail.type}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className='mt-8'>
                                            <h3 className="font-medium text-gray-900">Description</h3>
                                            <div className="flex items-center justify-between mt-2">
                                            <div className="text-sm italic text-gray-500">
                                                {transactionDetail.desc ? (
                                                    <p>{transactionDetail.desc}</p>
                                                ) :(
                                                    <p>No description</p>
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                className="flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                              
                                                <span className="sr-only">Add description</span>
                                            </button>
                                        </div>
                                    </div>














                                    
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </div>
        </Dialog>
    </Transition.Root>
  )
}
