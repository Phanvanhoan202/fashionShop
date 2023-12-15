import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/mangoSlice';

export const Product = () => {
    const [details, setDetails] = useState({});
    const [baseQty, setBaseQty] = useState(1);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        setDetails(location.state);
    }, []);

    return (
        <div className="max-w-screen-xl flex mx-auto py-10 gap-10">
            <div className="w-2/5 relative">
                <img className="w-full h-[550px] object-cover" src={details.image} alt="imgDetail" />
                <div className="absolute top-4 right-0 z-20">
                    <span className=" bg-black text-white font-semibold font-titleFont  px-6 py-1">sale</span>
                </div>
            </div>

            <div className="w-3/5 flex flex-col gap-12 justify-center">
                <div>
                    <h2 className="text-4xl font-semibold">{details.title}</h2>
                    <div className="flex items-center gap-4 mt-3">
                        <span className="line-through font-base text-gray-500">${details.oldPrice}</span>
                        <span className="text-2xl font-medium text-gray-900">${details.price}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex">
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                    </div>
                    <p className="text-sm text-gray-500">(1 customer review)</p>
                </div>
                <p className="text-gray-500 text-base -mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis
                    molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.
                </p>
                <div className="flex gap-4">
                    <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                        <p className="text-sm">Quantity:</p>
                        <div className="flex items-center gap-4 text-sm font-semibold ">
                            <button
                                onClick={() => {
                                    setBaseQty((prev) => (prev === 1 ? 1 : prev - 1));
                                }}
                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            >
                                -
                            </button>
                            <span className="w-3 flex items-center justify-center">{baseQty}</span>
                            <button
                                onClick={() => {
                                    setBaseQty((prev) => prev + 1);
                                }}
                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    _id: details._id,
                                    name: details.title,
                                    price: details.price,
                                    image: details.image,
                                    category: details.category,
                                    quantity: baseQty,
                                    description: details.description,
                                }),
                            ) && toast.success(`Đã thêm ${details.title} vào giỏ hàng`)
                        }
                        className="bg-black text-white py-3 px-6 active:bg-gray-800"
                    >
                        add to cart
                    </button>
                </div>
                <p className="text-base text-gray-500">
                    <span className="font-medium capitalize">{details.category}</span>
                </p>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};
