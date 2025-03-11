import React, { useState, useEffect } from 'react';
import HealthServices from "../../../services/healthService";

function UpdateService({ service, closeModal, onSuccess }) {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    duration: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState('img/placeholder-img.png');

  useEffect(() => {
    if (service) {
      setFormValues({
        name: service?.name || '',
        description: service?.description || '',
        image: service?.image || '',
        price: service?.price || '',
        category: service?.category || '',
        duration: service?.duration || '',

      });
      if (service.image) {
        setPreviewImage(process.env.REACT_APP_URL + service.image);
      }
    }
  }, [service]);

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

      await HealthServices.updateService(service.id, formData);
      alert('Service updated successfully');
      onSuccess();
      closeModal();
    } catch (error) {
      console.error('Failed to update Service', error);
      alert('Failed to update Service');
    }
  };

  return (
    <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Service </h5>
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

export default UpdateService;
