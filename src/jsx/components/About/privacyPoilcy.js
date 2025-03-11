import React, { useState, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import ContactServices from '../../../services/ContactServices';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import React Quill styles

function PrivacyPolicy() {
  const { data, error, isLoading } = useAsync(ContactServices.getPrivicyPolicy);
 
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };
  const [formValues, setFormValues] = useState({
    privacyPolicy: '',
    privacyPolicyTitle: '',
    data: "privacyPolicy"
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        privacyPolicyTitle: data?.data?.Title || '',
        privacyPolicy: data?.data?.English || '',
        // privacyPolicyTitle: data?.data?.privacyPolicyTitle || '', 
        data: "privacyPolicy"
      });
    }
  }, [data]);

  const handleInputChange = (name, value) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await ContactServices.updateAppPolicy(formValues);
    
      alert('Privacy Policy updated successfully!');
    } catch (error) {
      console.error('Failed to update Privacy Policy:', error);
      alert('Failed to update Privacy Policy. Please try again.');
    }
  };

  return (
    <div className="right_col" role="main">
      <div className="title-box">
          <h2>Privacy Policy </h2>
        </div>
      <div className="container-box p-4 profile-container">
        <div className="container-box-inner">
          <div className="row page-details">
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formValues.privacyPolicyTitle}
                  onChange={(e) => handleInputChange('privacyPolicyTitle', e.target.value)}
                  placeholder="Enter Title"
                  className="form-control"
                />
              </div>
          
              <div className="input-field">
                <label>Descriptions</label>
                <ReactQuill
                  theme="snow"
                  value={formValues.privacyPolicy}
                  onChange={(value) => handleInputChange('privacyPolicy', value)}
                />
              </div>
              <button className="btn btn-primary mb-3" style={{marginTop:"10px" }} >SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
