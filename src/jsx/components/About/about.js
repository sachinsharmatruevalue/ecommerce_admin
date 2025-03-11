import React, { useState, useEffect } from 'react';

import useAsync from '../../hooks/useAsync';
import ContactServices from '../../../services/ContactServices';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import React Quill styles

function AboutUs() {
  const { data, error, isLoading } = useAsync(ContactServices.getAboutus);
  // console.log(">>>", data);

  const [formValues, setFormValues] = useState({
    about: '',
    aboutTitle: '',
    data: "about"
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        aboutTitle: data?.data?.Title || '',
        about: data?.data?.English || '',
        // privacyPolicyTitle: data?.data?.privacyPolicyTitle || '', 
        data: "about"
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
      // console.log(res);
      alert('About updated successfully!');
    } catch (error) {
      console.error('Failed to update About:', error);
      alert('Failed to update About. Please try again.');
    }
  };

  return (
    <div className="right_col" role="main">
      <div className="title-box">
        <h2>About-Us </h2>
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
                  value={formValues.aboutTitle}
                  onChange={(e) => handleInputChange('aboutTitle', e.target.value)}
                  placeholder="Enter Title"
                  className="form-control"
                />
              </div>

              <div className="input-field">
                <label>Descriptions</label>
                <ReactQuill
                  theme="snow"
                  value={formValues.about}
                  onChange={(value) => handleInputChange('about', value)}
                />
              </div>
              <button className="btn btn-primary mb-3" style={{marginTop:"10px" }}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
