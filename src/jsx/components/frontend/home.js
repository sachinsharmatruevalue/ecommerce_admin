
import React, { useState, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import CategoryServices from '../../../services/CategoryService';
import PackageServices from '../../../services/PackageService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Home() {
    const [categories, setCategories] = useState([]);
    const { data: categoryData, error: bannerError, isLoading: bannerLoading } = useAsync(CategoryServices.getWebCat);
    const { data: packageData, error: packageError, isLoading: packageLoading } = useAsync(PackageServices.getPopularPackage);

    const category = categoryData?.data || [];
    const pkg = packageData?.data || [];
    console.log(pkg);
   
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    left: "-35px",
                    zIndex: 10,
                    fontSize: "24px",
                    color: "#333",
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                <FaChevronLeft />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    right: "-35px",
                    zIndex: 10,
                    fontSize: "24px",
                    color: "#333",
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                <FaChevronRight />
            </div>
        );
    };
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
                    href="/about"
                    className="cs_scroll_more_btn cs_fs_20 cs_white_color cs_medium position-absolute"
                >
                    <span className="cs_scroll_more_btn_in">
                        <i className="fa-solid fa-arrow-left-long" /> Scroll for more
                    </span>
                </a>
            </section>

            {/* Start Video Section */}
            {/* <section className="cs_video_section cs_style_1 cs_accent_bg position-relative">
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
            </section> */}
            <div className="our-service-section">
                <div className="container">
                    <h3 className='m-4'>Health Checkup Packages</h3>
                    <div className="our-service-slider trip-outer">
                        {category.length > 0 ? (
                            <Slider {...sliderSettings}>
                                {category.map((cat) => (
                                    <div className="our-service-slider-inner" key={cat._id}>
                                        <div className="service-icon-box">
                                            <Link to={`/destination-package/${cat._id}`}>
                                                {cat?.image && (
                                                    <img
                                                        src={`${process.env.REACT_APP_URL || ""}${cat.image}`}
                                                        alt={cat?.title || "cat image"}
                                                        style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            objectFit: "contain",
                                                        }}
                                                    />
                                                )}
                                            </Link>
                                        </div>
                                        <Link to={`/cat-package/${cat._id}`}>
                                            <h4 className="cat-heading">{cat.title}</h4>
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No category available</p>
                        )}
                    </div>
                </div>
            </div>
            {/* End Video Section  */}
            <div className="PackagesCarousel_packageCardTop__2KcRE">
                <div className="container">
                    <h3 className="m-4">Top Health Packages</h3>
                    <div className="our-service-slider trip-outer">
                        {pkg.length > 0 ? (
                            pkg.map((pack) => (
                                <div className="our-service-slider-inner" key={pack._id}>
                                    <div className="service-icon-box">
                                        <Link to={`/pack-package/${pack._id}`}>
                                            {pack?.image && (
                                                <img
                                                    src={`${process.env.REACT_APP_URL || ""}${pack.image}`}
                                                    alt={pack?.title || "pack image"}
                                                    style={{
                                                        height: "50px",
                                                        width: "50px",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    </div>
                                    <Link to={`/pack-package/${pack._id}`}>
                                        <h4 className="pack-heading">{pack.title}</h4>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No package available</p>
                        )}
                    </div>
                </div>
            </div>

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
