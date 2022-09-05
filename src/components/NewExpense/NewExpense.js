import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        sethide(false);
    };
    const [hidden, sethide] = useState(false);
    const Hide_button = () => {
        sethide(true);
    };

    const cancelForm = () => {
        sethide(false);
    };

    return (<div className='new-expense'>
        {!hidden && <button onClick={Hide_button} >Add New Expense </button>}
        {hidden && <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelForm}>
        </ExpenseForm>}
    </div >);
};

export default NewExpense;