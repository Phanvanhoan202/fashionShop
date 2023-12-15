import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
    const productData = useSelector((state) => state.mango.productData);
    const userInfo = useSelector((state) => state.mango.userInfo);
    const [payNow, setPayNow] = useState(false);

    const [totalAmt, setTotalAmt] = useState();
    useEffect(() => {
        const result = productData.reduce((acc, current) => acc + current.price * current.quantity, 0);
        setTotalAmt(result);
    }, [productData]);

    const handleCheckout = () => {
        if (userInfo) {
            setPayNow(true);
        } else {
            setPayNow(false);
            toast.error('Vui lòng đăng nhập để thanh toán!');
        }
    };
    console.log(userInfo);
    return (
        <div>
            <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="bg"
            />
            {productData.length === 0 ? (
                <div className="text-red-500 text-center py-10 text-xl">Your shopping cart is empty</div>
            ) : (
                <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl mx-auto py-20 lg:flex">
                    <CartItem />
                    {/* total  */}
                    <div className="lg:w-1/3 sm:w-full sm:mt-12  bg-[#fafafa] py-6 px-4">
                        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                            <h2 className="text-2xl font-medium">cart totals</h2>
                            <p className="flex gap-4 items-center text-base">
                                Subtotal{' '}
                                <span className="font-titleFont font-bold text-lg">$ {totalAmt?.toFixed(2)}</span>
                            </p>
                            <p className="flex gap-4 items-center text-base">
                                Shipping{' '}
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                </span>
                            </p>
                        </div>
                        <p className="flex justify-between mt-6 font-semibold font-titleFont">
                            Total <span className="text-xl font-bold">$ {totalAmt?.toFixed(2)}</span>
                        </p>
                        <button
                            onClick={handleCheckout}
                            className="text-base w-full text-center bg-black text-white py-3 mt-6 hover:bg-gray-800 duration-300"
                        >
                            proceed to checkout
                        </button>
                        {payNow && (
                            <div className="flex items-center justify-center mt-4">
                                <StripeCheckout
                                    email={userInfo.email}
                                    description={`Your Payment amount is $${totalAmt}`}
                                    amount={totalAmt * 100} // cents
                                    name="Mango Fashion Shop" // the pop-in header title
                                    currency="USD"
                                    stripeKey="pk_test_51OICnFFDxTYWT6m48qCPjfCkT6AoznvzHUwhHUgNt3tGdZZtZh7buSdbsPsRBMollrdUrlKNF0W0wbPLD53kYQyS00KCQeDwRw"
                                    label={`Pay to Mango`}
                                ></StripeCheckout>
                            </div>
                        )}
                    </div>
                </div>
            )}
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
