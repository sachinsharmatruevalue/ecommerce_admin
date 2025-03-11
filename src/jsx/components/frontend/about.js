import React, { useState, useContext, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import ContactServices from '../../../services/ContactServices';

function About() {
  const { data, error, isLoading, run } = useAsync(ContactServices.getAboutus);
  // console.log(data)

  return (
    
      <>
        <section
          className="cs_page_heading cs_center cs_bg_filed"
          data-src="assets/img/page_heading_bg.jpg"
        >
          <div className="container">
            <div className="cs_page_heading_in">
              <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">
                About Us
              </h1>
              <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                <li className="breadcrumb-item">
                  <a href="/home">
                    <i className="fa-solid fa-house" />
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">About us</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Page Header */}
        {/* Start About Section */}
        <section className="cs_about cs_style_1 cs_hide_before_after position-relative">
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
              <div className="col-lg-6">
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
                  <div
                  className="refund-policy-content"
                  style={{ marginBottom: 15, textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: data?.data?.English || '' }}
                ></div>
                 
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
          <div className="cs_about_shape_13 cs_radius_50" />
          <div className="cs_height_120 cs_height_lg_80" />
        </section>
        {/* End About Section */}
        
      </>

    

  )
}
export default About;