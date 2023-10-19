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
    const [successMessage, setSuccessMessage] = useState(false);
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
    if (amount<=0) {
        setErrorMessage("Amount must be greater than 0");
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
                setSuccessMessage(true);
                setTimeout(() => {
                    setSuccessMessage(false);
                }, 3000);
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
        <div className='border p-4'>
            <h3>Add an Expense</h3>
            <form onSubmit={onSubmitHandler}>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green', backgroundColor: '#E7FFE7'}}>Expense submitted successfully!</p>}
                <p>
                    <label>Expenses Name: </label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label>Payment Method: </label><br />
                    <select value={paymentMethod} onChange={(e) => setpaymentMethod(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit">Credit</option>
                        <option value="Venmo">Venmo</option>
                        <option value="Other">Other</option>
                    </select>
                </p>
                <p>
                    <label>Amount:</label><br/>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </p>
                <p>
                    <label>Category: </label><br/>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </p>
                <p>
                    <label>Date: </label><br/>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </p>
                <input type="submit" value="Create" />
            </form>
        </div>
        
    )
    
}
export default Add;

