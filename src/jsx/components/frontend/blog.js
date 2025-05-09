import React, { useState, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import BlogServices from '../../../services/BlogServices';

function Blogs() {
    const { data, error, isLoading, run } = useAsync(BlogServices.getWebBlog);
    const [showAll, setShowAll] = useState(false);
    const blogs = data?.data || [];
    const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

    return (
        <>
            <section className="cs_page_heading cs_center cs_bg_filed" data-src="assets/img/page_heading_bg.jpg"  style={{ backgroundColor: "#123456" }}>
                <div className="container">
                    <div className="cs_page_heading_in">
                        <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">Blogs</h1>
                        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                            <li className="breadcrumb-item">
                                <a href="/home">
                                    <i className="fa-solid fa-house" /> Home/
                                </a>
                            </li>
                            <li >Blogs</li>
                        </ol>
                    </div>
                </div>
            </section>
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
                        {displayedBlogs.map((blog, index) => (
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
                    <div className="text-center">
                        <button onClick={() => setShowAll(!showAll)} className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg cs_radius_100">
                            {showAll ? 'Show Less' : 'Load More'}
                        </button>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
        </>
    );
}

export default Blogs;