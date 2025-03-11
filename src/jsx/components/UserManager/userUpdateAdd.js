import React, { useState, useEffect } from 'react';

import UserServices from '../../../services/UserService';

function UserReportUpdate({ userReport, closeModal, onSuccess }) {
  const [formValues, setFormValues] = useState({
    report: "",
  });
  const [previewImage, setPreviewImage] = useState('img/placeholder-img.png'); 

  useEffect(() => {
    if (userReport) {
      setFormValues({

        report: userReport?.report || '',

       
      });
      if (userReport.report) {
        setPreviewImage(process.env.REACT_APP_URL + userReport.report);
      }
    }
  }, [userReport]);

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
        report: file,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (const key in formValues) {
        if (key !== 'report' || formValues[key] instanceof File) {
          formData.append(key, formValues[key]);
        }
      }

      await UserServices.updateUserReport(userReport._id, formData);
      alert('Report updated successfully');
      onSuccess();
      closeModal();
    } catch (error) {
      console.error('Failed to update Report', error);
      alert('Failed to update Report');
    }
  };

  return (
    <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{maxWidth:"800px"}}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User Report </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="container-box ">
              <div className="container-box-inner">
                <div className="page-details">
                  <form onSubmit={handleSubmit}>
                  <div className="row">
         

                {/* File Upload */}
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>
                      Upload <span className="red">*</span>
                    </label>
                    <input
                      type="file"
                      name="report"
                      className="form-control"
                      onChange={handleFileChange}
            
                    />
                   
                    <div className="file-preview text-center">
                      <img id="uploadFile" src={previewImage} alt="Preview" />
                    </div>
                  </div>
                </div>
              </div>
                    <button className="btn btn-primary mb-3" style={{marginTop:"10px" }}>Update Report</button>
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

export default UserReportUpdate;
