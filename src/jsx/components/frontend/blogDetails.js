import React, { useState, useContext, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import BlogServices from '../../../services/BlogServices';


function BlogDetail() {
    const { data, error, isLoading, run } = useAsync(BlogServices.getBlog);

    return (
        <>
  {/* End Header Section */}
  {/* Start Page Header */}
  <section
    className="cs_page_heading cs_center cs_bg_filed"
    data-src="assets/img/page_heading_bg.jpg"
  >
    <div className="container">
      <div className="cs_page_heading_in">
        <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">
          Blog Details
        </h1>
        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
          <li className="breadcrumb-item">
            <a href="index.html">
              <i className="fa-solid fa-house" />
              Home
            </a>
          </li>
          <li className="breadcrumb-item active">Blog Details</li>
        </ol>
      </div>
    </div>
  </section>
  {/* End Page Header */}
  {/* Start Blog Details Section */}
  <div className="cs_height_120 cs_height_lg_80" />
  <div className="container">
    <div className="row cs_gap_y_40">
      <div className="col-lg-8">
        <div className="cs_post_details cs_style_1 cs_heading_font">
          <div className="cs_post_thumbnail cs_radius_10">
            <img src="assets/img/post_details_1.jpeg" alt="Post Image" />
          </div>
          <ul className="cs_post_meta cs_fs_14 cs_accent_color cs_mp0">
            <li>
              <i className="fa-solid fa-calendar" />
              26 June 2023
            </li>
            <li>
              <i className="fa-solid fa-bookmark" />
              Technology
            </li>
            <li>
              <i className="fa-solid fa-message" />2 Comments
            </li>
          </ul>
          <hr />
          <div className="cs_height_24 cs_height_lg_20" />
          <p>
            Vast numbers of employees now work remotely, and it’s too late to
            develop a set of remote-work policies if you didn’t already have
            one. But there are ways to make the remote-work experience
            productive and engaging for employees
          </p>
          <p>
            Use both direct conversations and indirect observations to get
            visibility into employees’ challenges andconcerns. Use every
            opportunity to make clear to employees that you support and care
            them. To facilitate regular conversations between managers and
            employees, provide managers with guidance on how best to broach
            sensitive subjects arising from the COVID-19 pandemic, including
            alternative work models, job security and prospects, impact on
            staffing
          </p>
          <div className="row">
            <div className="col-lg-6 cs_radius_10">
              <img src="assets/img/post_details_2.jpeg" alt="Image" />
            </div>
            <div className="col-lg-6 cs_radius_10">
              <img src="assets/img/post_details_3.jpeg" alt="Image" />
            </div>
          </div>
          <p>
            The third Monday of January is supposed to be the most depressing
            day of the year. Whether you believe that or not, the long nights,
            cold weather, and trying to keep to new year resolutions are all
            probably getting to you a little by now. To make matters worse many
            will still be recovering from their Christmas spending. So how can
            you make today
          </p>
          <blockquote>
            <img src="assets/img/icons/quote_icon_7.svg" alt="Icon" /> We
            appreciate the consistent high-quality service provided by their
            team goes above and beyond concerns promptly
          </blockquote>
          <p>
            Vast numbers of employees now work remotely, and it’s too late to
            develop a set of remote-work policies if you didn’t already have
            one. But there are ways to make the remote-work experience
            productive and engaging for employees
          </p>
          <p>
            Use both direct conversations and indirect observations to get
            visibility into employees’ challenges and concerns. Use every
            opportunity to make clear to employees that you support and care
            them. To facilitate regular conversations between managers and
            employees, provide managers with guidance on how best to broach
            sensitive subjects arising from the COVID-19 pandemic
          </p>
        </div>
        <div className="cs_tag_list cs_type_1 cs_fs_14 cs_heading_font cs_accent_color">
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Medical
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Rehab
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Psychology
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Eyecare
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Dental
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Phytotherapy
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Hospitality
          </a>
          <a href="#" className="cs_tag_link cs_gray_bg cs_radius_6">
            Senior Care
          </a>
        </div>
        <div className="cs_height_30 cs_height_lg_30" />
        <div className="cs_btn_group cs_style_1 cs_semibold cs_heading_color">
          <a href="#">
            <i className="fa-solid fa-arrow-left-long" />
            Prev Post
          </a>
          <a href="#">
            Next Post
            <i className="fa-solid fa-arrow-right-long" />
          </a>
        </div>
        <div className="cs_height_80 cs_height_lg_60" />
        <h2 className="cs_reply_title cs_fs_24 cs_semibold cs_accent_color">
          2 Comments
        </h2>
        <ul className="cs_comment_list cs_heading_font cs_mp0">
          <li className="cs_comment_body">
            <div className="cs_comment_thumbnail cs_radius_5">
              <img src="assets/img/avatar_4.jpeg" alt="Image" />
            </div>
            <div className="cs_comment_info">
              <p>
                Legal expertise and is client focused we enhance entrepreneurial
                environment flexible supportive, allowing our lawyers introduced
              </p>
              <h3>Alexander Cameron</h3>
              <div className="cs_comment_meta_wrapper">
                <div className="cs_comment_date">Juky 28, 2024</div>
                <a
                  href="#"
                  className="cs_reply_btn cs_semibold cs_accent_color"
                >
                  <i className="fa-solid fa-reply" />
                  Reply
                </a>
              </div>
            </div>
          </li>
          <li className="cs_comment_body">
            <div className="cs_comment_thumbnail cs_radius_5">
              <img src="assets/img/avatar_5.jpeg" alt="Image" />
            </div>
            <div className="cs_comment_info">
              <p>
                Legal expertise and is client focused we enhance entrepreneurial
                environment flexible supportive, allowing our lawyers introduced
              </p>
              <h3>Brooklyn Simmons</h3>
              <div className="cs_comment_meta_wrapper">
                <div className="cs_comment_date">Jan 28, 2024</div>
                <a
                  href="#"
                  className="cs_reply_btn cs_semibold cs_accent_color"
                >
                  <i className="fa-solid fa-reply" />
                  Reply
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="cs_height_50 cs_height_lg_40" />
        <h2 className="cs_reply_heading cs_fs_24 cs_semibold cs_accent_color">
          Leave a Comment
        </h2>
        <form
          className="cs_reply_form row cs_gap_y_24 cs_heading_font"
          id="comment"
        >
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="cs_form_field"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="cs_form_field"
            />
          </div>
          <div className="col-md-12">
            <textarea
              name="message"
              rows={6}
              placeholder="Write your message"
              className="cs_form_field"
              defaultValue={""}
            />
          </div>
          <div className="col-md-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label m-0">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="cs_btn cs_style_1 cs_accent_bg cs_fs_18 cs_semibold cs_radius_6"
            >
              <span className="cs_btn_text">Send Message</span>
            </button>
          </div>
        </form>
      </div>
      <aside className="col-lg-4">
        <div className="cs_sidebar cs_style_1">
          <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
            <h3 className="cs_sidebar_title cs_fs_20 cs_semibold cs_accent_color">
              Search
            </h3>
            <form action="#" className="cs_search cs_radius_6">
              <span className="cs_search_icon cs_accent_color">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input type="text" placeholder="Search...." />
            </form>
          </div>
          <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
            <h3 className="cs_sidebar_title cs_fs_20 cs_semibold cs_accent_color">
              Categories
            </h3>
            <ul className="cs_categories cs_accent_color cs_mp0">
              <li>
                <a href="#">Medical</a>
                <a href="#">(18)</a>
              </li>
              <li>
                <a href="#">Eye Care</a>
                <a href="#">(5)</a>
              </li>
              <li>
                <a href="#">Dental</a>
                <a href="#">(2)</a>
              </li>
              <li>
                <a href="#">Consulting</a>
                <a href="#">(11)</a>
              </li>
              <li>
                <a href="#">Council Rehab</a>
                <a href="#">(4)</a>
              </li>
              <li>
                <a href="#">Hospitality</a>
                <a href="#">(8)</a>
              </li>
            </ul>
          </div>
          <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
            <h3 className="cs_sidebar_title cs_fs_20 cs_semibold cs_accent_color">
              Recent Posts
            </h3>
            <div className="cs_post cs_style_3">
              <a
                href="blog-details-right-sidebar.html"
                className="cs_post_thumbnail cs_radius_10"
              >
                <img
                  src="assets/img/latest_post_1.jpeg"
                  alt="Image"
                  className="cs_zoom_in"
                />
              </a>
              <div className="cs_post_info">
                <h3 className="cs_post_title cs_fs_18 cs_semibold cs_heading_color">
                  <a href="blog-details.html">
                    Planning your online business goals with a specialists.
                  </a>
                </h3>
                <div className="cs_post_meta cs_fs_14 cs_accent_color">
                  26 Sep 2024
                </div>
              </div>
            </div>
            <div className="cs_post cs_style_3">
              <a
                href="blog-details-right-sidebar.html"
                className="cs_post_thumbnail cs_radius_10"
              >
                <img
                  src="assets/img/latest_post_2.jpeg"
                  alt="Image"
                  className="cs_zoom_in"
                />
              </a>
              <div className="cs_post_info">
                <h3 className="cs_post_title cs_fs_18 cs_semibold cs_heading_color">
                  <a href="blog-details.html">
                    Boost your startup business with our digital agency.
                  </a>
                </h3>
                <div className="cs_post_meta cs_fs_14 cs_accent_color">
                  26 Aug 2024
                </div>
              </div>
            </div>
            <div className="cs_post cs_style_3">
              <a
                href="blog-details-right-sidebar.html"
                className="cs_post_thumbnail cs_radius_10"
              >
                <img src="assets/img/latest_post_3.jpeg" alt="Image" />
              </a>
              <div className="cs_post_info">
                <h3 className="cs_post_title cs_fs_18 cs_semibold cs_heading_color">
                  <a href="blog-details.html">
                    The importance of a strong digital for strat.
                  </a>
                </h3>
                <div className="cs_post_meta cs_fs_14 cs_accent_color">
                  15 Aug 2024
                </div>
              </div>
            </div>
          </div>
          <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
            <div className="cs_sidebar_tags">
              <h3 className="cs_sidebar_title cs_fs_20 cs_semibold cs_accent_color">
                Tags
              </h3>
              <div className="cs_tag_list cs_fs_14 cs_heading_font cs_accent_color">
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Medical
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Rehab
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Psychology
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Eyecare
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Dental
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Phytotherapy
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Hospitality
                </a>
                <a href="#" className="cs_tag_link cs_white_bg cs_radius_6">
                  Senior Care
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
  <div className="cs_height_120 cs_height_lg_80" />
  {/* End Blog Details Section */}
  {/* Start Footer Section */}
</>


)
}
export default BlogDetail