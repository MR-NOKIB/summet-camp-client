import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='flex flex-col justify-center items-center py-7 md:py-16'>
            <p 
            className='text-[#0f172b] font-semibold md:text-xl text-center bg-[#9bcaf5] px-6 py-2 mb-3 rounded-full italic'>{subHeading}</p>
            <h3 className='w-full md:w-1/2 font-bold text-center text-4xl md:text-5xl'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;