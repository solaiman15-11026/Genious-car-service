import React from 'react';
import { useForm } from "react-hook-form";


const Addservice = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (

        <div className='w-50 mx-auto'>
            <h4>Add Service</h4> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} /> <br /> <br />

                <input placeholder='Price' type="number" {...register("price")} /> <br /> <br />
                <input placeholder='PhotoUrl' type="text" {...register("img")} /> <br /> <br />
                <textarea placeholder='Description' {...register("Details")} /> <br /> <br />
                <input type="submit" value="Addservice" />
            </form>
        </div>
    );
};

export default Addservice;