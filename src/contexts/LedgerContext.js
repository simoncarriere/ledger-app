import {useState, useEffect, createContext, useReducer} from 'react'
// import {LedgerReducer} from '../reducers/LedgerReducer'

export const LedgerContext= createContext()

const LedgerContextProvider = ({children}) => {

    const [transactions, setTransactions] = useState([])
    // const [state, dispatch] = useReducer(LedgerReducer, []) //(LedgerReducer, [])

    // Grab ledger from local Storage and set State
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("ledger"));
        if (localData) {
        setTransactions( prevTransactions => [...prevTransactions, ...localData] ); 
    }}, [])

    // Updated ledger from local Storage
    useEffect(() => {
            localStorage.setItem('ledger', JSON.stringify(transactions))
    }, [transactions])


    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])
    }
    const removeTransaction = (id) => {
        // If the id we pass in = to the id from the state, we remove it.
        setTransactions(transactions.filter(transaction => transaction.transaction_id !== id))
    }

	return (
        // <LedgerContext.Provider value={{...state, dispatch}}>
        <LedgerContext.Provider value={{transactions, addTransaction, removeTransaction}}>
			{children}
		</LedgerContext.Provider>
	)
}
export default LedgerContextProvider