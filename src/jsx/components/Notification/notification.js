import React, { useState, useEffect } from 'react';
import NotificationServices from '../../../services/NotificationService';
import HelpTogal from '../StatusTogel/status';
import useAsync from '../../hooks/useAsync';
import Modal from 'react-modal';
import DeleteButton from '../Button/deleteButton';
import NotificationUpdate from './updateNotification';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

function Notification() {
  const { data, error, isLoading, run } = useAsync(NotificationServices.getNotification);
  
  const count = data?.data?.length;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data?.data || []);

  useEffect(() => {
    if (data?.data) {
      setFilteredData(
        data.data.filter(notification =>
          notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          notification.message.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [data, searchTerm]);

  const handleEditDetails = (help) => {
    setSelectedEdit(help);
    setIsEditModalOpen(true);
    toggleActionMenu(null);
  };

  const handleDelete = (help) => {
    setSelectedEdit(help);
    setIsDeleteModalOpen(true);
    toggleActionMenu(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEdit(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedEdit(null);
  };

  const toggleActionMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  

  function formatDateTime(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
 
  
  function truncateText(text, limit) {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }

  return (
    <>
      <div className="right_col" role="main">
        <div className="title-box">
          <h2>Notification List <span className="badge bg-orange">{count}</span></h2>
          <div className="container-box-top-header-right">
            <Link className="round-add-btn" to="/add-notification">Add Notification</Link>
          </div>
        </div>
          
        
        <div className="container-box px-0">
          {/* <div className="container-box-top-header px-4">
            <div className="container-box-top-header-left-2">
              <input 
                type="search" 
                name="search" 
                placeholder="Search by Notification" 
                value={searchTerm} 
                onChange={handleSearchChange} 
              />
              <button className="search-btn">Search</button>
            </div>
          </div> */}
          <div className="container-box-inner">
            <table id="example" className="table table-striped" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th className="w-50">DESCRIPTION</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((notification, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="product-img">
                        <img src={process.env.REACT_APP_URL + notification?.image} alt="" style={{ height: '70px', width: '70px', objectFit: 'contain' }} />
                      </div>
                    </td>
                    <td>{truncateText(notification?.title,15)}</td>
                    <td className="address">{truncateText(notification?.message, 15)}</td>
                    <td className="payment">{formatDateTime(notification?.createdAt)}</td>
                    <td className="status-toggle">
                    <HelpTogal data={notification} page='Notification' onSuccess={() => run()} />
                  </td>
                        <td><button className="btn btn-warning btn-sm content-icon me-1" onClick={() => handleEditDetails(notification)}><i className="fa fa-edit"></i></button></td>
                        <td><button className="btn btn-danger btn-sm content-icon ms-1" onClick={() => handleDelete(notification)}><i className="fa fa-times"></i></button></td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          contentLabel="User Details"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <NotificationUpdate notification={selectedEdit} closeModal={closeEditModal} onSuccess={run} />
        </Modal>
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Delete Confirmation"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <DeleteButton data={selectedEdit} page="Notification" closeModal={closeDeleteModal} onSuccess={run} />
        </Modal>
      </div>
    </>
  );
}

export default Notification;
