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
            <p>{oneExpense.paymentMethod}</p>
            <p>{oneExpense.category}</p>
            <p>{oneExpense.amount}</p>
        </div>
    )
}

export default OneExpense;