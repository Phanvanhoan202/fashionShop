import React from 'react';
import { cart, logoDark } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const productData = useSelector((state) => state.mango.productData);
    const userInfo = useSelector((state) => state.mango.userInfo);

    console.log(userInfo);
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-gray-800 font-titleFont sticky top-0 z-50  ">
            <div className="h-full xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex items-center justify-between">
                <Link to={'/'}>
                    <div>
                        <img className="w-28" src={logoDark} alt="logoDark" />
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex gap-8 font-bold items-center sm:hidden md:flex">
                        <Link to={'/'}>
                            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                                Home
                            </li>
                        </Link>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Pages
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Shop
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Element
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Blog
                        </li>
                    </ul>
                    <Link to={'/cart'}>
                        <div className="relative flex items-center cursor-pointer ">
                            <img className="w-9" src={cart} alt="cart" />
                            <span className="absolute top-1 left-0 w-full h-full text-xs font-bold flex items-center justify-center">
                                {productData && productData.length}
                            </span>
                        </div>
                    </Link>

                    <Link to={'/login'}>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-8 cursor-pointer rounded-full object-cover"
                                src={
                                    userInfo
                                        ? userInfo.image
                                        : 'https://covid19.vnuhcm.edu.vn/wp-content/uploads/2021/08/no-avatar.png'
                                }
                                alt="noAvt"
                            />
                            <span className="text-base font-titleFont font-semibold underline underline-offset-2 sm:hidden md:block">
                                {userInfo?.name}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
