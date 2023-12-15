import React from 'react';
import { ProductCart } from './ProductCart';

export const Products = ({ products }) => {
    return (
        <div className="py-10">
            <div className="text-center flex flex-col items-center gap-4">
                <h1 className="w-80 py-2 bg-black text-white text-2xl ">Shopping Everyday</h1>
                <span className="h-[2px] w-20 bg-black"></span>
                <p className="max-w-[700px] text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                </p>
            </div>
            <div className="grid grid-cols-4 py-10 max-w-screen-xl mx-auto gap-10">
                {products.map((item) => (
                    <ProductCart key={item._id} product={item} />
                ))}
            </div>
        </div>
    );
};
