import React from 'react';

const ButtonSoft = ({ children, css, click }) => {
    return (
        <button
            onClick={click}
            className={`bg-[#c4dff9] hover:bg-[#9bcaf5] font-semibold text-[19px] text-[#0f172b] px-4 py-2 rounded-md ${css ? css : ''}`}>
            {children}
        </button>
    );
};

export default ButtonSoft;