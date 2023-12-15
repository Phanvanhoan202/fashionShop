import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/mangoSlice';

export const ProductCart = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _id = product.title;
    const stringId = (_id) => {
        return String(_id).toLowerCase().split(' ').join('');
    };

    const rootId = stringId(_id);

    const handleDetail = () => {
        navigate(`/product/${rootId}`, { state: product });
    };
    return (
        <div className="group relative ">
            <div onClick={handleDetail} className="w-full h-96 cursor-pointer overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={product.image}
                    alt=""
                ></img>
            </div>
            <div className="px-2 py-4 border-[1px]">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-titleFont text-base font-bold">{product.title.substring(0, 15)}</h2>
                    </div>
                    <div className="relative text-sm overflow-hidden w-28 flex justify-end">
                        <div className="flex gap-2 group-hover:translate-x-24 transition-transform duration-500">
                            <p className="line-through text-gray-500">${product.oldPrice}</p>
                            <p className="font-semibold">${product.price}</p>
                        </div>
                        <p
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        _id: product._id,
                                        name: product.title,
                                        price: product.price,
                                        image: product.image,
                                        category: product.category,
                                        quantity: 1,
                                        description: product.description,
                                    }),
                                ) && toast.success(`Đã thêm ${product.title} vào giỏ hàng`)
                            }
                            className="flex items-center text-gray-500 gap-1 z-20 hover:text-gray-900 absolute top-0 w-[100px] transform -translate-x-32 group-hover:translate-x-0 duration-500 cursor-pointer"
                        >
                            add to cart
                            <BsArrowRight />
                        </p>
                    </div>
                </div>
                <div>{product.category}</div>
            </div>
            <div className="absolute top-4 right-0 z-20">
                <span className=" bg-black text-white font-semibold font-titleFont  px-6 py-1">sale</span>
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
