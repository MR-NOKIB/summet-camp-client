import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import ClassCard from '../Home/ClassCard/ClassCard';

const Classes = () => {
    const classes = useLoaderData();
    console.log(classes);
    return (
        <div className='mt-20 md:mt-24'>
            <SectionTitle
            heading="Explore Our Photography Classes"
            subHeading="Unlock your creativity with hands-on learning."
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    classes.map(classData => <ClassCard
                    key={classData._id}
                    classData={classData}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;