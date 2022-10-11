import { Fragment, useState } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpDownIcon, PlusIcon } from '@heroicons/react/20/solid'

const categories = [
    { id: 1, name: 'Office' },
    { id: 2, name: 'Travel' },
    { id: 3, name: 'Digital' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Outsourcing' }
]

const people = [
    { name: 'Wade Cooper', username: '@wadecooper' },
    { name: 'Arlene Mccoy', username: '@arlenemccoy' },
    { name: 'Devon Webb', username: '@devonwebb' },
    { name: 'Tom Cook', username: '@tomcook' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NewTransaction = ({openNewTransaction, setOpenNewTransaction}) => {


    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return ( 
        <Transition.Root show={openNewTransaction} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenNewTransaction}>
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
                                        onClick={() => setOpenNewTransaction(false)}
                                    >
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                                </Transition.Child>
                                
                                {/* Form */}
                                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">

                                    {/* Form Title */}
                                    <div className="px-4 sm:px-6">
                                        <Dialog.Title className="text-lg font-medium text-gray-900">Add New Transaction</Dialog.Title>
                                    </div>


                                    {/* Form */}
                                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                                        <div className="flex flex-col justify-between flex-1">
                                            <div className="divide-y divide-gray-200 ">
                                                <div className="pt-6 pb-5 space-y-6">

                                                    {/* Title */}
                                                    <div>
                                                        <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                                            Title
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                            type="text"
                                                            name="project-name"
                                                            id="project-name"
                                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Amount */}
                                                    <div>
                                                        <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                                            Amount
                                                        </label>
                                                        <div className="relative mt-1 rounded-md shadow-sm">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <span className="text-gray-500 sm:text-sm">$</span>
                                                            </div>
                                                            <input
                                                            type="text"
                                                            name="price"
                                                            id="price"
                                                            className="block w-full pr-12 border-gray-300 rounded-md pl-7 focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                            placeholder="0.00"
                                                            aria-describedby="price-currency"
                                                            />
                                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                            <span className="text-gray-500 sm:text-sm" id="price-currency">
                                                                CAD
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Category */}
                                                    <div>
                                                        <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                                                            Category
                                                        </label>
                                                        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                                                            {({ open }) => (
                                                                <>                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm">
                                                                    <span className="block truncate">{selectedCategory.name}</span>
                                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                                    </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg cursor-pointer max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                        {categories.map((category) => (
                                                                        <Listbox.Option
                                                                            key={category.id}
                                                                            className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'text-gray-800 bg-lime-300' : 'text-gray-600',
                                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                            )
                                                                            }
                                                                            value={category}
                                                                        >
                                                                            {({ selectedCategory, active }) => (
                                                                                <span>
                                                                                    {category.name}
                                                                                </span>
                                                                            )}
                                                                        </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                                </>
                                                            )}
                                                        </Listbox>
                                                    </div>

                                                    
                                                    {/* Purchased By */}
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-900">Purchased By</h3>
                                                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                                            {({ open }) => (
                                                                <>
                                                              
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm">
                                                                    <span className="inline-flex w-full truncate">
                                                                        <span className="truncate">{selectedPerson.name}</span>
                                                                        <span className="ml-2 text-gray-500 truncate">{selectedPerson.username}</span>
                                                                    </span>
                                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                                    </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                        {people.map((person) => (
                                                                        <Listbox.Option
                                                                            key={person.username}
                                                                            className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'text-gray-800 bg-lime-300' : 'text-gray-600',
                                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                            )
                                                                            }
                                                                            value={person}
                                                                        >
                                                                            {({ active }) => (
                                                                            <>
                                                                                <div className="flex">
                                                                                    <span>
                                                                                        {person.name}
                                                                                    </span>
                                                                                    <span className={classNames(active ? 'text-gray-600' : 'text-gray-500', 'ml-2 truncate')}>
                                                                                        {person.username}
                                                                                    </span>
                                                                                </div>

                                                                            
                                                                            </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                                </>
                                                            )}
                                                            </Listbox>
                                                    </div>


                                                    {/* Description */}
                                                    <div>
                                                        <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                                            Description
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                            id="description"
                                                            name="description"
                                                            rows={4}
                                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                            defaultValue={''}
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end flex-shrink-0 w-full px-4 py-4 flex-column">
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => setOpenNewTransaction(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="justify-center w-full px-4 py-2 ml-4 text-sm font-medium text-gray-900 border border-transparent rounded-md shadow-sm bg-lime-300 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
     );
}
 
export default NewTransaction;