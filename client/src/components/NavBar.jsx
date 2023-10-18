import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {

    return (
        <div className='d-flex justify-content-between align-items-center border p-3 mb-4'>
            <h1>Expense Tracker</h1>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default NavBar;