import React from 'react';
import {Link} from 'react-router-dom'
import './button.css'

function Button (){
    return (
        <div>
            <Link to="/login"><button className="btncss">Login</button></Link>
        </div>
    )
}

export default Button;
