import React from 'react';
import { decrementQuantity, deleteCart, increamentQuantity, resetCart } from '../redux/mangoSlice';
import { IoMdClose } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export const CartItem = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.mango.productData);
    console.log(productData.length);
    return (
        <div className="w-2/3 pr-10">
            <div>
                <h2 className="text-2xl font-titleFont">Shopping cart</h2>
            </div>
            <div className="py-6 flex flex-col gap-4">
                {productData.map((product) => (
                    <div key={product._id} className="mt-6 flex items-center justify-between ">
                        <div className="flex items-center gap-2 ">
                            <IoMdClose
                                onClick={() =>
                                    dispatch(deleteCart(product._id)) &&
                                    toast.success(`Đã xóa ${product.name} khỏi giỏ hàng`)
                                }
                                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                            />
                            <img className="w-32 h-32 object-cover" src={product.image} alt="imgProduct" />
                        </div>
                        <p className="w-52">{product.name}</p>
                        <p className="w-10">${product.price}</p>
                        <div className="flex items-center gap-4 text-sm font-semibold border p-2">
                            <button
                                onClick={() => dispatch(decrementQuantity(product._id))}
                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            >
                                -
                            </button>
                            <span className="w-3 flex items-center justify-center">{product.quantity}</span>
                            <button
                                onClick={() => dispatch(increamentQuantity(product._id))}
                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            >
                                +
                            </button>
                        </div>
                        <p className="w-20 flex justify-end">${product.quantity * product.price}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => dispatch(resetCart()) & toast.warning('Giỏ hàng của bạn trống!')}
                className="bg-red-500 mt-8 ml-7 hover:bg-red-800 text-white px-6 py-1 duration-300"
            >
                Reset Cart
            </button>

            <Link to={'/'}>
                <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                    <span>
                        <FaArrowLeft />
                    </span>
                    go shopping
                </button>
            </Link>

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
