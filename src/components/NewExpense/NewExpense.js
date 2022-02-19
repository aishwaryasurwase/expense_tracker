import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpenses = ({saveExpense}) => {
    return (<div className="new-expense">
        <ExpenseForm saveExpense={saveExpense}/>
    </div>)
}
export default NewExpenses;