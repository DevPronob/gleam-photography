import React from 'react';
import "./ServiceItem.css"
const ServiceItem = ({items}) => {
    console.log(items)
    return (
        <div classNameName='col '>
            <div className="card h-100">
      <img src={items.img} className="card-img-top service-img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-2">{items.name}</h5>
        <p className="card-text fs-5">{items.Description}</p>
        <h4>Price: {items.price}</h4>
      </div>
    </div>
        </div>
    );
};

export default ServiceItem;