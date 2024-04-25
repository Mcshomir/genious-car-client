import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    console.log(service)
    const { img, facility, title, price, _id } = service;
    return (
        <div className='card'>
            <img className='rounded-lg' src={img} alt="" />
            <div className='card-body'>
                <p>{title}</p>
                <h1> Price: ${price}</h1>
                <div className='card-action justify-end'>
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn btn-primary'>Buy-now</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServicesCard;