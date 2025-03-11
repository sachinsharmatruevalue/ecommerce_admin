import React, { useState, useContext, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import HealthServices from '../../../services/healthService';
import {Link} from 'react-router-dom';
function Service() {
    const { data, error, isLoading, run } = useAsync(HealthServices.getWebService);
    // console.log("service",data);
    function truncateText(text, limit) {
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        }
        return text;
      }
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
                            Services
                        </h1>
                        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                            <li className="breadcrumb-item">
                                <a href="/home">
                                    <i className="fa-solid fa-house" />
                                    Home
                                </a>
                            </li>
                            <li className="breadcrumb-item active">Services</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* End Page Header */}
            {/* Start Service Section */}
            <section className="cs_service_area cs_type_3">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1">
                        <div className="cs_section_heading_left">
                            <p className="cs_section_subtitle cs_fs_18 cs_semibold cs_accent_color cs_heading_font">
                                Expertise
                            </p>
                            <h2 className="cs_section_title cs_accent_color mb-0">
                                We offer more than Services &amp; all Solutions Medical.
                            </h2>
                        </div>
                        <div className="cs_section_heading_right cs_accent_color text-end">
                            The other hand, we denounce with righteous indignation and dislike men
                            who are so beguiled and demoralized
                        </div>
                    </div>
                    <div className="cs_height_100 cs_height_lg_40" />
                    <div className="row cs_gap_y_30">
                        {/* Loading and Error Handling */}
                        {isLoading && <p>Loading services...</p>}
                        {error && <p>Error loading services: {error.message}</p>}

                        {/* Dynamic Service List */}
                        {data?.data?.length > 0 ? (
                            data.data.map((service, index) => (
                                <div key={index} className="col-lg-4">
                                    <div className="cs_iconbox cs_style_8 cs_white_bg">
                                        <div className="cs_iconbox_icon cs_center cs_radius_50">
                                            <img
                                                src={process.env.REACT_APP_URL + service.image}
                                                alt={service.name}
                                                style={{
                                                    height: '70px',
                                                    width: '70px',
                                                    objectFit: 'contain',
                                                }}
                                            />
                                        </div>
                                        <h3 className="cs_iconbox_title cs_fs_32 cs_semibold">
                                        <Link to={`/service-details/${btoa(service._id)}`} className="card-link">{service.name}</Link>
                                        </h3>
                                        <p className="cs_iconbox_subtitle">{truncateText(service.description,20)}</p>
                                        <Link to={`/service-details/${btoa(service._id)}`} className="card-link">
                                            <span>Get Services</span>
                                            <div className="cs_text_btn_icon cs_center">
                                                <span>
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </span>
                                              
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            !isLoading && <p>No services available</p>
                        )}
                    </div>
                </div>
            </section>

            {/* End Service Section */}
            {/* Start Appointment Section */}
            <section className="cs_accent_bg">
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
                        {/* <div className="col-lg-6">
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
                        </div> */}
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
           
        </>

    )
}
export default Service;