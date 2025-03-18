
import React, { useState, useEffect } from 'react';
import TestimonialServices from '../../../services/TestimonialService';
import HelpTogal from '../StatusTogel/status';
import useAsync from '../../hooks/useAsync';
import Modal from 'react-modal';
import DeleteButton from '../Button/deleteButton';
import TestimonialUpdate from './updateTestimonial';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

function Testimonial() {
  const { data, run } = useAsync(TestimonialServices.getTestimonial);

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
        data.data.filter(testimonial =>
            testimonial.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    if (!text || typeof text !== "string") {
        return ""; // Agar text undefined/null hai, to empty string return karein
    }
    const words = text.split(" ");
    if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
    }
    return text;
}


  return (
    <>
      <div className="right_col" role="main">
        <div className="title-box">
          <h2>Testimonial List <span className="badge bg-orange">{count}</span></h2>
          <div className="container-box-top-header-right">
            <Link className="round-add-btn" to="/admin/add-testimonial">Add Testimonial</Link>
          </div>
        </div>


        <div className="container-box px-0">
          <div className="container-box-top-header px-4">
            <div className="container-box-top-header-left-2">
              <input
                type="search"
                name="search"
                placeholder="Search by Testimonial Title"
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
                  <th>NAME</th>
                  <th>MESSAGE</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((testimonial, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                  
                    <td>{truncateText(testimonial?.name, 15)}</td>
                    <td>{truncateText(testimonial?.message, 15)}</td>
                    <td>{formatDateTime(testimonial?.createdAt)}</td>
                    <td className="status-toggle">
                      <HelpTogal data={testimonial} page='Testimonial' onSuccess={() => run()} />
                    </td>
                    <td><button className="btn btn-warning btn-sm content-icon me-1" onClick={() => handleEditDetails(testimonial)}><i className="fa fa-edit"></i></button></td>
                    <td><button className="btn btn-danger btn-sm content-icon ms-1" onClick={() => handleDelete(testimonial)}><i className="fa fa-times"></i></button></td>

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
          <TestimonialUpdate testimonial={selectedEdit} closeModal={closeEditModal} onSuccess={run} />
        </Modal>
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Delete Confirmation"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <DeleteButton data={selectedEdit} page="Testimonial" closeModal={closeDeleteModal} onSuccess={run} />
        </Modal>
      </div>
    </>
  );
}

export default Testimonial;
