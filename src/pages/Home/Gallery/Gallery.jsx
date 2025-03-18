import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/images/gallery/img1.jpg"
import img2 from "../../../assets/images/gallery/img2.jpg"
import img3 from "../../../assets/images/gallery/img3.jpg"
import img4 from "../../../assets/images/gallery/img4.jpg"
import img5 from "../../../assets/images/gallery/img5.jpg"
import img6 from "../../../assets/images/gallery/img6.jpg"
import img7 from "../../../assets/images/gallery/img7.jpg"
import img8 from "../../../assets/images/gallery/img8.jpg"
import img9 from "../../../assets/images/gallery/img9.jpg"
import img10 from "../../../assets/images/gallery/img10.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Gallery = () => {
    return (
        <div className='my-24'>
            <SectionTitle
            heading="Student Gallery"
            subHeading="Where Every Photo Tells a Story"
            ></SectionTitle>
            <Marquee speed={100} className=''>
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img1} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img2} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img3} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img4} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img5} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img6} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img7} alt="" />
                <img className='h-[300px] w-[300px] md:h-[400px] ml-6' src={img8} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img9} alt="" />
                <img className='w-[100vw] h-[300px] md:w-[500px] md:h-[400px] ml-6' src={img10} alt="" />
            </Marquee>
        </div>
    );
};

export default Gallery;