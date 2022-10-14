import {useState, useEffect, createContext, useReducer} from 'react'
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

	return (
        // <LedgerContext.Provider value={{...state, dispatch}}>
        <LedgerContext.Provider value={{transactions, addTransaction, removeTransaction, team, setTeam, addTeamMember}}>
			{children}
		</LedgerContext.Provider>
	)
}
export default LedgerContextProvider