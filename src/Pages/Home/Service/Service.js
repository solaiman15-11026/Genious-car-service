import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description, price } = props.s;
    const navigate = useNavigate()


    const handlenavi = id => {

        navigate(`/service/${id}`)

    }


    return (
        <div className='service' >

            <img src={img} alt="" />
            <h4>SERVICE: {name}</h4>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <div className='ff'>
                <button onClick={() => handlenavi(id)} className='tttt mt-2'>BOOK: {name}</button>
            </div>

        </div >
    );
};

export default Service;