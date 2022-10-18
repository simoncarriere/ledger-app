import {useContext} from 'react';
import { Link } from "react-router-dom";

// Context
import { LedgerContext } from '../contexts/LedgerContext'
// Icons
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'


export default function Walkthrough() {

    const {team} = useContext(LedgerContext)
    
    return (
        team.length !== 0 ? (
            null
        ) : (
            <div className="p-4 my-4 rounded-md bg-yellow-50">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">You have no team members. </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                            In order to start adding transactions, {` `}
                            <Link to="/team" className="font-medium text-yellow-700 underline hover:text-yellow-600">
                                create your first team member.
                            </Link>
                        </p>
                        </div>
                    </div>
                  </div>
            </div>
        )
    )
}
