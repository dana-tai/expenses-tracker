import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Add = (props) => {
    const { expense, setExpense } = props;
    const [name, setName] = useState("");
    const [paymentMethod, setpaymentMethod] = useState("");
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
    if (!name.trim()) {
        setErrorMessage("Expense name is required");
        return;
    }
    if (!paymentMethod.trim()) {
        setErrorMessage("Payment method is required");
        return;
    }
    if (!category.trim()) {
        setErrorMessage("Category is required");
        return;
    }
    if (!amount) {
        setErrorMessage("Amount is required");
        return;
    }
    if (!date) {
        setErrorMessage("Date is required");
        return;
    }
        setErrorMessage("")
        axios.post('http://localhost:8000/api/expenses', {
            name,
            paymentMethod,
            category,
            amount,
            date,
        })
            .then (res => {
                console.log(res);
                console.log(res.data);
                setName("");
                setpaymentMethod("");
                setCategory("");
                setAmount("");
                setDate("");
                navigate(`/`);
                setExpense([...expense, res.data]);
            })
            .catch(err => console.log(err))
    }



    return (
        <form onSubmit={onSubmitHandler}>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <p>
                <label>Expenses Name: </label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                <label>Payment Method: </label><br />
                <input type="text" onChange={(e) => setpaymentMethod(e.target.value)} />
            </p>
            <p>
                <label>Amount</label><br/>
                <input type='text' onChange={(e) => setAmount(e.target.value)}/>
            </p>
            <p>
                <label>Category: </label><br/>
                <input type="text" onChange={(e) => setCategory(e.target.value)}/>
            </p>
            <p>
                <label>Date: </label><br/>
                <input type="date" onChange={(e) => setDate(e.target.value)}/>
            </p>
            <input type="submit" value="Create" />
            <Link to={"/"}>Home</Link>
        </form>
        
    )
    
}
export default Add;

