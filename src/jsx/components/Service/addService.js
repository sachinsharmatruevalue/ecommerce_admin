import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HealthServices from "../../../services/healthService";
import AddImage from "../../../images/placeholder-img.svg";

function AddService() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    duration: "",
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

      await HealthServices.createService(formData);
      alert("Service Added Successfully");
      navigate("/admin/service");
    } catch (error) {
      console.error("Failed to add service details", error);
      alert("Failed to add service details");
    }
  };

  return (
    <div className="right_col" role="main">
      <div className="title-box">
        <h2>Add Service</h2>
        <div className="container-box-top-header-right">
          <Link className="round-add-btn" to="/admin/service">
            Service List
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
                      Name <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="New name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      Category <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      className="form-control"
                      value={formValues.category}
                      onChange={handleInputChange}
                      placeholder="New category"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      Price <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      value={formValues.price}
                      onChange={handleInputChange}
                      placeholder="New price"
                      required
                    />
                  </div>
                </div>

                {/* Author */}
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      duration <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="duration"
                      className="form-control"
                      value={formValues.duration}
                      onChange={handleInputChange}
                      placeholder="New duration"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>
                      Description <span className="red">*</span>
                    </label>
                    <textarea
                      className="form-control video-desc"
                      name="description"
                      value={formValues.description}
                      onChange={handleInputChange}
                      placeholder="New description"
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

export default AddService;
