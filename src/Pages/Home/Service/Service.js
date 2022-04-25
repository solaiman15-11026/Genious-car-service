import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, description, price } = props.s
    return (
        <div className='service'>

            <img src={img} alt="" />
            <h4>SERVICE: {name}</h4>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <div className='ff'>
                <button className='tttt mt-2'>BOOK: {name}</button>
            </div>

        </div>
    );
};

export default Service;