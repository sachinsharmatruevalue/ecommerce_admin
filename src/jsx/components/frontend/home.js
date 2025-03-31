
import React, { useState, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import CategoryServices from '../../../services/CategoryService';
import PackageServices from '../../../services/PackageService';
import HealthServices from '../../../services/healthService';
import BlogServices from '../../../services/BlogServices';
import TestimonialServices from '../../../services/TestimonialService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StarRating from './rating';

function Home() {
    const [categories, setCategories] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const { data: categoryData, error: bannerError, isLoading: bannerLoading } = useAsync(CategoryServices.getWebCat);
    const { data: packageData, error: packageError, isLoading: packageLoading } = useAsync(PackageServices.getPopularPackage);
    const { data: serviceData, error: serviceError, isLoading: serviceLoading } = useAsync(HealthServices.getWebService);
    const { data: blogData, error: blogError, isLoading: blogLoading } = useAsync(BlogServices.getWebBlog);
    const { data: testiData, error: testiError, isLoading: testiLoading } = useAsync(TestimonialServices.getWebTestimonial);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const category = categoryData?.data || [];
    const pkg = packageData?.data || [];
    const service = serviceData?.data || [];
    const displayedBlogs = blogData?.data || [];
    const blogs = showAll ? displayedBlogs : displayedBlogs.slice(0, 3);

    const testimonial = testiData?.data || [];
    // console.log(pkg);
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?title=${encodeURIComponent(search)}`);
        }
    };


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
    const packageSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    function truncateText(text, limit) {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    }

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
                            <div className="search-bar">
                                <form className="search-bar-form" onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search Your Package"
                                    />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
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
                </div> */}
                <a
                    href="/about-us"
                    className="cs_scroll_more_btn cs_fs_20 cs_white_color cs_medium position-absolute"
                >
                    <span className="cs_scroll_more_btn_in">
                        <i className="fa-solid fa-arrow-left-long" /> Scroll for more
                    </span>
                </a>
            </section>

            {/* Start Video Section */}
            <div className="our-service-section">
                <div className="container">
                    <h3 className='m-4'>Health Checkup Packages</h3>
                    <div className="our-service-slider trip-outer">
                        {category.length > 0 ? (
                            <Slider {...sliderSettings}>
                                {category.map((cat) => (
                                    <div className="our-service-slider-inner" key={cat._id}>
                                        <div className="service-icon-box">
                                            <Link to={`/cat-package/${btoa(cat._id)}`}>
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
                                        <Link to={`/cat-package/${btoa(cat._id)}`}>
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
            {/* <div className="package-service-section">
                <div className="container">
                    <h3 className="m-4">Top Health Packages</h3>
                    <div className="row cs_gap_y_40"  >

                        <div className="PackagesCarousel_packageCard__0zpAO">
                            {pkg && pkg.length > 0 ? (
                                <Slider {...packageSettings}>
                                    {pkg.map((pack) => (

                                        <div className="PackagesCarousel_packageCardTop__2KcRE col-xl-4" key={pack._id} >

                                            <Link to={`/pack-package/${pack._id}`}>
                                                <h4 className="pack-heading">{pack.title}</h4>
                                            </Link>
                                            <p>Reports in&nbsp;<strong style={{ color: 'black' }}>{pack.reportTime}</strong></p>
                                            <div class="package-plan-border" style={{ marginBlock: "10px" }}></div>
                                            <div className='PackagesCarousel_details_tags__nzRsl'>
                                                <div className='PackagesCarousel_details_tags_title__9WjVn'>  {pack?.service?.map(ser => ser.name).join(" ")}</div>
                                            </div>
                                        </div>

                                    ))}
                                </Slider>
                            ) : (
                                <p>No package available</p>
                            )}
                        </div>

                    </div>
                </div>
            </div> */}


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
                    <div className="row cs_gap_y_40" style={{height:"500px"}}>
                        {pkg && pkg.length > 0 ? (
                            <Slider {...packageSettings}>
                                {pkg.map((pack, index) => (
                                    <div className="col-xl-4" key={index} style={{ marginBottom: "200px" }}>
                                        <div className="cs_iconbox_wrapper cs_style_2">
                                            <div
                                                className="cs_iconbox cs_style_2 wow fadeInUp"
                                                data-wow-duration="0.9s"
                                                data-wow-delay="0.25s"
                                            >
                                                <div className="cs_iconbox_text" style={{color:"white"}}>
                                                    <Link to={`/package-details/${btoa(pack._id)}`}>
                                                        <h4 className="pack-heading" style={{ color: "white" }}>{pack.title}</h4>
                                                    </Link>
                                                    <p>
                                                        Reports in&nbsp;
                                                        <strong style={{ color: "white" }}>{pack.reportTime}</strong>
                                                    </p>
                                                    <div className="package-plan-border" style={{ marginBlock: "10px" }}></div>
                                                    <div className="PackagesCarousel_details_tags__nzRsl">
                                                        <div className="PackagesCarousel_details_tags_title__9WjVn" style={{ color: "white" }}>
                                                            {pack?.service?.map((ser) => ser.name).join(" ")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No package available</p>
                        )}
                    </div>
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
                                    href="/contact-us"
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

                        </h2>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="row cs_gap_y_30 align-items-center">
                        <div className="col-lg-6">
                            <div className="cs_testimonial_left">
                                <div className="cs_testimonial_thumbnail">
                                    <img
                                        src="assets/img/testmonial.jpg"
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
                                            {testimonial && testimonial.length > 0 ? (
                                                testimonial.map((testi, index) => (
                                                    <div className="cs_slide" key={index}>
                                                        <div className="cs_testimonial cs_style_1">
                                                            <div className="cs_quote_icon">
                                                                <img
                                                                    src="assets/img/icons/quote_icon.svg"
                                                                    alt="Quote Icon"
                                                                />
                                                            </div>
                                                            <p className="cs_testimonial_subtitle cs_fs_32">
                                                                {testi.message}
                                                            </p>
                                                            <div className="cs_avatar cs_style_1">
                                                                <div className="cs_rating_container">
                                                                    {/* <div className="cs_rating" data-rating={testi.rating}> */}
                                                                    <StarRating rating={testi?.rating} />
                                                                    <div className="cs_rating_percentage" />
                                                                    {/* </div> */}
                                                                </div>
                                                                <div className="cs_avatar_info">
                                                                    <h3 className="cs_avatar_title cs_fs_24">
                                                                        {testi.name}
                                                                    </h3>
                                                                    <p className="cs_avatar_subtitle cs_fs_18 mb-0">
                                                                        {testi.designation}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No testimonials available</p>
                                            )}
                                        </div>

                                    </div>
                                    <div className="cs_height_50 cs_height_lg_40" />
                                    {/* <div className="cs_slider_arrows cs_style_1">
                                        <div className="cs_left_arrow cs_center cs_radius_6">
                                            <i className="fa-solid fa-chevron-left" />
                                        </div>
                                        <div className="cs_right_arrow cs_center cs_radius_6">
                                            <i className="fa-solid fa-chevron-right" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* end section */}
            <section>
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1">
                        <div className="cs_section_heading_left">
                            <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">Blog &amp; news</p>
                            <h2 className="cs_section_title cs_fs_48 mb-0">Take a Look at The Latest <br /> Articles &amp; News</h2>
                        </div>
                        <div className="cs_section_heading_right">
                            <a href="/blogs" className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg cs_radius_100">
                                <span className="cs_btn_text">See All Blogs</span>
                            </a>
                        </div>
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />
                    <div className="row cs_row_gap_30 cs_gap_y_40">
                        {blogs.map((blog, index) => (
                            <div key={index} className="col-lg-4">
                                <article className="cs_post cs_style_1">
                                    <a href={`/blog-details/${blog.slug.replace(/\s+/g, "-")}`}
                                        className="cs_post_thumbnail">
                                        <img src={process.env.REACT_APP_URL + blog.image} alt={blog.title} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                                    </a>
                                    <div className="cs_post_info">
                                        <div className="cs_post_meta">{new Date(blog.createdAt).toDateString()}</div>
                                        <h3 className="cs_post_title cs_fs_32">
                                            <a href={`/blog-details/${blog.slug.replace(/\s+/g, "-")}`}
                                            >{blog.title}</a>
                                        </h3>
                                        <a href={`/blog-details/${blog.slug.replace(/\s+/g, "-")}`}
                                            className="cs_text_btn cs_fs_18 cs_heading_color">
                                            <span>Learn More</span>
                                            <div className="cs_text_btn_icon cs_center">
                                                <span><i className="fa-solid fa-arrow-right-long" /></span>
                                                <span><i className="fa-solid fa-arrow-right-long" /></span>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                    <div className="cs_height_50 cs_height_lg_40" />

                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
        </>

    )
}
export default Home;
