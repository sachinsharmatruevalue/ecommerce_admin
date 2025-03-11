import React, { useState } from 'react';
import NotificationServices from '../../../services/NotificationService';
import BlogServices from '../../../services/BlogServices';
import BannerServices from '../../../services/BannerService';
import HealthServices from '../../../services/healthService';
import UserServices from '../../../services/UserService';
const TogalButtonForStatus = ({ data, page ,onSuccess}) => {
  const [isChecked, setIsChecked] = useState(data?.status === 'Active');

  // Handle checkbox toggle
  const handleToggle = async () => {
    const newStatus = !isChecked ? 'Active' : 'Inactive'; 
    setIsChecked(!isChecked);
     if (page === 'Notification') {
      const res = await NotificationServices.updateNotification(data._id, {
        status: newStatus
      });
      onSuccess();
    }
    else if (page === 'Blog') {
      const res = await BlogServices.updateBlog(data._id, {
        status: newStatus
      });
      onSuccess();
    }
    else if (page === 'Banner') {
      const res = await BannerServices.updateBanner(data._id, {
        status: newStatus
      });
      onSuccess();
    }
    else if (page === 'Service') {
      const res = await HealthServices.updateService(data._id, {
        status: newStatus
      });
      onSuccess();
    }
    else if (page === 'User') {
      const res = await UserServices.updateUser(data._id, {
        status: newStatus
      });
      onSuccess();
    }
    
  
   
  
  };

  return (
   
      <div className="check-box">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
      </div>
    
  );
};

export default TogalButtonForStatus;
