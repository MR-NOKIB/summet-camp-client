import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useInstructors } from '../../hooks/useInstructors';
import Card from '../Shared/Card/Card';
import InsCard from '../InsCard/InsCard';

const Instructors = () => {
    const [, instructors] = useInstructors();
    console.log(instructors);
    return (
        <div className='pt-[64px] md:pt-[69.78px] mb-10 max-w-[1450px] mx-auto'>
            <SectionTitle
                heading="Meet Our Expert Instructors"
                subHeading="Expert guidance, endless inspiration."
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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