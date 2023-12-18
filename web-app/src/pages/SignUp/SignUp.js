import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import background from '~/image/background.jpg';
import imgcontent from '~/image/img-content.jpg';
import Snowfall from 'react-snowfall'; // Import thư viện react-snowfall
import './SignUp.css';

const SignUpForm = () => {
    const formikSignUp = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            // Kiểm tra sự khớp giữa trường Password và Confirm Password
            if (values.password !== values.confirmPassword) {
                console.log('Passwords do not match');
                return;
            }

            console.log('Form submitted:', values);
            try {
                const response = await axios.post(
                    'http://localhost:5000/api/v1/auth/register',
                    values,
                );
                console.log('API response:', response.data);
                // Xử lý logic sau khi nhận được phản hồi từ API
            } catch (error) {
                console.error('API error:', error);
                // Xử lý lỗi khi gọi API
            }
        },
    });

    return (
        <div
            className="flex justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Snowfall
                snowflakeCount={100} // Số lượng tuyết rơi
                snowflakePosition="all" // Vị trí xuất hiện của tuyết rơi
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }} // Vị trí và kích thước của tuyết rơi
                snowflakeSize={{ minSize: 1, maxSize: 4 }} // Kích thước tuyết rơi
            />
            <div className="w-full max-w-md">
                <div className="text-center mb-6">
                    <img
                        src={imgcontent}
                        className="rounded-full w-32 h-32 mx-auto mb-4"
                        alt="Minion"
                    />
                    <div className="text-3xl text-center mb-6">
                        <h2 className="" style={{ color: 'pink' }}>
                            Sign Up To Website
                        </h2>
                    </div>
                </div>
                <form
                    className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${
                        formikSignUp.isSubmitting ? 'submitting' : ''
                    }`}
                    style={{ background: 'transparent' , boxShadow:'none'}}
                    onSubmit={formikSignUp.handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="userName"
                        >
                            <FaUser className="inline-block mr-2 align-middle" />
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="userName"
                            type="text"
                            placeholder="Username"
                            value={formikSignUp.values.userName}
                            onChange={formikSignUp.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            <FaLock className="inline-block mr-2 align-middle" />
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={formikSignUp.values.password}
                            onChange={formikSignUp.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirmPassword"
                        >
                            <FaLock className="inline-block mr-2 align-middle" />
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={formikSignUp.values.confirmPassword}
                            onChange={formikSignUp.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            <FaEnvelope className="inline-block mr-2 align-middle" />
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={formikSignUp.values.email}
                            onChange={formikSignUp.handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className='signup-button flex justify-between'>
                        <button
                            className="bg-blue-500 text-center flex justify-between align-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                      </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
