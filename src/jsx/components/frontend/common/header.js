import React, { useState, useContext, useEffect } from 'react';
const Header = () => {

    return (
        <>
            <header className="cs_site_header cs_style_1 cs_sticky_header cs_heading_font">
                <div className="cs_main_header">
                    <div className="container-fluid">
                        <div className="cs_main_header_in">
                            <div className="cs_main_header_left">
                                <a className="cs_site_branding" href="index.html">
                                    <img src="assets/img/logo.svg" alt="Logo" />
                                </a>
                                <div className="cs_nav cs_fs_18 cs_semibold">
                                    <div className="cs_nav_list_wrap">
                                        <ul className="cs_nav_list">
                                            <li>
                                                <a href="/home">Home</a>
                                                {/* <ul className="cs_mega_wrapper cs_with_thumb">
                                                    <li>
                                                        <a href="index.html">
                                                            <img src="assets/img/demo/1_main-home.jpg" alt="" />
                                                            Main Home
                                                        </a>
                                                    </li> */}
                                                    {/* <li>
                                                        <a href="dental.html">
                                                            <img src="assets/img/demo/2_dental.jpg" alt="" />
                                                            Dental
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="eye-care.html">
                                                            <img src="assets/img/demo/3_eye-care.jpg" alt="" />
                                                            Eye Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="rehabilitations.html">
                                                            <img
                                                                src="assets/img/demo/4_rehabilatations-center.jpg"
                                                                alt=""
                                                            />
                                                            Rehabilatations Center
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="physiotherapy.html">
                                                            <img
                                                                src="assets/img/demo/5_physiotherepy_center.jpg"
                                                                alt=""
                                                            />
                                                            Physiotherepy Center
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="psychology.html">
                                                            <img src="assets/img/demo/6_psychology.jpg" alt="" />
                                                            Psychology
                                                        </a>
                                                    </li> */}
                                                {/* </ul> */}
                                            </li>
                                           
                                            <li>
                                                <a href="/about-us">About Us</a>
                                            </li>
                                            
                                            <li>
                                                <a href="/blogs">Blog</a>
                                                
                                            </li>
                                            <li>
                                                <a href="/contact-us">Contact</a>
                                                
                                            </li>
                                            <li>
                                                <a href="/services">Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="cs_main_header_right">
                                <button type="button" className="cs_search_toggle_btn">
                                    <svg
                                        width={32}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.3337 27.9998C22.3293 27.9998 28.0003 22.3288 28.0003 15.3332C28.0003 8.33756 22.3293 2.6665 15.3337 2.6665C8.33805 2.6665 2.66699 8.33756 2.66699 15.3332C2.66699 22.3288 8.33805 27.9998 15.3337 27.9998Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M29.3337 29.3332L26.667 26.6665"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <a
                                    href="appointment.html"
                                    className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                                >
                                    <span className="cs_btn_text">Make An Appointment</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
