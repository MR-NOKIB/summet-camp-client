import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../Intro/Intro';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='pt-[64px] md:pt-[69.78px]'>
            <Banner></Banner>
            <Intro></Intro>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;