import {useState, useEffect, createContext} from 'react'
// import {LedgerReducer} from '../reducers/LedgerReducer'

export const LedgerContext= createContext()

const LedgerContextProvider = ({children}) => {

    const [transactions, setTransactions] = useState([])
    const [team, setTeam] = useState([])

    // Refactor state to use Reducer
    // const [state, dispatch] = useReducer(LedgerReducer, []) //(LedgerReducer, [])

    // Retreive data from local storage and set as state
    useEffect(() => {
        const localLedger = JSON.parse(localStorage.getItem("ledger"));
        const localTeam = JSON.parse(localStorage.getItem("team"));
        if (localLedger) {
            setTransactions( prevTransactions => [...prevTransactions, ...localLedger]); 
        }
        if (localTeam) {
            setTeam( prevTeam => [...prevTeam, ...localTeam]); 
        }
    }, [])

    // Add data to local storage
    useEffect(() => {
        localStorage.setItem('ledger', JSON.stringify(transactions))
    }, [transactions])

    useEffect(() => {
        localStorage.setItem('team', JSON.stringify(team))
    }, [team])


    // Calculate each team members total amount spent and update state
    useEffect(() => {

        if (team){

            // 1. Loop through each team member
            const MembersSpent = team.map((member)=> {
                
                // 2. Filter their associated transactions
                let membersTransactions = transactions.filter(transaction => transaction.purchased_by === member.name)
    
                // 3. Grab the amount spent of each transaction and convert value to a number (localstorage returns amount as string)
                const transactionsAmount = membersTransactions.map(transaction => {
                    return Number(transaction.amount);
                });
    
                // 4. Calculate total amount spent & % spent
                let totalSpent = transactionsAmount.reduce((currentTotal, transactionAmount) => {
                    return transactionAmount + currentTotal
                }, 0)  // Starting point 
                let percentageSpent = (totalSpent / member.limit * 100)
                
                // 5. Add total to members state
                return({...member, totalSpent: totalSpent, percentageSpent: percentageSpent}) 

            })

            if(team.length > 0){
                setTeam(MembersSpent)
            }
        }
    }, [transactions])

    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])
    }
    const removeTransaction = (id) => {
        // If the id we pass in = to the id from the state, we remove it.
        setTransactions(transactions.filter(transaction => transaction.transaction_id !== id))
    }
    
    const addTeamMember = (newTeamMember) => {
        setTeam([...team, newTeamMember])
    }

    const categories = [
        { id: 1, name: 'Office' },
        { id: 2, name: 'Travel' },
        { id: 3, name: 'Digital' },
        { id: 4, name: 'Marketing' },
        { id: 5, name: 'Outsourcing' }
    ]

	return (
        // <LedgerContext.Provider value={{...state, dispatch}}>
        <LedgerContext.Provider value={{transactions, addTransaction, removeTransaction, team, setTeam, addTeamMember, categories}}>
			{children}
		</LedgerContext.Provider>
	)
}
export default LedgerContextProvider