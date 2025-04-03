import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import Card from '../../Shared/Card/Card';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-mr-nokib-nojom-uddins-projects.vercel.app/classes/limit')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, []);

    return (
        <div className='mb-20'>
            <SectionTitle
                subHeading="Our Top Picks for You"
                heading="Popular Classes"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes?.map(classData => <Card
                        key={classData._id}
                        cardData={classData}
                    ></Card>)
                }
            </div>
            <div className='flex items-center justify-center mt-16'>
                <Link to="/classes" className='bg-[#c4dff9] hover:bg-[#9bcaf5] font-semibold text-[19px] text-[#0f172b] px-4 py-2 rounded-md'>See All Classes</Link>
            </div>
        </div>
    );
};

export default PopularClasses;