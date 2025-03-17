import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Lottie from "lottie-react";
import lottieJsonBNRData1 from '../../../assets/lottie/Animation.json'
import lottieJsonBNRData2 from '../../../assets/lottie/camera-outline.json'
import banner1 from '../../../assets/images/banner/undraw_good-team_zww8.png'
import banner2 from '../../../assets/images/banner/undraw_landscape-photographer_e84n.png'
import { FaRegHandPointRight } from "react-icons/fa6"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../../Components/Button';
AOS.init();

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1450' height='700' preserveAspectRatio='none' viewBox='0 0 1450 700'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1054%26quot%3b)' fill='none'%3e%3crect width='1450' height='700' x='0' y='0' fill='rgba(15%2c 23%2c 43%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c507.194C93.343%2c501.6%2c159.965%2c421.702%2c240.797%2c374.688C326.203%2c325.014%2c451.92%2c314.87%2c488.48%2c223.082C525.277%2c130.698%2c423.236%2c39.503%2c413.731%2c-59.485C403.499%2c-166.036%2c495.835%2c-288.312%2c431.181%2c-373.621C367.583%2c-457.537%2c230.681%2c-412.505%2c128.121%2c-436.34C33.118%2c-458.419%2c-54.59%2c-531.76%2c-149.318%2c-508.53C-244.748%2c-485.128%2c-294.19%2c-384.52%2c-364.227%2c-315.605C-441.269%2c-239.798%2c-570.807%2c-191.148%2c-581.207%2c-83.565C-591.681%2c24.789%2c-472.782%2c97.643%2c-412.966%2c188.595C-363.478%2c263.843%2c-331.397%2c349.694%2c-260.089%2c404.707C-184.784%2c462.804%2c-94.941%2c512.884%2c0%2c507.194' fill='%230c1222'%3e%3c/path%3e%3cpath d='M1450 1113.1390000000001C1530.757 1128.895 1615.1 1108.475 1688.03 1070.3809999999999 1765.154 1030.096 1849.628 976.8050000000001 1871.991 892.717 1894.157 809.37 1827.749 731.318 1799.91 649.691 1777.687 584.53 1772.301 511.735 1724.998 461.71299999999997 1678.542 412.587 1603.131 412.366 1544.1779999999999 379.259 1462.235 333.241 1403.698 209.51299999999998 1311.917 229.731 1222.497 249.42899999999997 1220.024 381.677 1173.961 460.81100000000004 1137.705 523.096 1090.503 576.276 1069.982 645.362 1046.828 723.309 1008.201 812.727 1048.438 883.387 1088.9189999999999 954.476 1194.004 947.2239999999999 1265.01 987.85 1330.989 1025.6 1375.392 1098.583 1450 1113.1390000000001' fill='%23121c34'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1054'%3e%3crect width='1450' height='700' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")` }}
                        className='relative md:h-[700px] md:w-[1450px]'
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-slate-950/10"></div>

                        {/* Content Over the Overlay */}
                        <div className='text-white flex flex-col md:flex-row md:items-center md:justify-between md:px-30 py-10'>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className="px-5 text-center md:text-left">
                                <i className='text-[#FACC15] textarea-xl'>
                                    Focus Frame Camp
                                </i>
                                <h1 data-aos="flip-left" className="text-5xl md:text-7xl font-bold mt-3">
                                    Capture Your<br /> World Through <br />a New Lens
                                </h1>
                                <p className='text-[#FACC15] md:textarea-xl mt-6 mb-6'>
                                    Discover the World One Click at a Time
                                </p>
                                <Button>
                                    Explore More
                                </Button>
                            </div>
                            <div className='max-w-[100vw] md:w-1/2'>
                                <Lottie
                                    animationData={lottieJsonBNRData1}
                                ></Lottie>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slide 2 */}
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1450' height='700' preserveAspectRatio='none' viewBox='0 0 1450 700'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1028%26quot%3b)' fill='none'%3e%3crect width='1450' height='700' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1029%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1450 0L1062.1 0L1450 91.84z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1062.1 0L1450 91.84L1450 331.33000000000004L985.3599999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M985.36 0L1450 331.33000000000004L1450 558.27L914.22 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M914.22 0L1450 558.27L1450 591.34L290.30000000000007 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 700L170.87 700L0 592.35z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 592.35L170.87 700L662.77 700L0 346.85z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 346.85L662.77 700L1133.92 700L0 243.84000000000003z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 243.84000000000003L1133.92 700L1271.3600000000001 700L0 151.24000000000004z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1028'%3e%3crect width='1450' height='700' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='12.93%25' y1='-26.79%25' x2='87.07%25' y2='126.79%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1029'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(15%2c 23%2c 43%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")` }}
                        className='relative md:h-[700px] md:w-[1450px]'
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0"></div>

                        {/* Content Over the Overlay */}
                        <div
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            className='text-white flex flex-col md:flex-row md:items-center md:justify-between md:px-30 py-10'>
                            <div data-aos="fade-right" className="px-5 text-center md:text-left">
                                <i className='text-[#FACC15] textarea-xl'>
                                    Focus Frame Camp
                                </i>
                                <h1 className="text-5xl md:text-7xl font-bold mt-3">
                                    Master<br /> the Art of <br />Light & Shadow
                                </h1>
                                <p className='text-[#FACC15] md:textarea-xl mt-6 mb-6'>
                                    Turn Ordinary Moments into Extraordinary Art
                                </p>
                                <Button>
                                    Explore More
                                </Button>
                            </div>
                            <div className='max-w-[100vw] md:w-1/2 h-1/2'>
                                <Lottie
                                    color='#ffffff'
                                    animationData={lottieJsonBNRData2}
                                ></Lottie>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1450' height='700' preserveAspectRatio='none' viewBox='0 0 1450 700'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='1450' height='700' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M95 700L795 0L1039.5 0L339.5 700z' fill='url(%26quot%3b%23SvgjsLinearGradient1004%26quot%3b)'%3e%3c/path%3e%3cpath d='M562.5 700L1262.5 0L1964.5 0L1264.5 700z' fill='url(%26quot%3b%23SvgjsLinearGradient1004%26quot%3b)'%3e%3c/path%3e%3cpath d='M1379 700L679 0L589 0L1289 700z' fill='url(%26quot%3b%23SvgjsLinearGradient1005%26quot%3b)'%3e%3c/path%3e%3cpath d='M917.5 700L217.5 0L-424.5 0L275.5 700z' fill='url(%26quot%3b%23SvgjsLinearGradient1005%26quot%3b)'%3e%3c/path%3e%3cpath d='M942.96681988191 700L1450 192.96681988191006L1450 700z' fill='url(%26quot%3b%23SvgjsLinearGradient1004%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 700L507.03318011808994 700L 0 192.96681988191006z' fill='url(%26quot%3b%23SvgjsLinearGradient1005%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1450' height='700' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1004'%3e%3cstop stop-color='rgba(15%2c 23%2c 43%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 23%2c 43%2c 1)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1005'%3e%3cstop stop-color='rgba(15%2c 23%2c 43%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 23%2c 43%2c 1)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")` }}
                        className='relative h-[700px] md:w-[1450px]'
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0"></div>

                        {/* Content Over the Overlay */}
                        <div data-aos="fade-right" className='h-full text-white flex flex-col md:flex-row md:items-center justify-between md:px-30 py-10'>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className="px-5 text-center md:text-left">
                                <i className='text-[#FACC15] textarea-xl'>
                                    Focus Frame Camp
                                </i>
                                <h1 className="text-5xl md:text-7xl font-bold mt-3">
                                    Adventures <br />in Every Frame
                                </h1>
                                <p className='text-[#FACC15] md:textarea-xl mt-6 mb-6'>
                                    Where Creativity Meets Adventure
                                </p>
                                <Button>
                                    Explore More
                                </Button>
                            </div>
                            <div className='max-w-[100vw] md:w-1/2 h-1/2 p-6'>
                                <img src={banner1} alt="" className='rounded-2xl' />
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 4 */}
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1450' height='700' preserveAspectRatio='none' viewBox='0 0 1450 700'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3crect width='1450' height='700' x='0' y='0' fill='rgba(15%2c 23%2c 43%2c 1)'%3e%3c/rect%3e%3cpath d='M1609.25 479.77C1465.78 481.01 1358.16 637.91 1054.48 626.77 750.8 615.63 702.73 45.75 499.71-16.64' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1651.82 540.68C1507.16 534.19 1382.1 330.09 1130.29 288.68 878.47 247.27 977.39-62.15 869.52-115.09' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1568.88 58.76C1422.02 66.86 1311.24 332.2 1047.7 331.76 784.17 331.32 693.4-72 526.53-98.58' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1480.55 124.38C1357.97 124.03 1239.32 36.88 998.08 36.88 756.85 36.88 757.65 124.45 515.61 124.38 273.57 124.31 160.7-39.63 33.14-41.94' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1553.01 215.15C1414.48 226.84 1325.12 511.25 1080.99 509.15 836.87 507.05 781.23 17.66 608.98-34.66' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1450' height='700' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")` }}
                        className='relative md:h-[700px] md:w-[1450px]'
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0"></div>

                        {/* Content Over the Overlay */}
                        <div className='text-white flex flex-col md:flex-row md:items-center justify-between md:px-30 py-10'>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className="px-5 text-center md:text-left">
                                <i className='text-[#FACC15] textarea-xl'>
                                    Focus Frame Camp
                                </i>
                                <h1 className="text-5xl md:text-7xl font-bold mt-3">
                                    From Beginner <br />to Pro in<br /> One Summer
                                </h1>
                                <p className='text-[#FACC15] md:textarea-xl mt-6 mb-6'>
                                    our Journey Starts Here
                                </p>
                                <Button>
                                    Explore More
                                </Button>
                            </div>
                            <div className='max-w-[100vw] md:w-1/2 h-1/2 p-6'>
                                <img src={banner2} alt="" className='rounded-2xl' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;