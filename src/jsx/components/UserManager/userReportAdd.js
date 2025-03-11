import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from "../../../services/UserService";
import AddImage from "../../../images/placeholder-img.svg";

function AddReport({ user, closeModal, onSuccess }) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    report: "",
    user:user._id
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
        report: file,
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

      await UserServices.createUserReport(formData);
      alert("Report Added Successfully");
      onSuccess();
      closeModal();
    } catch (error) {
      console.error("Failed to add report details", error);
      alert("Failed to add report details");
      closeModal();
    }
  };

  return (
    <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{maxWidth:"800px"}}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add User Report </h5>
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
                  <button className="btn btn-primary mb-3" style={{marginTop:"10px" }}>Add</button>
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

export default AddReport;
