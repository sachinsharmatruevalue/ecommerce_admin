import React, { useState, useEffect } from 'react';
import UserServices from '../../../services/UserService';
import HelpTogal from '../StatusTogel/status';
import useAsync from '../../hooks/useAsync';
import Modal from 'react-modal';
import DeleteButton from '../Button/deleteButton';
import UserUpdate from './updateUser';
import ViewUserReport from './userReport';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

function UserManager() {
  const { data, error, isLoading, run } = useAsync(UserServices.getUser);
  
  const count = data?.data?.length;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data?.data || []);

  useEffect(() => {
    if (data?.data) {
      setFilteredData(
        data.data.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) 
        )
      );
    }
  }, [data, searchTerm]);

  const handleEditDetails = (help) => {
    setSelectedEdit(help);
    setIsEditModalOpen(true);
    toggleActionMenu(null);
  };
  const handleViewDetails = (user) => {
    setSelectedView(user);
    setIsViewModalOpen(true);
    toggleActionMenu(null);
  };
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedView(null);
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
          <h2>User List <span className="badge bg-orange">{count}</span></h2>

        </div>
          
        
        <div className="container-box px-0">
          <div className="container-box-top-header px-4">
            <div className="container-box-top-header-left-2">
              <input 
                type="search" 
                name="search" 
                placeholder="Search by User Name" 
                value={searchTerm} 
                onChange={handleSearchChange} 
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className="container-box-inner">
            <table id="example" className="table table-striped" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>IMAGE</th>
                  <th>Name</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>STATUS</th>
                  <th>Edit</th>
                  <th>View Report</th>
                  
                </tr>
              </thead>
              <tbody>
                {filteredData.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="product-img">
                        <img src={process.env.REACT_APP_URL + user?.image} alt="" style={{ height: '70px', width: '70px', objectFit: 'contain' }} />
                      </div>
                    </td>
                    <td>{truncateText(user?.name,15)}</td>
                    <td>{user?.mobileNo}</td>
                    <td>{user?.email}</td>
                    <td>{user?.city}</td>
                    <td>{formatDateTime(user?.createdAt)}</td>
                    <td className="status-toggle">
                    <HelpTogal data={user} page='User' onSuccess={() => run()} />
                  </td>
                        <td><button className="btn btn-warning btn-sm content-icon me-1" onClick={() => handleEditDetails(user)}><i className="fa fa-edit"></i></button></td>
                        <td><button className="btn btn-warning btn-sm content-icon me-1" onClick={() => handleViewDetails(user)}><i className="fa fa-eye"></i></button></td>
                        {/* <td><button className="btn btn-danger btn-sm content-icon ms-1" onClick={() => handleDelete(user)}><i className="fa fa-times"></i></button></td> */}
                        
                    
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
          <UserUpdate user={selectedEdit} closeModal={closeEditModal} onSuccess={run} />
        </Modal>
        <Modal
          isOpen={isViewModalOpen}
          onRequestClose={closeViewModal}
          contentLabel="User Details"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <ViewUserReport user={selectedView} closeModal={closeViewModal} onSuccess={run} />
        </Modal>
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Delete Confirmation"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <DeleteButton data={selectedEdit} page="User" closeModal={closeDeleteModal} onSuccess={run} />
        </Modal>
      </div>
    </>
  );
}

export default UserManager;
