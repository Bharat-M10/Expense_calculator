import './Expense.css';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';


function Expense(props) {
    const [FilterYear, setFilterYear] = useState("2020");
    const onchangeFilterHandler = (selectedYear) => {
        console.log("This is from Expense.js", selectedYear);
        setFilterYear(selectedYear);

    };

    const Filtered_list = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === FilterYear;
    });


    return (

        <Card className='expenses'>
            <ExpenseFilter Selected={FilterYear} onChangeFilter={onchangeFilterHandler}></ExpenseFilter>
            <ExpenseChart expenses={Filtered_list}></ExpenseChart>
            <ExpenseList item={Filtered_list}/>;
        </Card>

    );
};

export default Expense;