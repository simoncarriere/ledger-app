import {useState, useEffect, useContext} from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

// Context
import { LedgerContext } from '../contexts/LedgerContext'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function GroupedBarChart() {

    const [chartData, setChartData] = useState()
    const {transactions, categories} = useContext(LedgerContext)

    // Format data for ChartJS
    useEffect(() => {

        if (transactions && categories) {
            
            let transactionsGroupedByCategory  = categories.map((type) => {
                return transactions.filter(transaction => (
                    transaction.type === type.name
                ))
            })
    
            // setChartData(transactionsGroupedByCategory)

            // console.log(transactionsGroupedByCategory)
            
            // console.log(transactionsGroupedByCategory.map (i => {
            //     if(i[0]){
            //         return (i[0].type)
            //     } else {
            //         return null
            //     }}
            // ))

            console.log(transactionsGroupedByCategory.map(i => {
                return i.map(x => x.amount)
                // i.map(x => x.amount)
            }))

            // let a = transactionsGroupedByCategory.map(i => {
    
            //     if(i[0]){
            //         return (i[0].type)
            //     } else {
            //         return null
            //     }
    
            // })
            // console.log(a)



        } 
    
        // if(chartData && chartData.length > 0){

        //     let a = chartData.map(i => {
    
        //         if(i[0]){
        //             return (i[0].type)
        //         } else {
        //             return null
        //         }
    
        //     })
        //     console.log(a)
        // }
        
        // setChartData({
        //     labels: teamData, 
        //     datasets: [
        //         {
        //             label: '#amount spent',
        //             data: spentData,
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.5)',
        //                 'rgba(54, 162, 235, 0.5)',
        //                 'rgba(255, 206, 86, 0.5)',
        //                 ]
        //             }
        //         ]
        //     })
    }, [transactions])

    return (
        <h1>test</h1>
    )

    // if (chartData) {
    //     return (
    //         chartData.labels.length > 0 ? (
    //             <div className=' w-72 h-72'>
    //                 <Bar options={options} data={data} />
    //             </div>
    //         ) : (
    //             <p>No Pie</p>
    //         )
    //     )
    // } else {
    //     return <p>Loading...</p>
    // }
}







// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart - Stacked',
//     },
//   },
//   responsive: true,
//   interaction: {
//     mode: 'index',
//     intersect: false,
//   },
//   scales: {
//     x: {
//       stacked: true,
//     },
//     y: {
//       stacked: true,
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgb(255, 99, 132)',
//       stack: 'Stack 0',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgb(75, 192, 192)',
//       stack: 'Stack 0',
//     },
//     {
//       label: 'Dataset 3',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgb(53, 162, 235)',
//       stack: 'Stack 0',
//     },
//   ],
// };