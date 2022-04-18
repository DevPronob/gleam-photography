import React, { useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
const Services = () => {
    const AllServices =[
        {
            id:1,
            name:"Standart",
            price:300,
            img:"https://images.unsplash.com/photo-1543427099-ca22f2550846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvZ3JhcGhlciUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            Description:"Provide you 3 Hours Session ,Photo Editing 50 Digital Images Online Gallery"

        },
        {
            id:2,
            name:"Premium",
            price:450,
            img:"https://images.unsplash.com/photo-1560785219-cc81ab373cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            Description:"Provide you 6 Hours Photography and Videography with Session Photo Editing 100 Digital Images Online Gallery"

        },
        {
            id:3,
            name:"Platinum",
            price:800,
            img:"https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHklMjBhbmQlMjB2ZWRpb2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            Description:"Provide you 12 Hours Photography and Videography Session with Light Setup "

        }
    ]
    return (
        <div className=''>
            <h2 className='py-5 fs-1 fw-bold'>My Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                {
                    AllServices.map(items=><ServiceItem key={items.id} items ={items}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;