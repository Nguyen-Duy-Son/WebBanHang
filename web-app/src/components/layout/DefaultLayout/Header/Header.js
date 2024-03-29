import React, { useEffect, useState, useContext } from 'react';
import logo from '~/assets/images/LogoGiaHan.jpg';
import UserContext from '../../../../pages/Users/UserContext/UserContext';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user,token } = useContext(UserContext);
    const itemMenu = [
        'Trang Chủ',
        'Sản Phẩm',
        'Giới Thiệu',
        'Dịch Vụ',
        'Tin Tức',
        'Liên Hệ',
    ];
    return (
        <header className="header bg-white-800 h-full w-full">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between w-full h-full">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo Shop"
                        className="w-5/6 h-full mr-2"
                    />
                </Link>
                <div className="container-top">
                    {user ? (
                        // If props is not null, display user information
                        <div className="user-info">
                            <img
                                src={
                                    user.avatar ||
                                    'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
                                }
                                alt="User Avatar"
                                className="avatar"
                            />
                            <span className="user-name">{user.userName}</span>
                        </div>
                    ) : (
                        <div className="login-signup">
                            <a className="login-signup-click" href="/SignUp">
                                Đăng Kí
                            </a>
                            <a className="login-signup-click" href="/SignIn">
                                Đăng Nhập
                            </a>
                        </div>
                    )}
                    {user ? (
                        <div className="flex items-center justify-between bg-slate-400 w-full h-17 p-2 rounded">
                            <div className="flex items-center h-full">
                                <i className="fas fa-cart-shopping h-8 w-8 flex items-center"></i>
                            </div>
                            <Link
                                to={`/cart/${user.id}`}
                                className="flex items-center mr-4 h-full w-full"
                            >
                                <b>Giỏ hàng</b>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between bg-slate-400 w-full h-17 p-2 rounded">
                            <div className="flex items-center h-full">
                                <i className="fas fa-cart-shopping h-8 w-8 flex items-center"></i>
                            </div>
                            <Link
                                to={`/cart/`}
                                className="flex items-center mr-4 h-full w-full"
                            >
                                <b>Giỏ hàng</b>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <hr></hr>
            <div className="header-menu bg-white-800 w-full flex items-center mt-4">
                <ul className="flex justify-center px-4 py-2 w-5/6 items-between text-center">
                    {itemMenu.map((item, index) => (
                        <li className="mr-4" key={index}>
                            {item === 'Sản Phẩm' ? (
                                <Link
                                    to={{
                                        pathname: '/SanPham',
                                        state: { user: user },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </Link>
                            ) : (
                                <Link to="/" key={index}>
                                    {item}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
