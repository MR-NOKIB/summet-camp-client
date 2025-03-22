import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useInstructors } from '../../hooks/useInstructors';
import Card from '../Shared/Card/Card';
import InsCard from '../InsCard/InsCard';

const Instructors = () => {
    const [, instructors] = useInstructors();
    console.log(instructors);
    return (
        <div className='mt-[70px]'>
            <SectionTitle
                heading="Meet Our Expert Instructors"
                subHeading="Expert guidance, endless inspiration."
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    instructors && instructors.map(instructor => <InsCard
                        key={instructor._id}
                        cardData={instructor}
                    ></InsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;