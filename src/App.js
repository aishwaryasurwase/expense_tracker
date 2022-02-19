
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses]= useState([
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {  title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const saveExpense = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpenses saveExpense={saveExpense}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
