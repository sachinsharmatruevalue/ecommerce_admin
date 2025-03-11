import React, { useState, useEffect } from 'react';

import BannerServices from '../../../services/BannerService';

function UpdateBanner({ banner, closeModal, onSuccess }) {
  const [formValues, setFormValues] = useState({
    title: "",
    link: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState('img/placeholder-img.png');

  useEffect(() => {
    if (banner) {
      setFormValues({
        title: banner?.title || '',
        link: banner?.link || '',
        image: banner?.image || '',


      });
      if (banner.image) {
        setPreviewImage(process.env.REACT_APP_URL + banner.image);
      }
    }
  }, [banner]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFormValues({
        ...formValues,
        image: file,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (const key in formValues) {
        if (key !== 'image' || formValues[key] instanceof File) {
          formData.append(key, formValues[key]);
        }
      }

      await BannerServices.updateBanner(banner.id, formData);
      alert('Banner updated successfully');
      onSuccess();
      closeModal();
    } catch (error) {
      console.error('Failed to update Banner', error);
      alert('Failed to update Banner');
    }
  };

  return (
    <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Banner </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="container-box ">
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
                    <button className="btn btn-primary mb-3" style={{ marginTop: "10px" }}>Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBanner;
