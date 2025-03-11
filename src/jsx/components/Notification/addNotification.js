import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NotificationServices from '../../../services/NotificationService';
import AddImage from "../../../images/placeholder-img.svg";
function AddNotification() {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: '',
    message: '',
    image: '',
  });

  const [previewImage, setPreviewImage] = useState(AddImage); // Placeholder image path


  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
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
  //   // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      for (const key in formValues) {
        formData.append(key, formValues[key]);
      }

      const response = await NotificationServices.createNotification(formData);
      // Assuming updateContactDetail is a method in UserServices

      alert('Notification Added Successfully');
      navigate('/notification')
    } catch (error) {
      console.error('Failed to notification details', error);
      alert('Failed to add Notification details');
    }
  };

  return (
    <>
      <div className="right_col" role="main">
        <div className="title-box">
          <h2>Add Notification </h2>
          <div className="container-box-top-header-right">
            <Link className="round-add-btn" to="/notification">Notification List</Link>
          </div>
        </div>
        <div className="container-box px-5">
          <div className="container-box-inner">
            <div className="page-details">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="input-field">
                      <label>Tittle<span className="red">*</span></label>
                      <input type="text" name="title" className="form-control" value={formValues.title}
                        onChange={handleInputChange} placeholder="New notification" required />
                    </div>
                  </div>


                  <div className="col-sm-12">
                    <div className="input-field">
                      <label>Description<span className="red">*</span></label>
                      <textarea className="form-control video-desc" name="message" value={formValues.message}
                        onChange={handleInputChange} placeholder='New description' required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="input-field">
                      <label>Link</label>
                      <input type="text" name="linkUrl" className="form-control" value={formValues.linkUrl} onChange={handleInputChange} placeholder="New notification" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-field">
                      <label>Upload<span className="red">*</span></label>
                      <input type="file" name="image" className="form-control" required onChange={handleFileChange} />
                      <p><span>Drop an image or Paste URL (upto resolution 1,500 x 1,500 px),</span> Supported formats: png, jpeg, jpg, webp</p>
                      <div className="file-preview text-center">
                        <img id="uploadFile" src={previewImage} alt="your image" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary mb-3" style={{ marginTop: "10px" }}>Send Notification</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNotification