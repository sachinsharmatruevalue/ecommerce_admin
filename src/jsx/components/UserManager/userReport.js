import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import UserServices from '../../../services/UserService';
import DeleteButton from '../Button/deleteButton';
import UserReportUpdate from './userUpdateAdd';
import UserReportAdd from './userReportAdd';

function ViewUser({ user, closeModal }) {
    // Move hooks to the top level
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedAddUser, setSelectedAddUser] = useState(null);
    const [report, setReport] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedEdit, setSelectedEdit] = useState(null);
    const [temp, setTemp] = useState(0);

    const handleAddDetails = (book) => {
        setSelectedAddUser(book);
        setIsModalOpen(true);
        toggleActionMenu(null);
    };

    const toggleActionMenu = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const closeUserModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };
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

    function formatDateTime(isoString) {
        const date = new Date(isoString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return { date: formattedDate, time: formattedTime };
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
            return 'N/A';
        }

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}-${month}-${year}`;
    };



    useEffect(() => {
        if (!user) return;
        const fetchReport = async () => {
            try {
                const response = await UserServices.getUserReport(user._id);
                setReport(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching report:', error);
            }
        };
        fetchReport();
    }, [user]);

    if (!user) return null;

    return (
        <div className="modal fade viewbox edit-box show d-block" tabIndex={-1} aria-labelledby="userModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "800px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">User Details</h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            {/* User Info Section */}
                            <div className="container-box user-manager" style={{ padding: '10px', marginTop: '15px' }}>
                                <div className="view-profile-outer d-flex justify-content-center">
                                    {/* <img src="img/profile-1.svg" alt="Profile" /> */}
                                    <img src={user?.image ? `${process.env.REACT_APP_URL}${user.image}` : 'img/profile-1.svg'} alt="" style={{ height: '100px', width: '100px', objectFit: 'contain' }} />
                                </div>
                                <h3 className="faqs-1" style={{ marginTop: '10px', textAlign: 'center' }}>
                                    {user?.name || 'N/A'}
                                </h3>
                            </div>

                            <div className="container-box user-manager" style={{ padding: '10px', marginTop: '15px' }}>
                                <ul className="user-details list-unstyled d-flex justify-content-between">
                                    <li>
                                        <span>Email</span>
                                        <p>{user?.email || 'N/A'}</p>
                                    </li>
                                    <li>
                                        <span>Phone</span>
                                        <p>{user?.mobileNo || 'N/A'}</p>
                                    </li>
                                    <li>
                                        <span>City</span>
                                        <p>{user?.city || 'N/A'}</p>
                                    </li>
                                </ul>
                                <ul className="user-details list-unstyled d-flex justify-content-between">
                                    <li>
                                        <span>Date of Birth</span>
                                        <p>{formatDate(user?.dateofbirth) || 'N/A'}</p>
                                    </li>
                                    <li>
                                        <span>Reg. date</span>
                                        <p>{formatDate(user?.createdAt) || 'N/A'}</p>
                                    </li>
                                    <li>
                                        <span>Login Type</span>
                                        <p>{user?.loginType || 'Mobile Number'}</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Report History Section */}
                            <div className="booking-detail container-box user-manager" style={{ overflowX: "auto", whiteSpace: "nowrap", marginTop: "20px" }}>
                                <h4>Report History</h4>
                                <div>
                                    <div style={{marginLeft:"100px",marginBottom: "20px"}} className="container-box-top-header-right">
                                        <button
                                            className="edit trans-btn"
                                            onClick={() => handleAddDetails(user)}
                                        >
                                         <h5>  <i className="fa fa-add"></i>Add Report</h5> 
                                        </button>
                                    </div>
                                </div>
                                <table className="table table-striped" style={{ border: '1px solid #FFFFFF', borderRadius: '10px' }}>
                                    <thead style={{ backgroundColor: '#D9D9D9' }}>
                                        <tr>
                                            <th style={{ color: '#fff', backgroundColor: '#8C8FA7' }}>Report</th>
                                            <th style={{ color: '#fff', backgroundColor: '#8C8FA7' }}>Edit</th>
                                            <th style={{ color: '#fff', backgroundColor: '#8C8FA7' }}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {report && report.length > 0 ? (
                                            report.map((userReport, index) => (
                                                <tr key={index} style={{ backgroundColor: '#F9FAFF' }}>
                                                    <td><a href={process.env.REACT_APP_URL + userReport?.report} target='_blank'> <button className="document-update-btn"><i class="fa-solid fa-file-pdf"></i>
                                                        User Report*</button> </a>
                                                    </td>

                                                    <td style={{ gap: '20px' }}>
                                                        <button
                                                            className="edit trans-btn"
                                                            onClick={() => handleEditDetails(userReport)}
                                                        >
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td style={{ gap: '20px' }}>
                                                        <button
                                                            className="edit trans-btn"
                                                            onClick={() => handleDelete(userReport)}
                                                        >
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" style={{ textAlign: 'center' }}>
                                                    No Report Data Available
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <Modal
                                isOpen={isEditModalOpen}
                                onRequestClose={closeEditModal}
                                contentLabel="User Details"
                                className="modal-content"
                                overlayClassName="modal-overlay"
                            >
                                <UserReportUpdate userReport={selectedEdit} closeModal={closeEditModal} onSuccess={() => setTemp(temp + 1)} />
                            </Modal>
                            <Modal
                                isOpen={isDeleteModalOpen}
                                onRequestClose={closeDeleteModal}
                                contentLabel="Delete Confirmation"
                                className="modal-content"
                                overlayClassName="modal-overlay"
                            >
                                <DeleteButton data={selectedEdit} page="UserReport" closeModal={closeDeleteModal} onSuccess={() => setTemp(temp + 1)} />
                            </Modal>
                        </div>
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="User Details"
                        className="modal-content"
                        overlayClassName="modal-overlay"
                    >
                        <UserReportAdd user={selectedAddUser} closeModal={closeModal} onSuccess={() => setTemp(temp + 1)} />
                    </Modal>
                    <div className="modal-footer d-flex">
                        <button type="button" className="site-btn-green" style={{ marginBlock: '15px' }} onClick={closeModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ViewUser;