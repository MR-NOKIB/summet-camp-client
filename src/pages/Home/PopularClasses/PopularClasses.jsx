import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCard from '../ClassCard/ClassCard';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes/limit')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, []);

    return (
        <div>
            <SectionTitle
                subHeading="Our Top Picks for You"
                heading="Popular Classes"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    classes.map(classData => <ClassCard
                        key={classData._id}
                        classData={classData}
                    ></ClassCard>)
                }
            </div>
            <div className='flex items-center justify-center mt-8'>
                <Link to="/classes"  className='bg-[#00C1A2] font-semibold text-[19px] text-white px-4 py-2 rounded-md'>See All Classes</Link>
            </div>
        </div>
    );
};

export default PopularClasses;