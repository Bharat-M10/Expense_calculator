
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expense';
import { useState } from 'react';

const initial_data=[
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];


function App() {

  const [expenses,setExpense]=useState(initial_data);
  const addExpenseHandler=expense=>{
     setExpense((prevExpense)=>{
      return[expense, ...prevExpense];
     });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense item={expenses}></Expense>
    </div>
  );
}

export default App;
