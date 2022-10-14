export const ledgerReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [...state, newTransaction]
        case 'REMOVE_TRANSACTION':
            // Remove transaction by passing in payload
            return state.filter(transaction => transaction.transaction_id !== action.payload.id)
        default:
            return state
    }
}

const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
}
const removeTransaction = (id) => {
    // If the id we pass in = to the id from the state, we remove it.
    setTransactions(transactions.filter(transaction => transaction.transaction_id !== id))
}

// title: action.transaction.title, // May need to target value by : action.transaction.title
// amount: action.transaction.amount,
// date:action.transaction.date,
// purchased_by: action.transaction.name,
// type: action.transaction.category,
// desc: action.transaction.desc,
// transaction_id: action.transaction.date