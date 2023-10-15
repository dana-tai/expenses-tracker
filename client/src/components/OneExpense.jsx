import React, {useState, useEffect} from 'react';
import { useNavigate ,useParams, Link } from 'react-router-dom';
import axios from 'axios';

const OneExpense = (props) => {
    const {id} = useParams();
    const[oneExpense, setOneExpense] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/expenses/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneExpense(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <h3>{oneExpense.name}</h3>
            <table className='table border'>
                <thead>
                    <tr>
                        <td>Payment Method:</td>
                        <td>{oneExpense.paymentMethod}</td>
                    </tr>
                    <tr>
                        <td>Category:</td>
                        <td>{oneExpense.category}</td>
                    </tr>
                    <tr>
                        <td>Amount:</td>
                        <td>${oneExpense.amount}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default OneExpense;