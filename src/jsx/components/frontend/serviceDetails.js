import React, { useState, useContext, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import HealthServices from '../../../services/healthService';
function ServiceDetail() {
    const { data, error, isLoading, run } = useAsync(HealthServices.getWebService);
    // console.log("service",data);
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
          Service Details
        </h1>
        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
          <li className="breadcrumb-item">
            <a href="/home">
              <i className="fa-solid fa-house" />
              Home
            </a>
          </li>
          <li className="breadcrumb-item active">Service Details</li>
        </ol>
      </div>
    </div>
  </section>
  {/* End Page Header */}
  {/* Start Service Details Section */}
  <div className="cs_height_120 cs_height_lg_80" />
  <div className="container">
    <div className="row cs_gap_y_40">
      <div className="col-lg-12">
        <div className="cs_service_details">
          <img src="assets/img/service_details_1.jpeg" alt="Image" />
          <h2>Eye care Services</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero
          </p>
          <p>
            We prioritize products that are made from recycled or renewable
            materials, are energy-efficient, and have minimal environmental
            footprints. Our selection process involves assessing the entire
            lifecycle of each product to ensure it aligns with our commitment to
            sustainability.
          </p>
          <ul className="cs_list cs_style_4 cs_fs_18 cs_body_font cs_heading_color cs_semibold cs_mp0">
            <li>
              <i className="fa-solid fa-check" />
              Minim veniam, quis nostrud ullamco laboris
            </li>
            <li>
              <i className="fa-solid fa-check" />
              Lorem ipsum dolor sit amet, consectetur adipisic ipsum
            </li>
            <li>
              <i className="fa-solid fa-check" />
              Duis aute irure dolor in reprehenderit in voluptate
            </li>
          </ul>
          <h3>Remarketing services</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
          </p>
          <blockquote>
            "Working with Medixal was an absolute delight! Their team's
            creativity knows no bounds. They not only understood our vision but
            elevated it to new heights. From branding to Psychology campaigns.”
            <small>Rellena Haque / heart patient</small>
            <img src="assets/img/icons/quote_icon_8.svg" alt="Icon" />
          </blockquote>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through of the word in classical literature, discovered the
            undoubtable source.
          </p>
        </div>
        {/* <div>
          <div className="cs_height_80 cs_height_lg_60" />
          <h3 className="cs_fs_42">Contact with us</h3>
          <form
            className="cs_reply_form cs_type_1 row cs_gap_y_24 cs_heading_font"
            id="comment"
          >
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-12">
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message"
                className="cs_form_field"
                defaultValue={""}
              />
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                className="cs_btn cs_style_1 cs_accent_bg cs_fs_18 cs_semibold cs_radius_100"
              >
                <span className="cs_btn_text">Send Message</span>
              </button>
            </div>
          </form>
        </div> */}
      </div>
      
    </div>
  </div>
  <div className="cs_height_120 cs_height_lg_80" />
  {/* End Service Details Section */}
</>

    
)
}
export default ServiceDetail;   