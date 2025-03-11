import React, { useState, useContext, useEffect } from 'react';

function Footer() {

    return (
        <>
            <footer className="cs_footer cs_style_1 cs_heading_bg">
                <div className="container cs_white_color">
                    <div className="cs_footer_row">
                        <div className="cs_footer_col">
                            <div className="cs_footer_widget">
                                <div className="cs_footer_text_widget">
                                    <img src="assets/img/footer_logo.svg" alt="Logo" />
                                    <p>
                                        Far far away, behind the word bore et dolore magna aliqua. Ut enim
                                        ad on minim veniam, quis nostrud
                                    </p>
                                </div>
                                <div className="cs_social_btns cs_style_1">
                                    <a href="#" className="cs_center">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                    <a href="#" className="cs_center">
                                        <i className="fa-brands fa-x-twitter" />
                                    </a>
                                    <a href="#" className="cs_center">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                    <a href="#" className="cs_center">
                                        <i className="fa-brands fa-pinterest-p" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cs_footer_col">
                            <div className="cs_footer_widget">
                                <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                                    Links
                                </h2>
                                <ul className="cs_footer_widget_menu">
                                    <li>
                                        <a href="/home">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about-us">About</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact</a>
                                    </li>
                                    
                                    {/* <li>
                                        <a href="#">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        {/* <div className="cs_footer_col">
                            <div className="cs_footer_widget">
                                <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                                    Resources
                                </h2>
                                <ul className="cs_footer_widget_menu">
                                    <li>
                                        <a href="#">Demos</a>
                                    </li>
                                    <li>
                                        <a href="#">Instructions</a>
                                    </li>
                                    <li>
                                        <a href="#">Personal Meeting</a>
                                    </li>
                                    <li>
                                        <a href="doctors.html">Doctor List</a>
                                    </li>
                                    <li>
                                        <a href="#">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="cs_footer_col">
                            <div className="cs_footer_widget">
                                <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                                    Office
                                </h2>
                                <ul className="cs_footer_widget_menu cs_address">
                                    <li>America- 66 Brooklyn golden street 600 New York. USA</li>
                                    <li className="cs_fs_32 cs_bold cs_phone_number">
                                        <div className="cs_height_20 cs_height_lg_20" />
                                        <a href="tel:+444547800112">+91 8888888888</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_footer_bottom cs_white_color">
                    <div className="container">
                        <div className="cs_footer_bottom_in">
                            <p className="cs_copyright mb-0">medixal© 2024. All Rights Reserved.</p>
                            <ul className="cs_footer_widget_menu">
                                <li>
                                    <a href="#">Privacy &amp; Cookie Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;
