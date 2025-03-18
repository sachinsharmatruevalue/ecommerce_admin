import React from 'react';
import NotificationServices from '../../../services/NotificationService';
import BlogServices from '../../../services/BlogServices';
import BannerServices from '../../../services/BannerService';
import CategoryServices from '../../../services/CategoryService';
import TestimonialServices from '../../../services/TestimonialService';
import PackageServices from '../../../services/PackageService';
import HealthServices from '../../../services/healthService';
import UserServices from '../../../services/UserService';
function DeleteButton({ data, page, closeModal, onSuccess }) {
  const handleDelete = async () => {
    if (page === 'Notification') {
      try {
        const res = await NotificationServices.deleteNotification(data._id);
        if (res.status === true) {
          alert('Deleted successfully');
          closeModal();
          onSuccess();
        } else {
          console.error('Delete failed:', res);
          alert('Failed to delete. Please try again.');
        }
      } catch (error) {
        console.error('Error while deleting:', error);
        alert('An error occurred. Please try again.');
      }
    }
    else if (page === 'Blog') {

      const res = await BlogServices.deleteBlog(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else if (page === 'Banner') {

      const res = await BannerServices.deleteBanner(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else if (page === 'Category') {

      const res = await CategoryServices.deleteCat(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else if (page === 'Testimonial') {

      const res = await TestimonialServices.deleteTestimonial(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else if (page === 'Package') {

      const res = await PackageServices.deletePackage(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else if (page === 'UserReport') {

      const res = await UserServices.deleteUserReport(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else if (page === 'Service') {

      const res = await HealthServices.deleteService(data._id);
  
      if(res.status === true){
        alert('deleted successfully');
        closeModal();
        onSuccess();
      } 
      else {
        console.log(res)
      }
    }
    else {
      alert('Invalid page type for deletion');
    }
  };

  return (
    <div className="modal fade show d-block" id="deleteACModel" tabIndex="-1" aria-labelledby="deleteACModelLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-bg-light-green">
          <div className="modal-body py-4 px-5 text-center">
            <h4>Warning !!</h4>
            <p className="desc my-2">Are you sure you want to delete this detail?</p>
            <div className="donate-btn-grp text-center py-4">
              <button className="site-btn btn btn-blue delete-btn bg-secondary text-white me-3" onClick={closeModal}>
                Cancel
              </button>
              <button className="site-btn btn-red btn delete-btn bg-danger text-white" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteButton;
