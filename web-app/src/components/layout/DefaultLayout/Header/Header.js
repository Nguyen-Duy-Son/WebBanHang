import React, { useEffect, useState } from 'react';
import logo from '~/assets/images/LogoGiaHan.jpg';
import ButBi from '~/assets/images/ButBi-MocKhoa.jpg';
import AoMua from '~/assets/images/AoMua-Du.jpg';
import USB from '~/assets/images/USB.jpg';
import './Header.css';

const Header = () => {
    const images = [ButBi, AoMua, USB];
    const itemMenu = ["Trang Chủ","Tác Phẩm ", "Giới Thiệu","Dịch Vụ","Tin Tức","Liên Hệ"];
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imgIndex]);

    return (
        <header className="header bg-white-800 h-full w-full">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between w-full h-full">
                <a className="" href="/Home">
                    <img src={logo} alt="Logo Shop" className="w-5/6 h-full mr-2" />
                </a>
                <div className="flex items-center justify-between bg-slate-400 w-1/4 h-17 p-2 rounded">
                    <div className="flex items-center h-full">
                        <i className="fas fa-cart-shopping h-8 w-8 flex items-center"></i>
                    </div>
                    <a href="/cart" className="flex items-center mr-4 h-full w-full">
                        Giỏ hàng
                    </a>
                    <p>{/* Thêm nút giỏ hàng */}</p>
                </div> 
            </div>
            <hr></hr>
            <div className="header-menu bg-white-800 w-full flex items-center mt-4">
                <ul className="flex justify-center px-4 py-2 w-5/6 items-between text-center">
                    {
                        itemMenu.map((item,index)=>(
                            <li className='mr-4'>
                                <a href="#" key={index}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* <div className="slider w-full flex items-center">
                <div className="slider_img w-full flex items-center justify-center">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={index === imgIndex ? 'visible' : 'hidden'} 
                        />
                    ))}
                </div>
            </div> */}
        </header>
    );
};

export default Header;
