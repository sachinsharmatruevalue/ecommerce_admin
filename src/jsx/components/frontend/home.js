import React, { useState, useContext, useEffect } from 'react';

function Home() {

    return (
        <>
            <section
                className="cs_hero cs_style_1 cs_bg_filed position-relative"
                data-src="assets/img/hero_bg_1.jpeg"
            >
                <div className="cs_hero_overlay position-absolute" />
                <div className="container">
                    <div className="cs_hero_content_wrapper">
                        <div
                            className="cs_hero_content wow fadeInRight"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <h3 className="cs_hero_title_mini cs_fs_18 cs_white_color cs_semibold">
                                Expert Medical Treatment
                            </h3>
                            <h1 className="cs_hero_title cs_fs_72 cs_white_color">
                                We Follow A Holistic Approach to Health care.
                            </h1>
                            <p className="cs_hero_subtitle cs_fs_20 cs_medium cs_white_color cs_heading_font">
                                Protect your smile and keep it healthy, with the latest technology
                                available in your neighbourhood.
                            </p>
                            {/* <a
                                href="https://www.youtube.com/embed/rRid6GCJtgc"
                                className="cs_player_btn cs_style_1 cs_video_open cs_heading_font"
                            >
                                <span className="cs_player_btn_icon cs_center">
                                    <i className="fa-solid fa-play" />
                                </span>
                                <span className="cs_play_btn_text cs_fs_18 cs_semibold cs_white_color">
                                    See How We Works
                                </span>
                            </a> */}
                        </div>
                    </div>
                </div>
                {/* <div
                    className="cs_hero_doctorbox cs_center position-absolute wow fadeInDown"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                >
                    <div className="cs_hero_doctorbox_shape">
                        <svg
                            width={125}
                            height={148}
                            viewBox="0 0 125 148"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M123.519 38.592C123.444 34.6503 123.372 30.9264 123.372 27.3243C123.372 24.5018 121.085 22.214 118.262 22.214C96.4073 22.214 79.7679 15.9326 65.8979 2.44702C63.9138 0.517212 60.7564 0.518112 58.7729 2.44702C44.9045 15.9326 28.2677 22.214 6.41438 22.214C3.59191 22.214 1.30378 24.5018 1.30378 27.3243C1.30378 30.9273 1.2332 34.6524 1.15748 38.595C0.45716 75.2777 -0.50214 125.517 60.6615 146.718C61.204 146.906 61.7696 147 62.3351 147C62.9006 147 63.4667 146.906 64.0086 146.718C125.177 125.516 124.219 75.2756 123.519 38.592Z"
                                fill="currentColor"
                                fillOpacity="0.11"
                                stroke="white"
                                strokeMiterlimit={10}
                            />
                        </svg>
                    </div>
                    <div className="cs_hero_doctorbox_content">
                        <div className="cs_hero_doctorbox_thumbnail">
                            <img src="assets/img/doctor_group_1.png" alt="Image" />
                        </div>
                        <h3 className="cs_hero_doctorbox_title cs_fs_24 cs_bold cs_white_color mb-0">
                            870+
                        </h3>
                        <p className="cs_hero_doctorbox_subtitle cs_fs_14 mb-0">Doctors</p>
                    </div>
                </div> */}
                <div
                    className="cs_hero_patientbox cs_accent_bg position-absolute wow fadeInRight"
                    data-wow-duration="0.9s"
                    data-wow-delay="0.5s"
                >
                    <div className="cs_hero_patientbox_content">
                        <div className="cs_hero_patientbox_thumb">
                            <img src="assets/img/patient_group_1.png" alt="Image" />
                        </div>
                        <div className="cs_hero_patientbox_info">
                            <h3 className="cs_hero_patientbox_title cs_fs_24 cs_bold cs_white_color mb-0">
                                150K+
                            </h3>
                            <p className="cs_hero_patientbox_subtitle cs_white_color mb-0">
                                Satisfied Patients
                            </p>
                        </div>
                    </div>
                </div>
                <a
                    href="#about"
                    className="cs_scroll_more_btn cs_fs_20 cs_white_color cs_medium position-absolute"
                >
                    <span className="cs_scroll_more_btn_in">
                        <i className="fa-solid fa-arrow-left-long" /> Scroll for more
                    </span>
                </a>
            </section>
            {/* End Hero Section */}
            {/* Start Department Section */}
            {/* <section className="cs_department cs_style_1">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 cs_text_center wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                            Our Department
                        </p>
                        <h2 className="cs_section_title cs_fs_48 mb-0">
                            experienced in Multiple medical <br /> practices for{" "}
                            <span className="cs_accent_color">your Health</span>
                        </h2>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="row cs_row_gap_30 cs_gap_y_30">
                        <div className="col-xl-4 col-md-6">
                            <a
                                href="department-details.html"
                                className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-100"
                            >
                                <div className="cs_iconbox_header">
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/department_icon_1.svg" alt="Icon" />
                                    </div>
                                    <h3 className="cs_iconbox_title cs_fs_32 cs_bold mb-0">
                                        Emergency Department
                                    </h3>
                                </div>
                                <div className="cs_iconbox_shape position-absolute" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a
                                href="department-details.html"
                                className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-100"
                            >
                                <div className="cs_iconbox_header">
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/department_icon_2.svg" alt="Icon" />
                                    </div>
                                    <h3 className="cs_iconbox_title cs_fs_32 cs_bold mb-0">
                                        Pediatric Department
                                    </h3>
                                </div>
                                <div className="cs_iconbox_shape position-absolute" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a
                                href="department-details.html"
                                className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-100"
                            >
                                <div className="cs_iconbox_header">
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/department_icon_3.svg" alt="Icon" />
                                    </div>
                                    <h3 className="cs_iconbox_title cs_fs_32 cs_bold mb-0">
                                        Gynecology Department
                                    </h3>
                                </div>
                                <div className="cs_iconbox_shape position-absolute" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a
                                href="department-details.html"
                                className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-100"
                            >
                                <div className="cs_iconbox_header">
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/department_icon_4.svg" alt="Icon" />
                                    </div>
                                    <h3 className="cs_iconbox_title cs_fs_32 cs_bold mb-0">
                                        Cardiology Department
                                    </h3>
                                </div>
                                <div className="cs_iconbox_shape position-absolute" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a
                                href="department-details.html"
                                className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-100"
                            >
                                <div className="cs_iconbox_header">
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/department_icon_5.svg" alt="Icon" />
                                    </div>
                                    <h3 className="cs_iconbox_title cs_fs_32 cs_bold mb-0">
                                        Neurology Department
                                    </h3>
                                </div>
                                <div className="cs_iconbox_shape position-absolute" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a
                                href="department-details.html"
                                className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-100"
                            >
                                <div className="cs_iconbox_header">
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/department_icon_6.svg" alt="Icon" />
                                    </div>
                                    <h3 className="cs_iconbox_title cs_fs_32 cs_bold mb-0">
                                        Psychiatry Department
                                    </h3>
                                </div>
                                <div className="cs_iconbox_shape position-absolute" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section> */}
            {/* End Department Section */}
            {/* Start About Section */}
            {/* <section className="cs_about cs_style_1 position-relative" id="about">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="row align-items-center cs_gap_y_40">
                        <div className="col-lg-6">
                            <div className="cs_about_thumbnail">
                                <div className="cs_about_thumbnail_1">
                                    <img src="assets/img/about_1.jpg" alt="Image" />
                                    <a
                                        href="https://www.youtube.com/embed/rRid6GCJtgc"
                                        className="cs_player_btn cs_style_1 cs_video_open"
                                    >
                                        <span className="cs_player_btn_icon cs_center">
                                            <img src="assets/img/icons/player_icon.svg" alt="Icon" />
                                        </span>
                                        <span className="cs_play_btn_text cs_fs_18 cs_semibold cs_accent_color">
                                            How We Works
                                        </span>
                                    </a>
                                </div>
                                <div className="cs_about_thumbnail_2">
                                    <img src="assets/img/about_2.jpg" alt="About Image" />
                                    <svg
                                        className="cs_about_thumbnail_shape_2 cs_accent_color"
                                        width={123}
                                        height={125}
                                        viewBox="0 0 123 125"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            opacity="0.3"
                                            cx={73}
                                            cy={75}
                                            r="49.5"
                                            stroke="currentColor"
                                            strokeDasharray="4 4"
                                        />
                                        <circle
                                            opacity="0.3"
                                            cx={62}
                                            cy={50}
                                            r="49.5"
                                            stroke="currentColor"
                                            strokeDasharray="4 4"
                                        />
                                        <circle
                                            opacity="0.3"
                                            cx={50}
                                            cy={72}
                                            r="49.5"
                                            stroke="currentColor"
                                            strokeDasharray="4 4"
                                        />
                                    </svg>
                                </div>
                                <div className="cs_experience_box cs_center cs_accent_bg cs_radius_50">
                                    <p className="cs_experience_box_number cs_fs_48 cs_bold cs_white_color">
                                        30+
                                    </p>
                                    <p className="cs_experience_box_title cs_fs_20 cs_medium cs_white_color">
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 wow fadeInRight"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_about_content">
                                <div className="cs_section_heading cs_style_1">
                                    <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                                        About us
                                    </p>
                                    <h2 className="cs_section_title cs_fs_48 mb-0">
                                        Advanced technology and{" "}
                                        <span className="cs_accent_color">Specialist Doctors.</span>
                                    </h2>
                                </div>
                                <p className="cs_about_text">
                                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    Wiusmod tempor incididunt incididunt ut labore et dolore magna.
                                </p>
                                <ul className="cs_list cs_style_1 cs_mp0">
                                    <li>
                                        <svg
                                            className="cs_accent_color"
                                            width={26}
                                            height={26}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.0097 25.9988C8.06573 25.9993 3.50673 23.1663 1.32323 18.7073C-0.886265 14.1938 -0.217265 8.56483 2.98873 4.70033C6.19124 0.839828 11.3977 -0.844672 16.2517 0.408828C16.7862 0.546828 17.1077 1.09233 16.9702 1.62733C16.8322 2.16233 16.2862 2.48333 15.7517 2.34583C11.6457 1.28533 7.23874 2.71033 4.52823 5.97783C1.81624 9.24733 1.25023 14.0098 3.11974 17.8288C4.98223 21.6328 9.09073 24.1108 13.3077 23.9958C17.5242 23.8808 21.3507 21.3163 23.0562 17.4628C24.0577 15.1998 24.2697 12.6373 23.6522 10.2468C23.5142 9.71233 23.8357 9.16683 24.3707 9.02833C24.9042 8.88983 25.4507 9.21183 25.5892 9.74683C26.3182 12.5713 26.0687 15.5993 24.8857 18.2723C22.8697 22.8273 18.3462 25.8588 13.3627 25.9948C13.2447 25.9973 13.1267 25.9988 13.0097 25.9988Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12.9999 16.1171C12.7439 16.1171 12.4879 16.0196 12.2929 15.8241C11.9024 15.4336 11.9024 14.8006 12.2929 14.4101L24.2929 2.41006C24.6829 2.01956 25.3169 2.01956 25.7069 2.41006C26.0974 2.80056 26.0974 3.43356 25.7069 3.82406L13.7069 15.8241C13.5119 16.0191 13.2559 16.1171 12.9999 16.1171Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.0002 16.1174C12.7442 16.1174 12.4882 16.0199 12.2932 15.8244L8.05069 11.5819C7.66019 11.1914 7.66019 10.5584 8.05069 10.1679C8.44069 9.77737 9.07469 9.77737 9.46469 10.1679L13.7072 14.4104C14.0977 14.8009 14.0977 15.4339 13.7072 15.8244C13.5122 16.0194 13.2562 16.1174 13.0002 16.1174Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Top quality Technician team
                                    </li>
                                    <li>
                                        <svg
                                            className="cs_accent_color"
                                            width={26}
                                            height={26}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.0097 25.9988C8.06573 25.9993 3.50673 23.1663 1.32323 18.7073C-0.886265 14.1938 -0.217265 8.56483 2.98873 4.70033C6.19124 0.839828 11.3977 -0.844672 16.2517 0.408828C16.7862 0.546828 17.1077 1.09233 16.9702 1.62733C16.8322 2.16233 16.2862 2.48333 15.7517 2.34583C11.6457 1.28533 7.23874 2.71033 4.52823 5.97783C1.81624 9.24733 1.25023 14.0098 3.11974 17.8288C4.98223 21.6328 9.09073 24.1108 13.3077 23.9958C17.5242 23.8808 21.3507 21.3163 23.0562 17.4628C24.0577 15.1998 24.2697 12.6373 23.6522 10.2468C23.5142 9.71233 23.8357 9.16683 24.3707 9.02833C24.9042 8.88983 25.4507 9.21183 25.5892 9.74683C26.3182 12.5713 26.0687 15.5993 24.8857 18.2723C22.8697 22.8273 18.3462 25.8588 13.3627 25.9948C13.2447 25.9973 13.1267 25.9988 13.0097 25.9988Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12.9999 16.1171C12.7439 16.1171 12.4879 16.0196 12.2929 15.8241C11.9024 15.4336 11.9024 14.8006 12.2929 14.4101L24.2929 2.41006C24.6829 2.01956 25.3169 2.01956 25.7069 2.41006C26.0974 2.80056 26.0974 3.43356 25.7069 3.82406L13.7069 15.8241C13.5119 16.0191 13.2559 16.1171 12.9999 16.1171Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.0002 16.1174C12.7442 16.1174 12.4882 16.0199 12.2932 15.8244L8.05069 11.5819C7.66019 11.1914 7.66019 10.5584 8.05069 10.1679C8.44069 9.77737 9.07469 9.77737 9.46469 10.1679L13.7072 14.4104C14.0977 14.8009 14.0977 15.4339 13.7072 15.8244C13.5122 16.0194 13.2562 16.1174 13.0002 16.1174Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        World Class Reputed Hospital
                                    </li>
                                    <li>
                                        <svg
                                            className="cs_accent_color"
                                            width={26}
                                            height={26}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.0097 25.9988C8.06573 25.9993 3.50673 23.1663 1.32323 18.7073C-0.886265 14.1938 -0.217265 8.56483 2.98873 4.70033C6.19124 0.839828 11.3977 -0.844672 16.2517 0.408828C16.7862 0.546828 17.1077 1.09233 16.9702 1.62733C16.8322 2.16233 16.2862 2.48333 15.7517 2.34583C11.6457 1.28533 7.23874 2.71033 4.52823 5.97783C1.81624 9.24733 1.25023 14.0098 3.11974 17.8288C4.98223 21.6328 9.09073 24.1108 13.3077 23.9958C17.5242 23.8808 21.3507 21.3163 23.0562 17.4628C24.0577 15.1998 24.2697 12.6373 23.6522 10.2468C23.5142 9.71233 23.8357 9.16683 24.3707 9.02833C24.9042 8.88983 25.4507 9.21183 25.5892 9.74683C26.3182 12.5713 26.0687 15.5993 24.8857 18.2723C22.8697 22.8273 18.3462 25.8588 13.3627 25.9948C13.2447 25.9973 13.1267 25.9988 13.0097 25.9988Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12.9999 16.1171C12.7439 16.1171 12.4879 16.0196 12.2929 15.8241C11.9024 15.4336 11.9024 14.8006 12.2929 14.4101L24.2929 2.41006C24.6829 2.01956 25.3169 2.01956 25.7069 2.41006C26.0974 2.80056 26.0974 3.43356 25.7069 3.82406L13.7069 15.8241C13.5119 16.0191 13.2559 16.1171 12.9999 16.1171Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.0002 16.1174C12.7442 16.1174 12.4882 16.0199 12.2932 15.8244L8.05069 11.5819C7.66019 11.1914 7.66019 10.5584 8.05069 10.1679C8.44069 9.77737 9.07469 9.77737 9.46469 10.1679L13.7072 14.4104C14.0977 14.8009 14.0977 15.4339 13.7072 15.8244C13.5122 16.0194 13.2562 16.1174 13.0002 16.1174Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Discount on all Pathology &amp; Radiology treatment
                                    </li>
                                </ul>
                                <a
                                    href="about.html"
                                    className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                                >
                                    <span className="cs_btn_text">Info More About</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_about_shape_1">
                    <img src="assets/img/about_shape_1.svg" alt="Shape Image" />
                </div>
                <div className="cs_about_shape_2">
                    <img src="assets/img/about_shape_1.svg" alt="Shape Image" />
                </div>
                <div className="cs_about_shape_3">
                    <img src="assets/img/about_shape_1.svg" alt="Shape Image" />
                </div>
                <div className="cs_about_shape_4">
                    <img src="assets/img/about_shape_1.svg" alt="Shape Image" />
                </div>
                <div className="cs_about_shape_5">
                    <img src="assets/img/about_shape_4.svg" alt="Shape Image" />
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section> */}
            {/* End About Section */}
            {/* Start Casestudy Section */}
            {/* <section className="cs_slider cs_style_1 cs_slider_gap_30">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 cs_type_1 wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <div className="cs_section_heading_left">
                            <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                                Completed Case Studies
                            </p>
                            <h2 className="cs_section_title cs_fs_48 mb-0">
                                Transform Our Latest Success{" "}
                                <span className="cs_accent_color">Case studies</span>
                            </h2>
                        </div>
                        <div className="cs_section_heading_right mb-0">
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </div>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div
                        className="cs_slider_container"
                        data-autoplay={0}
                        data-loop={1}
                        data-speed={600}
                        data-center={0}
                        data-variable-width={0}
                        data-slides-per-view="responsive"
                        data-xs-slides={1}
                        data-sm-slides={2}
                        data-md-slides={2}
                        data-lg-slides={3}
                        data-add-slides={3}
                    >
                        <div className="cs_slider_wrapper">
                            <div className="cs_slide">
                                <div className="cs_card cs_style_1 cs_radius_10">
                                    <a
                                        href="case-studies-details.html"
                                        className="cs_card_thumbnail cs_radius_10"
                                    >
                                        <img src="assets/img/casestydy_1.jpeg" alt="Card Thumbnail" />
                                    </a>
                                    <div className="cs_card_bio">
                                        <p className="cs_card_subtitle cs_fs_14 cs_heading_color">
                                            Personal Consulting
                                        </p>
                                        <h3 className="cs_card_title cs_fs_24 cs_bold">
                                            <a href="case-studies-details.html">Supports Patients</a>
                                        </h3>
                                        <a href="case-studies-details.html" className="cs_card_btn">
                                            <span>Learn More</span>
                                            <div className="cs_card_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="cs_slide">
                                <div className="cs_card cs_style_1 cs_radius_10">
                                    <a
                                        href="case-studies-details.html"
                                        className="cs_card_thumbnail cs_radius_10"
                                    >
                                        <img src="assets/img/casestydy_2.jpeg" alt="Card Thumbnail" />
                                    </a>
                                    <div className="cs_card_bio">
                                        <p className="cs_card_subtitle cs_fs_14 cs_heading_color">
                                            Gynology Operation
                                        </p>
                                        <h3 className="cs_card_title cs_fs_24 cs_bold">
                                            <a href="case-studies-details.html">Two Baby cesar opr.</a>
                                        </h3>
                                        <a href="case-studies-details.html" className="cs_card_btn">
                                            <span>Learn More</span>
                                            <div className="cs_card_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="cs_slide">
                                <div className="cs_card cs_style_1 cs_radius_10">
                                    <a
                                        href="case-studies-details.html"
                                        className="cs_card_thumbnail cs_radius_10"
                                    >
                                        <img src="assets/img/casestydy_3.jpeg" alt="Card Thumbnail" />
                                    </a>
                                    <div className="cs_card_bio">
                                        <p className="cs_card_subtitle cs_fs_14 cs_heading_color">
                                            Heart Department
                                        </p>
                                        <h3 className="cs_card_title cs_fs_24 cs_bold">
                                            <a href="case-studies-details.html">Heart Surgery</a>
                                        </h3>
                                        <a href="case-studies-details.html" className="cs_card_btn">
                                            <span>Learn More</span>
                                            <div className="cs_card_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="cs_slide">
                                <div className="cs_card cs_style_1 cs_radius_10">
                                    <a
                                        href="case-studies-details.html"
                                        className="cs_card_thumbnail cs_radius_10"
                                    >
                                        <img src="assets/img/casestydy_4.jpeg" alt="Card Thumbnail" />
                                    </a>
                                    <div className="cs_card_bio">
                                        <p className="cs_card_subtitle cs_fs_14 cs_heading_color">
                                            Eye Care
                                        </p>
                                        <h3 className="cs_card_title cs_fs_24 cs_bold">
                                            <a href="case-studies-details.html">Eye Care Services</a>
                                        </h3>
                                        <a href="case-studies-details.html" className="cs_card_btn">
                                            <span>Learn More</span>
                                            <div className="cs_card_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="cs_pagination cs_style_1" />
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section> */}
            {/* End Casestudy Section */}
            {/* Start Video Section */}
            <section className="cs_video_section cs_style_1 cs_accent_bg position-relative">
                <div className="container">
                    <div className="cs_vider_wrapper cs_style_1">
                        <a
                            href="https://www.youtube.com/embed/rRid6GCJtgc"
                            className="cs_player_btn cs_style_2 cs_center cs_video_open wow zoomIn"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <span />
                        </a>
                        <h2 className="cs_video_title">
                            We are Provide All Medical Service <br />
                            For Your <span className="cs_accent_color">Health</span> Needs.
                        </h2>
                        <p className="cs_video_subtitle">
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad <br /> minim veniam, quis nostrud.
                        </p>
                        <div
                            className="cs_btns_group wow fadeInUp"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <a
                                href="about.html"
                                className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                            >
                                <span className="cs_btn_text">Learn More</span>
                            </a>
                            <a
                                href="contact.html"
                                className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                            >
                                <span className="cs_btn_text">Contact Now</span>
                            </a>
                        </div>
                        <div className="cs_video_shape_3">
                            <img src="assets/img/heartbeat.svg" alt="Icon" />
                        </div>
                        <div className="cs_video_shape_4">
                            <img src="assets/img/stethoscope.svg" alt="Icon" />
                        </div>
                    </div>
                    <div className="cs_video_shape_1">
                        <img src="assets/img/icons/coronavirus.svg" alt="Icon" />
                    </div>
                    <div className="cs_video_shape_2">
                        <img
                            src="assets/img/icons/health-insurance.svg"
                            alt="Icon"
                            className="cs_spinner_img"
                        />
                    </div>
                </div>
            </section>
            {/* End Video Section  */}
            {/* Start Service Section */}
            <section className="cs_service_area cs_accent_bg position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1">
                        <div className="cs_section_heading_right cs_white_color_8">
                            Far far away, behind the word bore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud countries and Consonantia, there live the
                            blind texts Vokalia and nostrud.
                        </div>
                        <div className="cs_section_heading_left">
                            <p className="cs_section_subtitle cs_white_color">Expertise</p>
                            <h2 className="cs_section_title cs_white_color">
                                We offer more than Services &amp; all Solutions Medical.
                            </h2>
                        </div>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="row cs_gap_y_40">
                        <div className="col-xl-5">
                            <div className="cs_iconbox_wrapper cs_style_2">
                                <div
                                    className="cs_iconbox cs_style_2 wow fadeInUp"
                                    data-wow-duration="0.9s"
                                    data-wow-delay="0.25s"
                                >
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/service_icon_1.svg" alt="Icon" />
                                    </div>
                                    <div className="cs_iconbox_text">
                                        <h3 className="cs_iconbox_title cs_fs_24 cs_white_color">
                                            <a href="service-details.html">Medical Service</a>
                                        </h3>
                                        <p className="cs_iconbox_subtitle cs_white_color">
                                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua.{" "}
                                        </p>
                                        <a href="service-details.html" className="cs_text_btn">
                                            <span>Learn More</span>
                                            <div className="cs_text_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="cs_iconbox cs_style_2 wow fadeInUp"
                                    data-wow-duration="0.9s"
                                    data-wow-delay="0.35"
                                >
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/service_icon_2.svg" alt="Icon" />
                                    </div>
                                    <div className="cs_iconbox_text">
                                        <h3 className="cs_iconbox_title cs_fs_24 cs_white_color">
                                            <a href="service-details.html">
                                                Radiology &amp; Pathology Test
                                            </a>
                                        </h3>
                                        <p className="cs_iconbox_subtitle cs_white_color">
                                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua.{" "}
                                        </p>
                                        <a href="service-details.html" className="cs_text_btn">
                                            <span>Learn More</span>
                                            <div className="cs_text_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="cs_iconbox cs_style_2 wow fadeInUp"
                                    data-wow-duration="0.9s"
                                    data-wow-delay="0.45s"
                                >
                                    <div className="cs_iconbox_icon cs_center">
                                        <img src="assets/img/icons/service_icon_3.svg" alt="Icon" />
                                    </div>
                                    <div className="cs_iconbox_text">
                                        <h3 className="cs_iconbox_title cs_fs_24 cs_white_color">
                                            <a href="service-details.html">Heart Beat Checkup</a>
                                        </h3>
                                        <p className="cs_iconbox_subtitle cs_white_color">
                                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua.{" "}
                                        </p>
                                        <a href="service-details.html" className="cs_text_btn">
                                            <span>Learn More</span>
                                            <div className="cs_text_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div
                                className="cs_card_thumbnail wow fadeInRight"
                                data-wow-duration="0.9s"
                                data-wow-delay="0.25s"
                            >
                                <img src="assets/img/service_img_1.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_service_shape_1 position-absolute">
                    <img src="assets/img/heartbeat_2.svg" alt="Shape" />
                </div>
                <div className="cs_service_shape_2 position-absolute">
                    <img
                        src="assets/img/stethoscope_2.svg"
                        alt="Shape"
                        className="cs_spinner_img"
                    />
                </div>
            </section>
            {/* End Service Section */}
            {/* Start CTA Section */}
            <section className="cs_cta cs_style_1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="cs_cta_in">
                                <div className="cs_cta_info">
                                    <h2 className="cs_cta_title">Meet the expert support team</h2>
                                    <p className="cs_cta_subtitle mb-0">
                                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua.
                                    </p>
                                </div>
                                <a
                                    href="contact.html"
                                    className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                                >
                                    <span className="cs_btn_text">Contact Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End CTA Section */}
            {/* Start Testimonial Section */}
            <section className="cs_testimonial cs_style_1">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 cs_text_center wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                            Testimonials
                        </p>
                        <h2 className="cs_section_title cs_fs_48 mb-0">
                            What Our Regular Patient Says
                            <br /> About DR. Matheus
                        </h2>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="row cs_gap_y_30 align-items-center">
                        <div className="col-lg-6">
                            <div className="cs_testimonial_left">
                                <div className="cs_testimonial_thumbnail">
                                    <img
                                        src="assets/img/testimonial_thumbnail_1.jpeg"
                                        alt="Testimonial Image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cs_testimonial_content">
                                <div className="cs_slider cs_style_1 cs_slider_gap_30 position-relative">
                                    <div
                                        className="cs_slider_container"
                                        data-autoplay={0}
                                        data-loop={1}
                                        data-speed={600}
                                        data-center={0}
                                        data-variable-width={0}
                                        data-slides-per-view="responsive"
                                        data-xs-slides={1}
                                        data-sm-slides={1}
                                        data-md-slides={1}
                                        data-lg-slides={1}
                                        data-add-slides={1}
                                    >
                                        <div className="cs_slider_wrapper">
                                            <div className="cs_slide">
                                                <div className="cs_testimonial cs_style_1">
                                                    <div className="cs_quote_icon">
                                                        <img
                                                            src="assets/img/icons/quote_icon.svg"
                                                            alt="Quote Icon"
                                                        />
                                                    </div>
                                                    <p className="cs_testimonial_subtitle cs_fs_32">
                                                        Pain management was effective, and I was comfortable
                                                        during and after the treatment. The staff provided
                                                        emotional support and made sure I understood every step
                                                        of my care.
                                                    </p>
                                                    <div className="cs_avatar cs_style_1">
                                                        <div className="cs_rating_container">
                                                            <div className="cs_rating" data-rating={5}>
                                                                <div className="cs_rating_percentage" />
                                                            </div>
                                                        </div>
                                                        <div className="cs_avatar_info">
                                                            <h3 className="cs_avatar_title cs_fs_24">
                                                                Alexander Cameron
                                                            </h3>
                                                            <p className="cs_avatar_subtitle cs_fs_18 mb-0">
                                                                Lead Developer
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cs_slide">
                                                <div className="cs_testimonial cs_style_1">
                                                    <div className="cs_quote_icon">
                                                        <img
                                                            src="assets/img/icons/quote_icon.svg"
                                                            alt="Quote Icon"
                                                        />
                                                    </div>
                                                    <p className="cs_testimonial_subtitle cs_fs_32">
                                                        Pain management was effective, and I was comfortable
                                                        during and after the treatment. The staff provided
                                                        emotional support and made sure I understood every step
                                                        of my care.
                                                    </p>
                                                    <div className="cs_avatar cs_style_1">
                                                        <div className="cs_rating_container">
                                                            <div className="cs_rating" data-rating={4}>
                                                                <div className="cs_rating_percentage" />
                                                            </div>
                                                        </div>
                                                        <div className="cs_avatar_info">
                                                            <h3 className="cs_avatar_title cs_fs_24">
                                                                John Smith
                                                            </h3>
                                                            <p className="cs_avatar_subtitle cs_fs_18 mb-0">
                                                                Framer Expert
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cs_height_50 cs_height_lg_40" />
                                    <div className="cs_slider_arrows cs_style_1">
                                        <div className="cs_left_arrow cs_center cs_radius_6">
                                            <i className="fa-solid fa-chevron-left" />
                                        </div>
                                        <div className="cs_right_arrow cs_center cs_radius_6">
                                            <i className="fa-solid fa-chevron-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Testimonial Section */}
            {/* Start Pricing Section */}
            {/* <section className="cs_pricing_section">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 cs_text_center wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                            Pricing plan
                        </p>
                        <h2 className="cs_section_title cs_fs_48 mb-0">
                            pricing plan to your Medical <br />
                            Health Sevices
                        </h2>
                    </div>
                    <div className="cs_height_32 cs_height_lg_30" />
                    <div className="cs_tabs cs_style_1">
                        <ul className="cs_tab_links cs_pricing_control cs_center cs_mp0">
                            <li className="active">
                                <a href="#cs_monthly">Monthly</a>
                                <span className="cs_switch" />
                            </li>
                            <li>
                                <a href="#cs_yearly">Yearly</a>
                            </li>
                        </ul>
                        <div className="cs_height_32 cs_height_lg_30" />
                        <div className="cs_tab_body">
                            <div className="cs_tab active" id="cs_monthly">
                                <div className="row cs_row_gap_30 cs_gap_y_30">
                                    <div className="col-lg-4">
                                        <div className="cs_pricing_table cs_style_1 cs_radius_15">
                                            <div className="cs_pricing_headedr">
                                                <h3 className="cs_pricing_head_title cs_fs_24 mb-0">
                                                    Premium plan
                                                </h3>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_icon cs_center cs_heading_bg cs_radius_50 cs_white_color"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cs_pricing_plan">
                                                <h3 className="cs_price_value">
                                                    <sup>$</sup>
                                                    <span className="cs_fs_64">199</span>
                                                    <sub>USD</sub>
                                                </h3>
                                            </div>
                                            <div className="cs_pricing_feature">
                                                <h3 className="cs_pricing_feature_title cs_fs_32">
                                                    What’s Included :
                                                </h3>
                                                <ul className="cs_pricing_feature_list cs_mp0">
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Medical Check up
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Pathology Test Service
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        X-ray , Endoscopy Test Include
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" /> Home Care Of 07 Days
                                                    </li>
                                                </ul>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_btn cs_white_bg cs_accent_color cs_semibold cs_hover_up cs_radius_100"
                                                >
                                                    Choose This Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cs_pricing_table cs_style_1 cs_radius_15 active">
                                            <div className="cs_pricing_headedr">
                                                <h3 className="cs_pricing_head_title cs_fs_24 mb-0">
                                                    Basic plan
                                                </h3>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_icon cs_center cs_heading_bg cs_radius_50 cs_white_color"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cs_pricing_plan">
                                                <h3 className="cs_price_value">
                                                    <sup>$</sup>
                                                    <span className="cs_fs_64">149</span>
                                                    <sub>USD</sub>
                                                </h3>
                                            </div>
                                            <div className="cs_pricing_feature">
                                                <h3 className="cs_pricing_feature_title cs_fs_32">
                                                    What’s Included :
                                                </h3>
                                                <ul className="cs_pricing_feature_list cs_mp0">
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Medical Check up
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Pathology Test Service
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        X-ray , Endoscopy Test Include
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" /> Home Care Of 07 Days
                                                    </li>
                                                </ul>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_btn cs_white_bg cs_accent_color cs_semibold cs_hover_up cs_radius_100"
                                                >
                                                    Choose This Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cs_pricing_table cs_style_1 cs_radius_15">
                                            <div className="cs_pricing_headedr">
                                                <h3 className="cs_pricing_head_title cs_fs_24 mb-0">
                                                    Popular Plan
                                                </h3>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_icon cs_center cs_heading_bg cs_radius_50 cs_white_color"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cs_pricing_plan">
                                                <h3 className="cs_price_value">
                                                    <sup>$</sup>
                                                    <span className="cs_fs_64">125</span>
                                                    <sub>USD</sub>
                                                </h3>
                                            </div>
                                            <div className="cs_pricing_feature">
                                                <h3 className="cs_pricing_feature_title cs_fs_32">
                                                    What’s Included :
                                                </h3>
                                                <ul className="cs_pricing_feature_list cs_mp0">
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Medical Check up
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Pathology Test Service
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        X-ray , Endoscopy Test Include
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" /> Home Care Of 07 Days
                                                    </li>
                                                </ul>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_btn cs_white_bg cs_accent_color cs_semibold cs_hover_up cs_radius_100"
                                                >
                                                    Choose This Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_tab" id="cs_yearly">
                                <div className="row cs_row_gap_30 cs_gap_y_30">
                                    <div className="col-lg-4">
                                        <div className="cs_pricing_table cs_style_1 cs_radius_15">
                                            <div className="cs_pricing_headedr">
                                                <h3 className="cs_pricing_head_title cs_fs_24 mb-0">
                                                    Premium plan
                                                </h3>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_icon cs_center cs_heading_bg cs_radius_50 cs_white_color"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cs_pricing_plan">
                                                <h3 className="cs_price_value">
                                                    <sup>$</sup>
                                                    <span className="cs_fs_64">599</span>
                                                    <sub>USD</sub>
                                                </h3>
                                            </div>
                                            <div className="cs_pricing_feature">
                                                <h3 className="cs_pricing_feature_title cs_fs_32">
                                                    What’s Included :
                                                </h3>
                                                <ul className="cs_pricing_feature_list cs_mp0">
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Medical Check up
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Pathology Test Service
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        X-ray , Endoscopy Test Include
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" /> Home Care Of 07 Days
                                                    </li>
                                                </ul>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_btn cs_white_bg cs_accent_color cs_semibold cs_hover_up cs_radius_100"
                                                >
                                                    Choose This Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cs_pricing_table cs_style_1 cs_radius_15 active">
                                            <div className="cs_pricing_headedr">
                                                <h3 className="cs_pricing_head_title cs_fs_24 mb-0">
                                                    Basic plan
                                                </h3>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_icon cs_center cs_heading_bg cs_radius_50 cs_white_color"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cs_pricing_plan">
                                                <h3 className="cs_price_value">
                                                    <sup>$</sup>
                                                    <span className="cs_fs_64">349</span>
                                                    <sub>USD</sub>
                                                </h3>
                                            </div>
                                            <div className="cs_pricing_feature">
                                                <h3 className="cs_pricing_feature_title cs_fs_32">
                                                    What’s Included :
                                                </h3>
                                                <ul className="cs_pricing_feature_list cs_mp0">
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Medical Check up
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Pathology Test Service
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        X-ray , Endoscopy Test Include
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" /> Home Care Of 07 Days
                                                    </li>
                                                </ul>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_btn cs_white_bg cs_accent_color cs_semibold cs_hover_up cs_radius_100"
                                                >
                                                    Choose This Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cs_pricing_table cs_style_1 cs_radius_15">
                                            <div className="cs_pricing_headedr">
                                                <h3 className="cs_pricing_head_title cs_fs_24 mb-0">
                                                    Popular Plan
                                                </h3>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_icon cs_center cs_heading_bg cs_radius_50 cs_white_color"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cs_pricing_plan">
                                                <h3 className="cs_price_value">
                                                    <sup>$</sup>
                                                    <span className="cs_fs_64">325</span>
                                                    <sub>USD</sub>
                                                </h3>
                                            </div>
                                            <div className="cs_pricing_feature">
                                                <h3 className="cs_pricing_feature_title cs_fs_32">
                                                    What’s Included :
                                                </h3>
                                                <ul className="cs_pricing_feature_list cs_mp0">
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Medical Check up
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        Pathology Test Service
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" />
                                                        X-ray , Endoscopy Test Include
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-check" /> Home Care Of 07 Days
                                                    </li>
                                                </ul>
                                                <a
                                                    href="contact.html"
                                                    className="cs_pricing_btn cs_white_bg cs_accent_color cs_semibold cs_hover_up cs_radius_100"
                                                >
                                                    Choose This Plan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section> */}
            {/* End Pricing Section */}
            {/* Start Team Section */}
            {/* <section className="cs_slider cs_style_1 cs_slider_gap_30">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                            Team Members
                        </p>
                        <h2 className="cs_section_title cs_fs_48 mb-0">
                            We are the Professional <br />
                            Specialist Doctor’s
                        </h2>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="cs_full_screen_right cs_variable_width_wrap cs_ptb_12">
                        <div
                            className="cs_slider_container"
                            data-autoplay={0}
                            data-loop={1}
                            data-speed={700}
                            data-center={0}
                            data-variable-width={1}
                            data-slides-per-view={1}
                        >
                            <div className="cs_slider_wrapper">
                                <div className="cs_slide">
                                    <div className="cs_team cs_style_1">
                                        <div className="cs_team_thumbnail cs_center">
                                            <img src="assets/img/team_1.jpeg" alt="Team Thumbnail" />
                                            <div className="cs_social_btns cs_style_1 position-absolute">
                                                <a href="#" className="cs_center cs_radius_8 cs_share">
                                                    <i className="fa-solid fa-plus" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_fs_20 cs_medium cs_accent_color">
                                                <a href="doctor-details.html">Dr. Rosie Forced Bin</a>
                                            </h3>
                                            <p className="cs_team_subtitle mb-0">
                                                Associate Eye Specialist
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_team cs_style_1">
                                        <div className="cs_team_thumbnail cs_center">
                                            <img src="assets/img/team_2.jpeg" alt="Team Thumbnail" />
                                            <div className="cs_social_btns cs_style_1 position-absolute">
                                                <a href="#" className="cs_center cs_radius_8 cs_share">
                                                    <i className="fa-solid fa-plus" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_fs_20 cs_medium cs_accent_color">
                                                <a href="doctor-details.html">Dr. Tom Handers</a>
                                            </h3>
                                            <p className="cs_team_subtitle mb-0">
                                                Head Of Surgery Department
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_team cs_style_1">
                                        <div className="cs_team_thumbnail cs_center">
                                            <img src="assets/img/team_3.jpeg" alt="Team Thumbnail" />
                                            <div className="cs_social_btns cs_style_1 position-absolute">
                                                <a href="#" className="cs_center cs_radius_8 cs_share">
                                                    <i className="fa-solid fa-plus" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_fs_20 cs_medium cs_accent_color">
                                                <a href="doctor-details.html">Dr. Rosie Forced Bin</a>
                                            </h3>
                                            <p className="cs_team_subtitle mb-0">
                                                Associate Eye Specialist
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_team cs_style_1">
                                        <div className="cs_team_thumbnail cs_center">
                                            <img src="assets/img/team_4.jpeg" alt="Team Thumbnail" />
                                            <div className="cs_social_btns cs_style_1 position-absolute">
                                                <a href="#" className="cs_center cs_radius_8 cs_share">
                                                    <i className="fa-solid fa-plus" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_fs_20 cs_medium cs_accent_color">
                                                <a href="doctor-details.html">Dr. Nicola Veeck</a>
                                            </h3>
                                            <p className="cs_team_subtitle mb-0">Medicine Specialist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_team cs_style_1">
                                        <div className="cs_team_thumbnail cs_center">
                                            <img src="assets/img/team_5.jpeg" alt="Team Thumbnail" />
                                            <div className="cs_social_btns cs_style_1 position-absolute">
                                                <a href="#" className="cs_center cs_radius_8 cs_share">
                                                    <i className="fa-solid fa-plus" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_fs_20 cs_medium cs_accent_color">
                                                <a href="doctor-details.html">Dr. Stevin K Beate</a>
                                            </h3>
                                            <p className="cs_team_subtitle mb-0">Senior Eye Specialist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_team cs_style_1">
                                        <div className="cs_team_thumbnail cs_center">
                                            <img src="assets/img/team_6.jpeg" alt="Team Thumbnail" />
                                            <div className="cs_social_btns cs_style_1 position-absolute">
                                                <a href="#" className="cs_center cs_radius_8 cs_share">
                                                    <i className="fa-solid fa-plus" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                                <a href="#" className="cs_center cs_radius_8">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_fs_20 cs_medium cs_accent_color">
                                                <a href="doctor-details.html">Dr. Won He lee Phd</a>
                                            </h3>
                                            <p className="cs_team_subtitle mb-0">Associate Dentist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* End Team Section */}
            {/* Start Work Process Section */}
            {/* <section>
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 cs_text_center wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                            Work Process
                        </p>
                        <h2 className="cs_section_title cs_fs_48 mb-0">
                            How Work Process Our <br />
                            Medical
                        </h2>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="cs_working_process_grid cs_style_1">
                        <div
                            className="cs_process_item cs_center wow fadeInDown"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_process_iten_inner cs_center">
                                <h3 className="cs_process_title cs_fs_24 mb-0">
                                    Booking Appointment
                                </h3>
                            </div>
                        </div>
                        <div
                            className="cs_process_item cs_center wow fadeInDown"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_process_iten_inner cs_center">
                                <h3 className="cs_process_title cs_fs_24 mb-0">
                                    Visit Our Facilities
                                </h3>
                            </div>
                        </div>
                        <div
                            className="cs_process_item cs_center wow fadeInDown"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_process_iten_inner cs_center">
                                <h3 className="cs_process_title cs_fs_24 mb-0">
                                    Meet with Our Doctors
                                </h3>
                            </div>
                        </div>
                        <div
                            className="cs_process_item cs_center wow fadeInDown"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_process_iten_inner cs_center">
                                <h3 className="cs_process_title cs_fs_24 mb-0">Follow Up Care</h3>
                            </div>
                        </div>
                        <div
                            className="cs_process_item cs_center wow fadeInDown"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_process_iten_inner cs_center">
                                <h3 className="cs_process_title cs_fs_24 mb-0">
                                    Insurance &amp; Bills
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section> */}
            {/* End Work Process Section */}
            {/* Start Appointment Section */}
            {/* <section className="cs_accent_bg">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="row cs_gap_y_40">
                        <div className="col-lg-6">
                            <div className="cs_section_heading cs_style_1">
                                <p className="cs_section_subtitle cs_white_color">Appointment</p>
                                <h2 className="cs_section_title cs_fs_48 cs_white_color mb-0">
                                    Get Amazing Treatment For our Specialist Doctors
                                </h2>
                            </div>
                            <div className="cs_height_50 cs_height_lg_40" />
                            <div className="row cs_gap_y_40">
                                <div className="col-12">
                                    <div className="cs_iconbox cs_style_3">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src="assets/img/icons/security_icon.svg" alt="Icon" />
                                        </div>
                                        <div className="cs_iconbox_text">
                                            <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                                                100% Safe and Trusted
                                            </h3>
                                            <p className="cs_iconbox_subtitle cs_white_color mb-0">
                                                Far far away, behind the word bore et dolore magna aliqua.
                                                Ut enim ad on minim veniam, quis nostrud
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cs_iconbox cs_style_3">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src="assets/img/icons/surgery_icon.svg" alt="Icon" />
                                        </div>
                                        <div className="cs_iconbox_text">
                                            <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                                                Specialist eye Surgery
                                            </h3>
                                            <p className="cs_iconbox_subtitle cs_white_color mb-0">
                                                Far far away, behind the word bore et dolore magna aliqua.
                                                Ut enim ad on minim veniam, quis nostrud
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cs_iconbox cs_style_3">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src="assets/img/icons/support_icon.svg" alt="Icon" />
                                        </div>
                                        <div className="cs_iconbox_text">
                                            <h3 className="cs_iconbox_title cs_fs_32 cs_white_color">
                                                24/7 Take care Staff
                                            </h3>
                                            <p className="cs_iconbox_subtitle cs_white_color mb-0">
                                                Far far away, behind the word bore et dolore magna aliqua.
                                                Ut enim ad on minim veniam, quis nostrud
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 wow fadeInRight"
                            data-wow-duration="0.9s"
                            data-wow-delay="0.25s"
                        >
                            <div className="cs_appointment_form_wrapper cs_type_1 cs_radius_10">
                                <h3 className="cs_appointment_heading">Make an Appointment</h3>
                                <form className="cs_appointment_form row cs_gap_y_30">
                                    <div className="col-md-6">
                                        <div className="cs_form_field_wrapper cs_radius_10">
                                            <input
                                                type="text"
                                                name="name"
                                                className="cs_form_field cs_fs_14"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cs_form_field_wrapper cs_radius_10">
                                            <input
                                                type="text"
                                                name="phone"
                                                className="cs_form_field cs_fs_14"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cs_form_field_wrapper cs_radius_8">
                                            <select
                                                name="department"
                                                className="cs_form_field_wrapper cs_radius_8 cs_select"
                                                data-placeholder="Select Department"
                                            >
                                                <option value="dental">Dental</option>
                                                <option value="pediatric">Pediatric</option>
                                                <option value="gynecology">Gynecology</option>
                                                <option value="cardiology">Cardiology</option>
                                                <option value="neurology">Neurology</option>
                                                <option value="psychiatry">Psychiatry</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cs_form_field_wrapper cs_radius_10">
                                            <input
                                                type="text"
                                                name="date"
                                                className="cs_form_field"
                                                id="datepicker"
                                                placeholder="DD MM  YY"
                                            />
                                            <span className="cs_input_icon position-absolute">
                                                <i className="fa-regular fa-calendar-days" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="cs_form_field_wrapper cs_radius_10">
                                            <textarea
                                                name="Message"
                                                rows={6}
                                                className="cs_form_field cs_fs_14"
                                                placeholder="Write Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button
                                            type="submit"
                                            className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                                        >
                                            <span className="cs_btn_text">Book An Appointment</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section> */}
            {/* End Appointment Section */}
            {/* Start Blog Section */}
            <section>
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div
                        className="cs_section_heading cs_style_1 cs_type_1 wow fadeInUp"
                        data-wow-duration="0.9s"
                        data-wow-delay="0.25s"
                    >
                        <div className="cs_section_heading_left">
                            <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
                                Blog &amp; news
                            </p>
                            <h2 className="cs_section_title cs_fs_48 mb-0">
                                Take a Look at The Latest <br /> Articles &amp; News
                            </h2>
                        </div>
                        <div className="cs_section_heading_right">
                            <a
                                href="blog.html"
                                className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_100"
                            >
                                <span className="cs_btn_text">See All Blogs</span>
                            </a>
                        </div>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="row cs_row_gap_30 cs_gap_y_40">
                        <div className="col-lg-4">
                            <article className="cs_post cs_style_1">
                                <a href="blog-details.html" className="cs_post_thumbnail">
                                    <img src="assets/img/post_1.jpeg" alt="Post Thumbnail" />
                                </a>
                                <div className="cs_post_info">
                                    <div className="cs_post_meta">August 04, 2024</div>
                                    <h3 className="cs_post_title cs_fs_32">
                                        <a href="blog-details.html">
                                            Medi Tips How to Physical Fitness your Health
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-details.html"
                                        className="cs_text_btn cs_fs_18 cs_heading_color"
                                    >
                                        <span>Learn More</span>
                                        <div className="cs_text_btn_icon cs_center">
                                            <span>
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4">
                            <article className="cs_post cs_style_1">
                                <a href="blog-details.html" className="cs_post_thumbnail">
                                    <img src="assets/img/post_2.jpeg" alt="Post Thumbnail" />
                                </a>
                                <div className="cs_post_info">
                                    <div className="cs_post_meta">August 15, 2024</div>
                                    <h3 className="cs_post_title cs_fs_32">
                                        <a href="blog-details.html">
                                            How to Get Best Care 7 Step for your Eyes
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-details.html"
                                        className="cs_text_btn cs_fs_18 cs_heading_color"
                                    >
                                        <span>Learn More</span>
                                        <div className="cs_text_btn_icon cs_center">
                                            <span>
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4">
                            <article className="cs_post cs_style_1">
                                <a href="blog-details.html" className="cs_post_thumbnail">
                                    <img src="assets/img/post_3.jpeg" alt="Post Thumbnail" />
                                </a>
                                <div className="cs_post_info">
                                    <div className="cs_post_meta">September 01, 2024</div>
                                    <h3 className="cs_post_title cs_fs_32">
                                        <a href="blog-details.html">
                                            Improve your heart health with genetic testing.
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-details.html"
                                        className="cs_text_btn cs_fs_18 cs_heading_color"
                                    >
                                        <span>Learn More</span>
                                        <div className="cs_text_btn_icon cs_center">
                                            <span>
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
        </>

    )
}
export default Home;
