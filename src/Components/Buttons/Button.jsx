import React from 'react';

const Button = ({ children, css, click }) => {
    return (
        <button 
        onClick={click} 
        className={`bg-linear-to-r from-[#498ee8] to-[#3472dc] hover:bg-gradient-to-r hover:from-[#3472dc] hover:to-[#2b5eca] border border-[#2b5eca] hover:border-[#294da4] font-semibold text-[19px] text-white px-4 py-2 rounded-md ${css ? css : ''}`}>
            {children}
        </button>
    );
};

export default Button;