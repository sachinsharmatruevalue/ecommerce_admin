import React, { useState, useEffect } from 'react';

import NotificationServices from '../../../services/NotificationService';

function UpdateNotification({ notification, closeModal, onSuccess }) {
  const [formValues, setFormValues] = useState({
    title: '',
    message: '',
    image: '',
    linkUrl: '',
  });
  const [previewImage, setPreviewImage] = useState('img/placeholder-img.png'); 

  useEffect(() => {
    if (notification) {
      setFormValues({
        title: notification?.title || '',
        message: notification?.message || '',
        image: notification?.image || '',
        linkUrl: notification?.linkUrl || '',
       
      });
      if (notification.image) {
        setPreviewImage(process.env.REACT_APP_URL + notification.image);
      }
    }
  }, [notification]);

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

      await NotificationServices.updateNotification(notification.id, formData);
      alert('Notification updated successfully');
      onSuccess();
      closeModal();
    } catch (error) {
      console.error('Failed to update notification', error);
      alert('Failed to update notification');
    }
  };

  return (
    <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{maxWidth:"800px"}}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Notification </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="container-box ">
              <div className="container-box-inner">
                <div className="page-details">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <div className="input-field">
                          <label>Title</label>
                          <input type="text" name="title" className="form-control" value={formValues.title} onChange={handleInputChange} placeholder="New notification" />
                        </div>
                      </div>
                    
                      <div className="col-lg-12 col-md-6">
                        <div className="input-field">
                          <label>Link</label>
                          <input type="text" name="linkUrl" className="form-control" value={formValues.linkUrl} onChange={handleInputChange} placeholder="New notification" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <div className="input-field">
                          <label>Description</label>
                          <textarea rows="3" style={{ height: 'auto' }} type="text" name="message" value={formValues.message} onChange={handleInputChange} className="form-control" placeholder="New notification" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="input-field">
                          <label>Upload<span className="red">*</span></label>
                          <input type="file" name="image" className="form-control" onChange={handleFileChange} />
                          <p><span>Drop an image or Paste URL (up to resolution 1,500 x 1,500 px),</span> Supported formats: png, jpeg, jpg, webp</p>
                          <div className="file-preview text-center">
                            <img id="uploadFile" src={previewImage} alt="your image" />
                          </div>
                        </div>
                      </div>
                    
                    </div>
                    <button className="btn btn-primary mb-3" style={{marginTop:"10px" }}>Update Notification</button>
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

export default UpdateNotification;
