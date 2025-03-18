import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TestimonialServices from "../../../services/TestimonialService";


function AddTestimonial() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        designation: "",
        message: "",
        rating: "",
   
    });

    // const [previewImage, setPreviewImage] = useState(AddImage);

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // // Handle file upload
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => setPreviewImage(reader.result);
    //         reader.readAsDataURL(file);

    //         setFormValues((prevValues) => ({
    //             ...prevValues,
    //             image: file,
    //         }));
    //     }
    // };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            Object.keys(formValues).forEach((key) => {
                formData.append(key, formValues[key]);
            });

            await TestimonialServices.createTestimonial(formData);
            alert("Testimonial Added Successfully");
            navigate("/admin/testimonial");
        } catch (error) {
            console.error("Failed to add Testimonial details", error);
            alert("Failed to add Testimonial details");
        }
    };

    return (
        <div className="right_col" role="main">
            <div className="title-box">
                <h2>Add Testimonial</h2>
                <div className="container-box-top-header-right">
                    <Link className="round-add-btn" to="/admin/testimonial">
                        Testimonial List
                    </Link>
                </div>
            </div>
            <div className="container-box px-5">
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

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary mb-3" style={{ marginTop: "10px" }}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTestimonial;
