import {useState, useEffect, useContext} from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

// Context
import { LedgerContext } from '../contexts/LedgerContext'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



export function PolarAreaChart() {

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
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        ]
                    }
                ]
            })
    }, [team])


    

    if (chartData) {
        return (
            <div>
                <PolarArea data={chartData} />
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}