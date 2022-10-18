import {useState, useContext, useEffect} from 'react'
import { LedgerContext } from '../contexts/LedgerContext'



const Stats = () => {

    const {team} = useContext(LedgerContext)
    const [totalSpent, setTotalSpent] = useState(0)
    const [allocatedPercentage, setAllocatedPercentage] = useState(0)
    const [avgAllocatedPercentage, setAvgAllocatedPercentage] = useState(0)

    useEffect(() => {

        // Calculate Total Spent
        const totalAmountSpent = team.reduce((currentTotal, memberTotal) => {
            return memberTotal.totalSpent + currentTotal  
        },0)   
        setTotalSpent(totalAmountSpent)

        // Calculate Total Allocated Limit
        const totalAllocatedSpending = team.reduce((currentTotal, memberLimit) => {
            return Number(memberLimit.limit) + currentTotal 
        },0) 
        setAllocatedPercentage(((totalAmountSpent / totalAllocatedSpending) * 100).toFixed(1))

        // Calculate Avg ALlocated Spent
        const avgAmountSpent = team.reduce((currentTotal, memberSpentPercentage) => {
            return (memberSpentPercentage.percentageSpent + currentTotal)
        },0)
        setAvgAllocatedPercentage((avgAmountSpent / team.length).toFixed(1))

    }, [team])

    const stats = [
        { name: 'Total Amount Spent', stat: '$' + totalSpent + '.00' },
        { name: 'Allocated Amount Spent', stat: allocatedPercentage + '%' },
        { name: 'Avg. Allocated Amount Spent', stat: avgAllocatedPercentage + '%' },
      ]
    
    return ( 
    
        <div>
            {/* <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3> */}
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                <div key={item.name} className="px-4 py-5 overflow-hidden bg-white border rounded-lg cursor-pointer hover:bg-slate-100 sm:p-6">
                    <dd className="text-3xl text-gray-900 ">{item.stat}</dd>
                    <dt className="mt-1 text-sm truncate text-slate-400">{item.name}</dt>
                </div>
                ))}
            </dl>
        </div>
    );
}


export default Stats;