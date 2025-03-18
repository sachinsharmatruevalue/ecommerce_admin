import React, { useState, useEffect, useRef } from 'react';
import useAsync from '../../hooks/useAsync';
import AdminServices from '../../../services/AdminService';


function Profile() {
  const { data, error, isLoading, run } = useAsync(AdminServices.getMyProfile);
  // console.log(data);

  const [formValues, setFormValues] = useState({
    phone: '',
    name: '',
    email: '',
    // state: '',
    // address: '',
    // city: '',
  });

  const [formValues2, setFormValues2] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef(null);

  // Update form values when data is fetched
  useEffect(() => {
    if (data) {
      setFormValues({
        phone: data.mobileNo || '',
        name: data.name || '',
        email: data.email || '',
        // state: data.state || '',
        address: data.address || '',
        city: data.city || '',
      });

      if (data.image) {
        setPreviewUrl(data.image); // If profile image URL exists in data
      }
    }
  }, [data]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setFormValues2({
      ...formValues2,
      [name]: value,
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await AdminServices.updateMe(formData); // Assuming updateProfileImage is a method in AdminServices
      alert('Profile image updated successfully');
      console.log(res);
      localStorage.setItem('image', res?.image);
      run();
    } catch (error) {
      console.error('Failed to update profile image', error);
      alert('Failed to update profile image');
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formValues);
      const res = await AdminServices.updateMe(formValues);
      console.log(">>>",res)
      localStorage.setItem('userRole',res?.userType);
        localStorage.setItem('name', res?.name);
        window.location.reload();
      alert('Admin details updated successfully');
    } catch (error) {
      console.error('Failed to update Admin details', error);
      alert('Failed to update Admin details');
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      if (formValues2.newPassword !== formValues2.confirmPassword) {

        alert('New password and confirm password do not match');
      } else if (formValues2.oldPassword === formValues2.newPassword) {
        alert('New password cannot be the same as the old password');
      } else {
        console.log("klfjkl",formValues2)
        await AdminServices.updatePassword(formValues2);
        alert('Password updated successfully');
      }
    } catch (error) {
      console.error('Failed to update password', error);
      alert('Failed to update password ');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading admin details</div>;
  }

  return (
    <>
      <div className="right_col" role="main">
        
        <div className="container-box p-0 profile-container py-0">
          <div className="profile-header">
            <div className="profile-img-outer">
              <img src={process.env.REACT_APP_URL + previewUrl} alt="Profile" />
              <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <button
                className="profile-upload-btn"
                onClick={() => fileInputRef.current.click()}
              >
                <i className="fa fa-pencil" />
              </button>
            </div>
          </div>
          <div className="container-box-inner p-5 mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="page-details profile-details">
                <div className='profile-details-header'>
                <h4>Basic Information</h4>
                </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="input-field">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="input-field">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="input-field">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    {/* <div className="input-field">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        value={formValues.state}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div> */}
                    {/* <div className="input-field">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formValues.city}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div> */}
                    {/* <div className="input-field">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formValues.address}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div> */}
                    <button  className="btn btn-primary mb-3"
                style={{ marginTop: "10px" }}>SAVE</button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="page-details profile-details">
                <div className='profile-details-header'>
                <h4>Change your password</h4>
                </div>
                  <form onSubmit={handleSubmit2}>
                    <div className="input-field">
                      <label>Current Password</label>
                      <input
                        type="password"
                        name="oldPassword"
                        value={formValues2.oldPassword}
                        onChange={handleInputChange2}
                        className="form-control"
                        placeholder="Enter old password"
                      />
                    </div>
                    <div className="input-field">
                      <label>New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        value={formValues2.newPassword}
                        onChange={handleInputChange2}
                        className="form-control"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="input-field">
                      <label>Confirm password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formValues2.confirmPassword}
                        onChange={handleInputChange2}
                        className="form-control"
                        placeholder="Confirm new password"
                      />
                    </div>
                    <button  className="btn btn-primary mb-3"
                style={{ marginTop: "10px" }}>
                      SAVE CHANGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
