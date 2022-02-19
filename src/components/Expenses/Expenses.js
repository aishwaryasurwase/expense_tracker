import { useState } from "react";
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseChart from './ExpenseChart/ExpenseChart';

import './Expenses.css';
import ExpenseList from "./ExpenseList/ExpenseList";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filterExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart filterExpenses={filterExpenses}/>
            <ExpenseList filterExpenses={filterExpenses}/>
        </div>)
}

export default Expenses;