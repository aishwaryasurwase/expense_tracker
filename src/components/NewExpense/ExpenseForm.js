import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = ({saveExpense}) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    
    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setExpenseDate(event.target.value)
    }

    const addExpense = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            amount: +amount,
            date: new Date(expenseDate)
        }
        setTitle('');
        setAmount('');
        setExpenseDate('');
        saveExpense(expenseData)
    }
    return (
        <form onSubmit={addExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={expenseDate} onChange={dateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        )
}
export default ExpenseForm;