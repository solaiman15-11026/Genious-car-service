import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <h6 className='text-center mt-4 '> Copyright @{year} || Solaiman Sheik</h6>
        </div>
    );
};

export default Footer;