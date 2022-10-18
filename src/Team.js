import {useState, useContext} from 'react'
// Context
import { LedgerContext } from './contexts/LedgerContext'
// Components
import NewTeamMember from './components/NewTeamMember';  


import { ListBulletIcon, SquaresPlusIcon } from '@heroicons/react/20/solid'

const Team = () => {
    
    const {team} = useContext(LedgerContext)
    const [openNewMember, setOpenNewMember] = useState(false)
    const [listMode, setListMode] = useState(false)

// console.log(team.map(i => i.percentageSpent))

    return ( 
        <>
            {/* Table Heading */}
            <div className="flex items-center justify-between ">
                <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-2xl font-medium text-gray-900">Team</h1>
                </div>
                <div className="flex mt-3 sm:mt-0 sm:ml-4">
                    {/* List/Grid */}
                    <span className="inline-flex mr-4 rounded-md shadow-sm isolate">
                        <button
                            onClick={() => setListMode(true)}
                            type="button"
                            className="relative inline-flex items-center px-2 py-2 text-sm font-medium bg-white border border-slate-300 text-slate-400 rounded-l-md hover:bg-slate-50 focus:z-10 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-500"
                        >
                            <span className="sr-only">Previous</span>
                            <ListBulletIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => setListMode(false)}
                            type="button"
                            className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium bg-white border border-slate-300 text-slate-400 rounded-r-md hover:bg-slate-50 focus:z-10 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-500"
                        >
                            <span className="sr-only">Next</span>
                            <SquaresPlusIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </span>
                    <button
                        onClick={() => setOpenNewMember(true)}
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm bg-slate-800 text-slate-100 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"                    >
                        New Team Member
                    </button>
                </div>
            </div>
            
            
            <div className='mt-6'>
            {team && team.length > 0 ? (
                listMode ? (
                    // List
                    <div className="overflow-hidden bg-white shadow sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {team.map((member) => (
                            <li key={member.email}>
                                
                                    <div className="flex items-center px-4 py-4 cursor-pointer sm:px-6 hover:bg-gray-50">
                                        <div className="flex flex-1 min-w-0 ju">
                                            {member.imageUrl  ? (
                                                <div className="flex-shrink-0">
                                                    <img className="w-12 h-12 rounded-full" src={member.imageUrl} alt="" />
                                                </div>
                                            ) : (
                                                <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                                                    <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                            )}
                                            <div className="items-center flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4 ">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-700 truncate">{member.name}</p>
                                                    <p className="flex items-center mt-2 text-sm text-gray-400">
                                                        <span className="truncate">{member.email}</span>
                                                    </p>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div>
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-sm text-gray-900">Limit Spent: {member.percentageSpent.toFixed(1)}%</p>
                                                            <p className="text-xs text-gray-500">${member.totalSpent} {' '} /{' '}${member.limit}{' '}</p>
                                                        </div>
                                                        {/* {member.totalSpent === 0 ? (
                                                            <p className='mt-2 text-sm text-gray-500'>No Transactions</p>
                                                        ) : (

                                                             */}

                                                            <div className='w-full h-2 mt-3 rounded-full bg-lime-100'>
                                                                <div
                                                                    // style={{ width: `${member.percentageSpent}%`}}
                                                                    style={{ width: member.percentageSpent >= 100 ? '100%' :  `${member.percentageSpent}%`}}

                                                                    // style={{ width: '50%' }}
                                                                    className={`h-full  rounded-full ${
                                                                        member.percentageSpent >= 100 ? 'bg-red-400' : 'bg-lime-400'}`}>
                                                                </div>
                                                            </div>
                                                        {/* )} */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                
                            </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    // Grid
                    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">                
                        {team.map((person) => (
                            <li key={person.email}  className="flex flex-col col-span-1 text-center bg-white border divide-y divide-gray-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                
                                <div className="flex flex-col flex-1 p-8">
                                    {person.imageUrl  ? (
                                            <img className="flex-shrink-0 w-32 h-32 mx-auto rounded-full mx-atuo" src={person.imageUrl} alt="" />
                                        ) : (
                                            <span className="flex-shrink-0 inline-block w-32 h-32 mx-auto overflow-hidden bg-gray-100 rounded-full">
                                                <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                    )}
        
                                    {/* <img className="flex-shrink-0 w-32 h-32 mx-auto rounded-full" src={person.imageUrl} alt="" /> */}
                                    <h3 className="mt-6 font-medium text-gray-900">{person.name}</h3>
                                    <dl className="flex flex-col justify-between flex-grow mt-1">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="text-sm text-slate-400">{person.email}</dd>
                                    <dt className="sr-only">Role</dt>
                                    <dd className="mt-3">
                                        <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-lg">
                                        member
                                        </span>
                                    </dd>
                                    </dl>
                                </div>
        
                                <div className='py-6 mx-4'>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Limit Spent: {person.percentageSpent.toFixed(1)}%</p>
                                        <p className="text-xs text-slate-400">${person.totalSpent} {' '} /{' '}${person.limit}{' '}</p>
                                    </div>
                                    <div className='w-full h-4 mt-3 rounded-md bg-lime-100'>
                                            <div
                                                style={{ width: person.percentageSpent >= 100 ? '100%' :  `${person.percentageSpent}%`}}
                                                className={`h-full  rounded-md ${
                                                    person.percentageSpent >= 100 ? 'bg-red-400' : 'bg-lime-400'}`}>
                                            </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            ) : (
                // Empty Team State
                <div onClick={() => setOpenNewMember(true)} className="relative block w-full p-24 text-center border rounded-lg cursor-pointer bg-slate-50 hover:border-slate-200 hover:bg-slate-100">
                    <svg
                        className="w-12 h-12 mx-auto text-gray-400 transition ease-in-out cursor-pointer hover:text-lime-400 hover:-translate-y-1 hover:scale-105"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                    <div className="text-center border-slate-200 ">
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No Team Members</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding your first team member.</p>  
                    </div>
                </div>
            )}
            </div>
            {/* Slideout */}
            <NewTeamMember openNewMember={openNewMember} setOpenNewMember={setOpenNewMember}/>

        </>
     );
}
 
export default Team;

