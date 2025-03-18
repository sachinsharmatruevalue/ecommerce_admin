import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlogServices from "../../../services/BlogServices";
import AddImage from "../../../images/placeholder-img.svg";

function AddBlog() {
  const navigate = useNavigate(); 
  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    author: "",
    content: "",
    image: "",
    blogStatus: "",
    category: "",
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

      await BlogServices.createBlog(formData);
      alert("Blog Added Successfully");
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Failed to add blog details", error);
      alert("Failed to add blog details");
    }
  };

  return (
    <div className="right_col" role="main">
      <div className="title-box">
        <h2>Add Blog</h2>
        <div className="container-box-top-header-right">
          <Link className="round-add-btn" to="/blogs">
            Blog List
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
                      placeholder="New blog"
                      required
                    />
                  </div>
                </div>

                {/* Author */}
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      Author <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="author"
                      className="form-control"
                      value={formValues.author}
                      onChange={handleInputChange}
                      placeholder="New author"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="input-field">
                    <label>
                      Slug <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      className="form-control"
                      value={formValues.slug}
                      onChange={handleInputChange}
                      placeholder="New slug"
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
                      name="content"
                      value={formValues.content}
                      onChange={handleInputChange}
                      placeholder="New description"
                      required
                    />
                  </div>
                </div>

                {/* Blog Status */}
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>
                      Blog Status <span className="red">*</span>
                    </label>
                    <select
                      name="blogStatus"
                      className="form-control"
                      value={formValues.blogStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                      <option value="Archived">Archived</option>
                    </select>
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

export default AddBlog;
