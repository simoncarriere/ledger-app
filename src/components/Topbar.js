import { Fragment, useState, useContext } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
// Context
import { LedgerContext } from '../contexts/LedgerContext'

import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Topbar = ({setSidebarOpen}) => {

  const [searchTerm, setSearchTerm] = useState('')


  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const {transactions, users} = useContext(LedgerContext)
  
  const filteredTransactions =
  query === ''
    ? []
    : transactions.filter((transaction) => {
        return transaction.title.toLowerCase().includes(query.toLowerCase())
      })
      

  return ( 
        <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
              <button
                type="button"
                className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="flex justify-between flex-1 px-4 md:px-0">
                <div className="flex flex-1 ">
                  <form className="flex w-full md:ml-0 " action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center ml-4 md:ml-6">
                  <button
                    type="button"
                    className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>















              <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
                  <Dialog as="div" className="relative z-10" onClose={setOpen}>
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20">
                      <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                      >
                      <Dialog.Panel className="max-w-xl p-2 mx-auto transition-all transform bg-white shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
                          <Combobox onChange={(transaction) => (window.location = transaction.transaction_id)}>
                          <Combobox.Input
                              className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                              placeholder="Search..."
                              onChange={(event) => setQuery(event.target.value)}
                          />

                          {filteredTransactions.length > 0 && (
                              <Combobox.Options
                              static
                              className="py-2 -mb-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2"
                              >
                              {filteredTransactions.map((transaction) => (
                                  <Combobox.Option
                                  key={transaction.transaction_id}
                                  value={transaction.title}
                                  className={({ active }) =>
                                      classNames(
                                      'cursor-default select-none rounded-md px-4 py-2',
                                      active && 'bg-lime-100 '
                                      )
                                  }
                                  >
                                  {transaction.title}
                                  </Combobox.Option>
                              ))}
                              </Combobox.Options>
                          )}

                          {query !== '' && filteredTransactions.length === 0 && (
                              <div className="px-4 text-center py-14 sm:px-14">
                              {/* <UsersIcon className="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" /> */}
                              <p className="mt-4 text-sm text-gray-900">No Transactions found using that search term.</p>
                              </div>
                          )}
                          </Combobox>
                      </Dialog.Panel>
                      </Transition.Child>
                  </div>
                  </Dialog>
              </Transition.Root>


















        </div>
     );
}
 
export default Topbar;