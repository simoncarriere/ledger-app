import {useState, useEffect, useContext} from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';


// Context
import { LedgerContext } from '../contexts/LedgerContext'

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



export function BarChart() {

    const [chartData, setChartData] = useState()
    const {transactions, categories} = useContext(LedgerContext)


    useEffect(() => {

        let categoryData = categories.map((type) => {
            return transactions.filter(transaction => (
                transaction.type === type.name
            ))
        })

        let categoryTotal = categoryData.map(category => {
            return category.reduce((currentTotal, transaction) => (
                // console.log(Number(transaction.amount) + currentTotal)
                 Number(transaction.amount) + currentTotal
            ), 0)
        })

        setChartData({
            labels: categories.map(i => i.name),
            datasets: [
                {
                    label: 'Total',
                    data: categoryTotal,
                    backgroundColor: '#d9f99d',
                }

            ]
        })
        
    }, [transactions, categories])

    if (chartData) {
        return (
            <div>
                <Bar options={options} data={chartData} />
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}
