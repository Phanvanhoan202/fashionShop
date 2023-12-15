import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        'https://marketplace.canva.com/EAFNOTPz1ZY/1/0/1600w/canva-beige-modern-fashion-collection-promo-banner-z8oqB6n7Bjg.jpg',
        'https://marketplace.canva.com/EAFfICXrCR8/1/0/1600w/canva-brown-minimalist-fashion-sale-banner-QHCu0s8uFSw.jpg',
        'https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg',
        'https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg',
    ];
    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <div className="xl:h-[650px] sm:h-[355px] lg:h-[515px] sm: w-screen relative">
                <div
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    className="w-[400vw] h-full flex duration-1000"
                >
                    <img className="w-screen h-full object-cover" src={data[0]} alt="banner" />
                    <img className="w-screen h-full object-cover" src={data[1]} alt="banner" />
                    <img className="w-screen h-full object-cover" src={data[2]} alt="banner" />
                    <img className="w-screen h-full object-cover" src={data[3]} alt="banner" />
                </div>
                <div className="w-full absolute bottom-44 flex items-center justify-center gap-8">
                    <div
                        onClick={handlePrev}
                        className="w-12 h-14 border flex items-center justify-center cursor-pointer border-gray-700 duration-300 hover:bg-gray-700 hover:text-white active:bg-gray-900"
                    >
                        <HiArrowLeft />
                    </div>
                    <div
                        onClick={handleNext}
                        className="w-12 h-14 border flex items-center justify-center cursor-pointer border-gray-700 duration-300 hover:bg-gray-700 hover:text-white active:bg-gray-900"
                    >
                        <HiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
