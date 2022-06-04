import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import expert5 from '../../../images/experts/expert-5.jpg'
import Expert from '../Expert/Expert';


const workers = [{ id: 1, name: 'Wiil jhon', img: expert1 },
{ id: 2, name: 'Solaiman khan', img: expert2 },
{ id: 3, name: 'Ksem miya', img: expert3 },
{ id: 4, name: 'Mostak uddin', img: expert4 },
{ id: 6, name: 'Devil jona', img: expert6 },
{ id: 5, name: 'Heriton alu', img: expert5 }]

const Experts = () => {
    return (
        <div >
            <h1 className='mt-5 text-center text-primary'>OUR EXPERTS</h1>
            <div id='experts' className='row row-cols-1 row-cols-md-3 g-4 mt-3 rounded mx-auto'>
                {
                    workers.map(w => <Expert
                        key={w.id}
                        w={w}
                    ></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;