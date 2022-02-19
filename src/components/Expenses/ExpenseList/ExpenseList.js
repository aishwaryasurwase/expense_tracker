import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ filterExpenses }) => {
    if (filterExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }
    return (<>
        <ul className='expenses-list'>
            {filterExpenses.map((expense, index) => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={index} />)}
        </ul>
    </>)
}

export default ExpenseList;