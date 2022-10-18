import {useState, useEffect, useContext} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Context
import { LedgerContext } from '../contexts/LedgerContext'

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart() {

    const [chartData, setChartData] = useState()
    const {team} = useContext(LedgerContext)

    // Format data for ChartJS
    useEffect(() => {

        let spentData = team.map(x => x.totalSpent)
        let teamData = team.map(x => x.name)
        

        setChartData({
            labels: teamData, 
            datasets: [
                {
                    label: '#amount spent',
                    data: spentData,
                    backgroundColor: [
                        '#65a30d',
                        '#a3e635',
                        '#d9f99d'
                        ]
                    }
                ]
            })
        }, [team])


    if (chartData) {
        return (
            // chartData.labels.length > 0 ? (
                <div>
                    <Pie data={chartData} maintainAspectRatio={true} />
                </div>
            // ) : (
            //     <p>No Pie</p>
            // )
        )
    } else {
        return <p>Loading...</p>
    }
}