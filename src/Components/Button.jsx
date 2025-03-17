import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='bg-[#00C1A2] font-semibold text-[19px] text-white px-4 py-2 rounded-md'>
            {children}
        </button>
    );
};

export default Button;