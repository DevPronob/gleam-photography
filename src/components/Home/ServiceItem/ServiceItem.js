import React from 'react';
import "./ServiceItem.css"
import { useNavigate } from 'react-router-dom';
const ServiceItem = ({items}) => {
    let navigate = useNavigate();
    return (
        <div classNameName='col '>
            <div className="card h-100">
      <img src={items.img} className="card-img-top service-img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-2">{items.name}</h5>
        <p className="card-text fs-5">{items.Description}</p>
        <h4>Price: {items.price}</h4>
        <button onClick={()=>navigate("/checkout")} className='btn btn-primary fs-4 mt-3'>Checkout</button>
      </div>
    </div>
        </div>
    );
};

export default ServiceItem;