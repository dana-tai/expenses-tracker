import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {

    return (
        <div className='d-flex justify-content-between align-items-center border px-5 py-3 mb-4'>
            <h1>Expense Tracker</h1>
            <h4><Link to={"/"}>Home</Link></h4>
        </div>
    )
}

export default NavBar;