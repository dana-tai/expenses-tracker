import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayAllExpenses = (props) => {
    const[expenses, setExpenses] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/expenses')
        .then((allExpenses) => {
            setExpenses(allExpenses.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])


    return (
        <div>
            <h1>All Expenses</h1>
            <table className="table border table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Payment Method</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense) => (
                            <tr key={expense._id}>
                                <td><Link to={`/oneExpense/` + expense._id}>{expense.name}</Link></td>
                                <td>{expense.paymentMethod}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default DisplayAllExpenses;