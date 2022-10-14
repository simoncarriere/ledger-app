import { Fragment, useState, useContext } from 'react'
// Headless UI
import { Listbox, Dialog, Transition } from '@headlessui/react'
// Context
import { LedgerContext } from '../contexts/LedgerContext'
// Icons
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpDownIcon, XCircleIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




const NewTeamMember = ({openNewMember, setOpenNewMember}) => {

    const {addTeamMember} = useContext(LedgerContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [limit, setLimit] = useState(1000)

    const [errors, setErrors] = useState([])

    const resetForm = () => {
        setOpenNewMember(false)
        setName('')
        setEmail('')
        setImageUrl('')
        setLimit(1000)
        setErrors([])
    }

    const createTeamMember = (e) => {
        e.preventDefault()
       
        if (limit >= 1){
            let newTeamMember = {
                name: name, 
                email: email,
                imageUrl: 'http://' + imageUrl,
                limit:limit
            }
            addTeamMember(newTeamMember)
            
            // Reset & Close Form
            setOpenNewMember(false)
            resetForm()
        } else {
            setErrors([...errors, 'Limit must be higher then zero'])
        }
    }

    return ( 
        <Transition.Root show={openNewMember} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={resetForm}>
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
                                        onClick={() => resetForm()}
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
                                        <Dialog.Title className="text-lg font-medium text-gray-900">Add New Member</Dialog.Title>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={createTeamMember} className="flex flex-col justify-between h-full ">
                                        <div className="relative flex-1 px-4 mt-6 sm:px-6">
                                            <div className="flex flex-col justify-between flex-1">
                                                <div className="divide-y divide-gray-200 ">
                                                    <div className="pt-6 pb-5 space-y-6">

                                                        {/* Name */}
                                                        <div>
                                                            <label htmlFor="member-name" className="block text-sm font-medium text-gray-900">
                                                                Name
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    required
                                                                    type="text"
                                                                    name="member-name"
                                                                    id="member-name"
                                                                    placeholder='Members Name'
                                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Email */}
                                                        <div>
                                                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                                                Email
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    required
                                                                    type="email"
                                                                    name="email"
                                                                    id="email"
                                                                    placeholder='Members Email'
                                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* PhotoUrl */}
                                                        <div>
                                                            <label htmlFor="image" className="block text-sm font-medium text-gray-900">
                                                                Image Url
                                                            </label>
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                    <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
                                                                    http://
                                                                    </span>
                                                                    <input
                                                                        value={imageUrl}
                                                                        onChange={(e) => setImageUrl(e.target.value)}
                                                                        required
                                                                        type="text"
                                                                        name="image"
                                                                        id="image"
                                                                        placeholder='Image Url'
                                                                        className="flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none rounded-r-md focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                                    />
                                                            </div>
                                                        </div>
              
                                                        {/* Limit */}
                                                        <div>
                                                            <label htmlFor="limit" className="block text-sm font-medium text-gray-900">
                                                                Limit
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    value={limit}
                                                                    onChange={(e) => setLimit(e.target.value)}
                                                                    required
                                                                    type="number"
                                                                    name="limit"
                                                                    id="limit"
                                                                    placeholder='Members Spending Limit'
                                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                                />
                                                            </div>
                                                        </div>

                                                        {errors.length > 0 && (
                                                            <div className="p-4 m-4 rounded-md bg-red-50">
                                                                <div className="flex">
                                                                <div className="flex-shrink-0">
                                                                    <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
                                                                </div>
                                                                <div className="ml-3">
                                                                    <h3 className="text-sm font-medium text-red-800">There were {errors.length} error with your submission</h3>
                                                                    <div className="mt-2 text-sm text-red-700">
                                                                        <ul role="list" className="pl-5 space-y-1 list-disc">
                                                                            {errors.map((i) => (
                                                                                <li key={i}>{i}</li>
                                                                            ))}   
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        )}                           

                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                            

                                        <div className="flex justify-end px-4 py-4 sm:px-6 flex-column">
                                            <button
                                                type="button"
                                                className="w-full px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                                                onClick={() => resetForm()}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="justify-center w-full px-4 py-4 ml-4 text-sm font-medium text-gray-900 border border-transparent rounded-md shadow-sm bg-lime-300 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </form>
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
 
export default NewTeamMember;