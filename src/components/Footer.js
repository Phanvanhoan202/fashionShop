import React from 'react';
import { ImGithub, ImLocation } from 'react-icons/im';
import { FaFacebookF, FaInstagram, FaYoutube, FaHome, FaTwitter } from 'react-icons/fa';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import { logoLight, paymentLogo } from '../assets';

export const Footer = () => {
    return (
        <div className="w-full bg-black py-20 font-titleFont text-[#949494]">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4">
                <div className="flex flex-col gap-5">
                    <img className="w-32 -mb-2 -mt-2" src={logoLight} alt="logoLight" />
                    <p className="text-white text-sm tracking-wide">© Mango.com</p>
                    <img className="w-56" src={paymentLogo} alt="payment" />
                    <div className="flex gap-5 text-gray-400 text-lg ">
                        <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl mb-4 font-semibold text-white">locate us</h2>
                    <div className="flex flex-col gap-2 text-base">
                        <p>District 4, Ho Chi Minh City, Vietnam</p>
                        <p>Mobile: 0367 838 888</p>
                        <p>Phone: 0362 214 444</p>
                        <p>Email: mango@gmail.com</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl mb-4 font-semibold text-white">Profile</h2>
                    <div className="flex flex-col gap-2 text-base">
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <BsPersonFill />
                            </span>
                            my account
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <BsPaypal />
                            </span>
                            checkout
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <FaHome />
                            </span>
                            order tracking
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <ImLocation />
                            </span>
                            help & support
                        </p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <input className="bg-transparent border py-2 text-sm px-4" />
                    <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};
