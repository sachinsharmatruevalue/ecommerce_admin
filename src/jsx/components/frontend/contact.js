import React, { useState, useContext, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import ContactServices from '../../../services/ContactServices';

function Contact() {
  const { data, error, isLoading, run } = useAsync(ContactServices.getContactDetail);
  console.log(data)

  return (
    <>
      {/* Start Page Header */}
      <section
        className="cs_page_heading cs_center cs_bg_filed"
        data-src="assets/img/page_heading_bg.jpg"
      >
        <div className="container">
          <div className="cs_page_heading_in">
            <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">
              Contact Us
            </h1>
            <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
              <li className="breadcrumb-item">
                <a href="/home">
                  <i className="fa-solid fa-house" />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End Page Header */}
      {/* Start Contact Section */}
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40">
          {/* <div className="col-lg-6">
        <div
          className="contact_form_wrapper cs_heading_font cs_bg_filed cs_hide_before_after"
          data-src="assets/img/contact_form_bg_1.png"
        >
          <div className="cs_section_heading cs_style_1">
            <h2 className="cs_section_title cs_fs_40 mb-0">Contact With Us</h2>
            <div className="cs_height_20 cs_height_lg_20" />
            <div>Send us a message and we' ll respond as soon as possible</div>
          </div>
          <div className="cs_height_45 cs_height_lg_40" />
          <form className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-sm-6">
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="text"
                  name="fname"
                  className="cs_form_field cs_type_1"
                  placeholder="First Name*"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="text"
                  name="lname"
                  className="cs_form_field cs_type_1"
                  placeholder="LastName*"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="email"
                  name="email"
                  className="cs_form_field cs_type_1"
                  placeholder="Email Address*"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="text"
                  name="phone"
                  className="cs_form_field cs_type_1"
                  placeholder="Phone Number*"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <input
                  type="text"
                  name="subject"
                  className="cs_form_field cs_type_1"
                  placeholder="Subject*"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="cs_form_field_wrapper cs_type_1 cs_radius_5">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message here"
                  className="cs_form_field cs_type_1"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <button
                type="submit"
                className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg  cs_radius_5 w-100"
              >
                <span className="cs_btn_text">Send Message</span>
                <span className="cs_btn_text">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div> */}
          <div className="col-lg-12">
            <div className="row cs_gap_y_24">
              <div className="col-lg-12">
                <div className="contact_form_wrapper cs_heading_font cs_type_1 cs_radius_5 position-relative">
                  <div className="cs_section_heading cs_style_1">
                    <h2 className="cs_section_title cs_fs_40 mb-0">
                      Need Any Help?
                    </h2>
                    <div className="cs_height_20 cs_height_lg_20" />
                    <div>
                      Call us or message and we' ll respond as soon as possible
                    </div>
                  </div>
                  <div className="cs_height_45 cs_height_lg_40" />
                  <div className="row cs_gap_y_30">
                    <div className="col-md-4">
                      <div className="cs_iconbox cs_style_11">
                        <div className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_bg cs_white_color">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <a href={`tel:+91${data?.data?.phone}`} className="cs_iconbox_text">
                          +91 {data?.data?.phone}
                        </a>
                        <a href={`tel:+91${data?.data?.whatsApp}`} className="cs_iconbox_text">
                          +91 {data?.data?.whatsApp}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cs_iconbox cs_style_11">
                        <div className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_bg cs_white_color">
                          <i className="fa-regular fa-envelope" />
                        </div>
                        <a href={`mailto:${data?.data?.email}`} className="cs_iconbox_text">
                          {data?.data?.email}
                        </a>

                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cs_iconbox cs_style_11">
                        <div className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_bg cs_white_color">
                          <i className="fa-solid fa-location-dot" />
                        </div>
                        <p className="cs_iconbox_text mb-0">
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="cs_location_map cs_radius_5">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9927.397014423128!2d-0.11606041997657368!3d51.53432469680956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6eadb3896d%3A0x5aa8ffed63aea5ac!2sIslington%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1726660581556!5m2!1sen!2sbd" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
      {/* Start Contact Section */}
      {/* Start Footer Section */}
    </>


  )
}
export default Contact;