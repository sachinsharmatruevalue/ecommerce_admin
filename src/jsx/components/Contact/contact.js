import React, { useState, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import ContactServices from '../../../services/ContactServices';

function Contact() {
  const { data, error, isLoading } = useAsync(ContactServices.getContactDetail);


  const [formValues, setFormValues] = useState({
    phone: '',
    youtube: '',
    email: '',
    whatsApp: '',
    faceBook: '',
    linkedin: '',
    instagram: '',
    twitter:''
  });

  // Update form values when data is fetched
  useEffect(() => {
    if (data.data) {
      setFormValues({
        youtube: data.data.youtube || '',
        email: data.data.email || '',
        phone: data.data.phone || '',
        whatsApp: data.data.whatsApp || '',
        faceBook: data.data.faceBook || 'https://',
        linkedin: data.data.linkedin || 'https://',
        instagram: data.data.instagram || 'https://',
        twitter: data.data.twitter || 'https://'
      });
    }
  }, [data]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    
      // Assuming data.data._id contains the contact detail ID
      await ContactServices.updateContactDetail(data.data._id, formValues);
      alert('Contact details updated successfully');
    } catch (error) {
      console.error('Failed to update contact details', error);
      alert('Failed to update contact details');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading contact details</div>;
  }

  return (
    <div className="right_col" role="main">
      <div className="title-box">
        <h2>Contact us</h2>
      </div>
      <div className="container-box px-5">
        <div className="container-box-inner">
          <div className="page-details">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-field">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      maxLength={10}
                      className="form-control"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      maxLength={10}
                      className="form-control"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <label>Whatsapp</label>
                    <input
                      type="text"
                      name="whatsApp"
                      className="form-control"
                      value={formValues.whatsApp}
                      onChange={handleInputChange}
                      maxLength={10}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>Facebook Link</label>
                    <div className="input-link-outer">
                      <input
                        type="text"
                        name="faceBook"
                        className="form-control"
                        value={formValues.faceBook}
                        onChange={handleInputChange}
                      />
                      <button type="button" className="link-copy-btn"><i className="fa fa-paperclip" /></button>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>Instagram Link</label>
                    <div className="input-link-outer">
                      <input
                        type="text"
                        name="instagram"
                        className="form-control"
                        value={formValues.instagram}
                        onChange={handleInputChange}
                      />
                      <button type="button" className="link-copy-btn"><i className="fa fa-paperclip" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>Linkedin Link</label>
                    <div className="input-link-outer">
                      <input
                        type="text"
                        name="linkedin"
                        className="form-control"
                        value={formValues.linkedin}
                        onChange={handleInputChange}
                      />
                      <button type="button" className="link-copy-btn"><i className="fa fa-paperclip" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>Twitter Link</label>
                    <div className="input-link-outer">
                      <input
                        type="text"
                        name="twitter"
                        className="form-control"
                        value={formValues.twitter}
                        onChange={handleInputChange}
                      />
                      <button type="button" className="link-copy-btn"><i className="fa fa-paperclip" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <label>Youtube Link</label>
                    <div className="input-link-outer">
                      <input
                        type="text"
                        name="youtube"
                        className="form-control"
                        value={formValues.youtube}
                        onChange={handleInputChange}
                      />
                      <button type="button" className="link-copy-btn"><i className="fa fa-paperclip" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary mb-3" style={{marginTop:"10px" }} >SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
