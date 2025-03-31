import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../Intro/Intro';
import Gallery from '../Gallery/Gallery';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div className='pt-[64px] md:pt-[69.78px] '>
            <Banner></Banner>
            <div className='md:max-w-[1450px] mx-auto'>
                <Intro></Intro>
                <Gallery></Gallery>
                <PopularClasses ></PopularClasses>
            </div>
        </div>
    );
};

export default Home;