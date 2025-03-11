import React, { useState, useEffect } from 'react';
import HealthServices from '../../../services/healthService';
import HelpTogal from '../StatusTogel/status';
import useAsync from '../../hooks/useAsync';
import Modal from 'react-modal';
import DeleteButton from '../Button/deleteButton';
import ServiceUpdate from './updateService';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

function Service() {
  const { data, error, isLoading, run } = useAsync(HealthServices.getService);
  
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
        data.data.filter(service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) 
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
          <h2>Service List <span className="badge bg-orange">{count}</span></h2>
          <div className="container-box-top-header-right">
            <Link className="round-add-btn" to="/add-service">Add Service</Link>
          </div>
        </div>
          
        
        <div className="container-box px-0">
          <div className="container-box-top-header px-4">
            <div className="container-box-top-header-left-2">
              <input 
                type="search" 
                name="search" 
                placeholder="Search by Service Title" 
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
                  <th></th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>STATUS</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((service, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="product-img">
                        <img src={process.env.REACT_APP_URL + service?.image} alt="" style={{ height: '70px', width: '70px', objectFit: 'contain' }} />
                      </div>
                    </td>
                    <td>{truncateText(service?.name,15)}</td>
                    <td>{service?.duration}</td>
                    <td>{service?.price}</td>
                    <td>{service?.category}</td>
                    <td>{formatDateTime(service?.createdAt)}</td>
                    <td className="status-toggle">
                    <HelpTogal data={service} page='Service' onSuccess={() => run()} />
                  </td>
                        <td><button className="btn btn-warning btn-sm content-icon me-1" onClick={() => handleEditDetails(service)}><i className="fa fa-edit"></i></button></td>
                        <td><button className="btn btn-danger btn-sm content-icon ms-1" onClick={() => handleDelete(service)}><i className="fa fa-times"></i></button></td>
                    
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
          <ServiceUpdate service={selectedEdit} closeModal={closeEditModal} onSuccess={run} />
        </Modal>
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Delete Confirmation"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <DeleteButton data={selectedEdit} page="Service" closeModal={closeDeleteModal} onSuccess={run} />
        </Modal>
      </div>
    </>
  );
}

export default Service;
