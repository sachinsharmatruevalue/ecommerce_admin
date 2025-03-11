import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerServices from "../../../services/BannerService";
import AddImage from "../../../images/placeholder-img.svg";

function AddBanner() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: "",
    link: "",
    image: "",
  });

  const [previewImage, setPreviewImage] = useState(AddImage);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);

      setFormValues((prevValues) => ({
        ...prevValues,
        image: file,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(formValues).forEach((key) => {
        formData.append(key, formValues[key]);
      });

      await BannerServices.createBanner(formData);
      alert("Banner Added Successfully");
      navigate("/banner");
    } catch (error) {
      console.error("Failed to add banner details", error);
      alert("Failed to add banner details");
    }
  };

  return (
    <div className="right_col" role="main">
      <div className="title-box">
        <h2>Add Banner</h2>
        <div className="container-box-top-header-right">
          <Link className="round-add-btn" to="/banner">
            Banner List
          </Link>
        </div>
      </div>
      <div className="container-box px-5">
        <div className="container-box-inner">
          <div className="page-details">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Title */}
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      Title <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={formValues.title}
                      onChange={handleInputChange}
                      placeholder="New title"
                      required
                    />
                  </div>
                </div>

                {/* Author */}
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      Link URL <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="link"
                      className="form-control"
                      value={formValues.link}
                      onChange={handleInputChange}
                      placeholder="New link"
                      required
                    />
                  </div>
                </div>

              

               

                {/* File Upload */}
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>
                      Upload <span className="red">*</span>
                    </label>
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      accept="image/png, image/jpeg, image/jpg, image/webp"
                      onChange={handleFileChange}
                      required
                    />
                    <p>
                      <span>
                        Drop an image or paste URL (up to resolution 1,500 x
                        1,500 px),
                      </span>{" "}
                      Supported formats: png, jpeg, jpg, webp
                    </p>
                    <div className="file-preview text-center">
                      <img id="uploadFile" src={previewImage} alt="Preview" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary mb-3"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBanner;
