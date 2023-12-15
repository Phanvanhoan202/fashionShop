import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { facebookLogo, googleLogo } from '../assets';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/mangoSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const userInfo = useSelector((state) => state.mango.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const providerGoogle = new GoogleAuthProvider();

    const providerFacebook = new FacebookAuthProvider();
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        await signInWithPopup(auth, providerGoogle)
            .then((result) => {
                const user = result.user;
                console.log(user);
                dispatch(
                    addUser({
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    }),
                );
                setTimeout(() => {
                    navigate('/');
                }, 800);
            })
            .catch((error) => console.log(error));
    };
    const handleFacebookLogin = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        await signInWithPopup(auth, providerFacebook)
            .then((result) => {
                const user = result.user;
                console.log(user);
                dispatch(
                    addUser({
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    }),
                );
                setTimeout(() => {
                    navigate('/');
                }, 800);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="w-full py-20">
            {userInfo ? (
                <div className="flex flex-col items-center gap-8">
                    <span className="text-2xl font-medium">
                        Xin chào: <span className="text-3xl italic font-normal">{userInfo.name}</span>
                    </span>
                    <button
                        onClick={() => dispatch(removeUser()) && toast.warning('Đã đăng xuất!')}
                        className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-10 ">
                    <div
                        onClick={handleFacebookLogin}
                        className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
                    >
                        <img className="w-7" src={facebookLogo} alt="logoFacebook" />{' '}
                        <p className="text-sm text-gray-900">Sign in with Facebook</p>
                    </div>
                    <div
                        onClick={handleGoogleLogin}
                        className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
                    >
                        <img className="w-8" src={googleLogo} alt="logoGoogle" />{' '}
                        <p className="text-sm text-gray-900">Sign in with Google</p>
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
