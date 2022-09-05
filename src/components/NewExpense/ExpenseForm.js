import { useState } from 'react';
import './ExpenseForm.css';



function ExpenseForm(props){
    
    const [enteredTitle,setTitle]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const [enteredDate,setDate]=useState('');
    
    const TitleChangekHandler=(event)=>{
        setTitle(event.target.value);
    };

    const AmountChangekHandler=(event)=>{
        setAmount(event.target.value);
    };

    const DateChangekHandler=(event)=>{
        setDate(event.target.value);
    };
    
    const SubmitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

        props.onSaveExpenseData(expenseData);


    };

    return(
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={TitleChangekHandler}></input>
                </div>
    
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='Number'  value={enteredAmount} min='0.01' step='0.01' onChange={AmountChangekHandler}></input>
                </div>
    
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={DateChangekHandler}></input>
                </div>
    
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm; 