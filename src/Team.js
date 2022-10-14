import {useState, useContext} from 'react'
// Context
import { LedgerContext } from './contexts/LedgerContext'
// Icons
import { EllipsisHorizontalIcon} from '@heroicons/react/20/solid'

// Components
import NewTeamMember from './components/NewTeamMember';



const Team = () => {

    const [openNewMember, setOpenNewMember] = useState(false)

    const {team} = useContext(LedgerContext)


    return ( 
        <>

            {/* Table Heading */}
            <div className="flex items-center justify-between ">
                <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-2xl font-medium text-gray-900">Team</h1>
                </div>
                <div className="flex mt-3 sm:mt-0 sm:ml-4">
                    <button
                        onClick={() => setOpenNewMember(true)}
                        type="button"
                        className="inline-flex items-center px-4 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                    >
                        New Team Member
                    </button>
                </div>
            </div>
            
            {/* Table */}
            <div className="mt-6">
                {team.length > 0 ? (
                    <div className="overflow-hidden bg-white shadow sm:rounded-md">
                        <ul role="list" className="divide-y divide-gray-200">
                            {team.map((member) => (
                            <li key={member.email}>
                                
                                    <div className="flex items-center px-4 py-4 cursor-pointer sm:px-6 hover:bg-gray-50">
                                        <div className="flex flex-1 min-w-0">
                                            <div className="flex-shrink-0">
                                                <img className="w-12 h-12 rounded-full" src={member.imageUrl} alt="" />
                                            </div>
                                            <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-700 truncate">{member.name}</p>
                                                    <p className="flex items-center mt-2 text-sm text-gray-400">
                                                        <span className="truncate">{member.email}</span>
                                                    </p>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div>
                                                        <p className="text-sm text-gray-900">Spending Limit: {member.limit} </p>
                                                        <div className='w-full h-2 mt-2 rounded-full bg-slate-200'>
                                                            <div
                                                                // style={{ width: `${progressPercentage}%`}}
                                                                style={{ width: '70%' }}
                                                                className={`h-full  rounded-full ${
                                                                    70 >= 90 ? 'bg-orange-300' : 'bg-lime-300'}`}>
                                                            </div>
                                                        </div>
                                                        {/* <p className="flex items-center mt-2 text-sm text-gray-500">
                                                            <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                                                            {application.stage}
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                    </div>
                                
                            </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    // Empty State
                    <div className="py-8 text-center border-t border-slate-200 ">

                        <svg
                            className="w-12 h-12 mx-auto text-gray-400 transition ease-in-out cursor-pointer hover:text-lime-400 hover:-translate-y-1 hover:scale-105"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            onClick={() => setOpenNewMember(true)}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No Team Members</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding your first team member.</p>  
                    </div>
                )}
          
                {/* Slideout */}
                <NewTeamMember openNewMember={openNewMember} setOpenNewMember={setOpenNewMember}/>
            </div>
        </>
     );
}
 
export default Team;