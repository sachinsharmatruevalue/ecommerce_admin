import React, { useState, useEffect } from 'react';

import TestimonialServices from '../../../services/TestimonialService';

function UpdateTestimonial({ testimonial, closeModal, onSuccess }) {
    const [formValues, setFormValues] = useState({
        name: "",
        designation: "",
        message: "",
        rating: "",
    });
    // const [previewImage, setPreviewImage] = useState('img/placeholder-img.png');

    useEffect(() => {
        if (testimonial) {
            setFormValues({
                name: testimonial?.name || '',
                designation: testimonial?.designation || '',
                message: testimonial?.message || '',
                rating: testimonial?.rating || '',


            });

        }
    }, [testimonial]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreviewImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //         setFormValues({
    //             ...formValues,
    //             image: file,
    //         });
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            for (const key in formValues) {
                if (key !== 'image' || formValues[key] instanceof File) {
                    formData.append(key, formValues[key]);
                }
            }

            await TestimonialServices.updateTestimonial(testimonial.id, formData);
            alert('Testimonial updated successfully');
            onSuccess();
            closeModal();
        } catch (error) {
            console.error('Failed to update testimonial', error);
            alert('Failed to update testimonial');
        }
    };

    return (
        <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "800px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Testimonial </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="container-box ">
                            <div className="container-box-inner">
                                <div className="page-details">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            {/* Name */}
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Name <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        value={formValues.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter name"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Designation */}
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Designation <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="designation"
                                                        className="form-control"
                                                        value={formValues.designation}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter designation"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Rating <span className="red">*</span>
                                                    </label>
                                                    <select
                                                        name="rating"
                                                        className="form-control"
                                                        value={formValues.rating}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Rating</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Message <span className="red">*</span>
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        value={formValues.message}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter message"
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>


                                        </div>
                                        <button className="btn btn-primary mb-3" style={{ marginTop: "10px" }}>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateTestimonial;
