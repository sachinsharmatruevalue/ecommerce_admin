
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HealthServices from '../../../services/healthService';

function ServiceDetail() {
  const { id } = useParams(); // Encoded package ID from URL
  const decodedId = atob(id);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [service, setService] = useState(null);



  // console.log("decodedId:", decodedId);

  // Fetch service details only when decodedId is available
  useEffect(() => {


    const fetchService = async () => {
      try {
        // console.log("iser dasfklaksjfdlksjodecodedId:", decodedId);
        const response = await HealthServices.getServiceById(decodedId);
        // console.log("response", response); // Log the entire response
        setService(response?.data); // Set pkg to the appropriate part of the response

      } catch (err) {
        setError('Error loading package details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [id]);
  return (
    <>

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

              <img
                src={process.env.REACT_APP_URL + service?.image}
                alt={service?.name}
                style={{
                  height: '70px',
                  width: '70px',
                  objectFit: 'contain',
                }}
              />
              <h2>{service?.name}</h2>
              <p>
              {service?.description}
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