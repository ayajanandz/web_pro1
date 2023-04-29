import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';


const Homepage =() => {
    const navigate = useNavigate()
    return(
        <div className='homepage'>
            <h1>
                Hello Homepage!
            </h1>
            <div className='button' onClick ={() => navigate("/login")}>
            Logout
                
            </div>
        </div>
    )
}

export default Homepage;