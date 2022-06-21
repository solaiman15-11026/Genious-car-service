import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Sevices.css'

const Services = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(response => response.json())
            .then(data => setService(data))
    }, [])


    return (
        <div >

            <h1 className='tt' style={{ color: ' red' }}>OUR SERVICE</h1>

            <div id='services' className='services-container'>
                {
                    service.map(s => <Service
                        s={s}
                        key={s._id}

                    ></Service>)
                }
            </div>


        </div >
    );
};

export default Services;