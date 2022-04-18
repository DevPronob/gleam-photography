import React from 'react';
import notfound from "../../images/notfound.jpg";
import "./NotFound.css";
const NotFound = () => {
    return (
        <div>
            <img className='img-fluid notfound-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;