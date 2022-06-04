import React from 'react';

const Expert = (props) => {
    return (
        <div class="col">
            <div class="card">
                <img src={props.w.img} alt="" srcset="" />
                <div class="card-body">
                    <h5 class="card-title">Name: {props.w.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Expert;