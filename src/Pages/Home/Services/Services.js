import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Sevices.css'

const Services = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(response => response.json())
            .then(data => setService(data))
    }, [])


    return (
        <div >

            <h1 className='tt' style={{ color: ' red' }}>OUR SERVICE</h1>

            <div className='services-container'>
                {
                    service.map(s => <Service
                        s={s}
                        key={s.id}

                    ></Service>)
                }
            </div>


        </div >
    );
};

export default Services;