import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Edit = (props) => {
    const { id } = useParams();
    const { expense, setExpense } = props;
    const [name, setName] = useState("");
    const [paymentMethod, setpaymentMethod] = useState("");
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/expenses/' + id)
            .then(res => {
                setName(res.data.name);
                setpaymentMethod(res.data.paymentMethod);
                setCategory(res.data.category);
                setAmount(res.data.amount);
                setDate(res.data.date)
            })
            .catch(err => console.log(err))
    }, [])
    const updateExpense = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/expenses/' + id, {
            name,    
            paymentMethod,
            category,
            amount,
            date     
        })
            .then(res => {
                console.log(res);
                navigate("/"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={updateExpense}>
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
export default Edit;
