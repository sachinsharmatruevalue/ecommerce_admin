import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PackageServices from "../../../services/PackageService";
import CategoryServices from "../../../services/CategoryService";
import HealthServices from "../../../services/healthService";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdatePackge({ packge, closeModal, onSuccess }) {
    const [formValues, setFormValues] = useState({
        title: "",
        category: "",
        service: [],
        price: "",
        offerPrice: "",
        gender: "",
        age: "",
        reportTime: "",
        fastingTime: "",
        popular:"",
        include: [{ test: "", description: "" }],
    });

    const [category, setCategory] = useState([]);
    const [service, setService] = useState([]);

    useEffect(() => {
        if (packge) {
            setFormValues({
                title: packge?.title || "",
                price: packge?.price || "",
                offerPrice: packge?.offerPrice || "",
                category: packge?.category?._id || "",
                gender: packge?.gender || "",
                age: packge?.age || "",
                reportTime: packge?.reportTime || "",
                fastingTime: packge?.fastingTime || "",
                popular: packge?.popular || "",
                service: packge?.service?.map((ser) => ser._id) || [], // ✅ Fixed
                include:
                    packge.include?.map((inc) => ({
                        test: inc.test || "",
                        description: inc.description || "",
                    })) || [{ test: "", description: "" }],
            });
        }
    }, [packge]);

    // Fetch Categories
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await CategoryServices.getCat();
                if (res.status) {
                    setCategory(res.data);
                } else {
                    alert("Failed to fetch categories");
                }
            } catch (error) {
                console.error("Failed to fetch category", error);
                alert("Failed to fetch categories");
            }
        };
        fetchCategory();
    }, []);

    // Fetch Services
    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await HealthServices.getService();
                if (res.status) {
                    setService(res.data);
                } else {
                    alert("Failed to fetch services");
                }
            } catch (error) {
                console.error("Failed to fetch services", error);
                alert("Failed to fetch services");
            }
        };
        fetchService();
    }, []);

    // Handle Input Change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Handle Service Selection (Multiple Select)
    const handleServiceChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setFormValues({
            ...formValues,
            service: selectedOptions, // ✅ Fixed array handling
        });
    };

    // Handle Include Change
    const handleIncludeChange = (index, field, value) => {
        const updatedInclude = [...formValues.include];
        updatedInclude[index][field] = value;
        setFormValues({ ...formValues, include: updatedInclude });
    };

    // Add Include
    const addInclude = () => {
        setFormValues({
            ...formValues,
            include: [...formValues.include, { test: "", description: "" }],
        });
    };

    // Remove Include
    const removeInclude = (index) => {
        const updatedInclude = formValues.include.filter((_, i) => i !== index);
        setFormValues({
            ...formValues,
            include: updatedInclude.length ? updatedInclude : [{ test: "", description: "" }], // ✅ Ensure at least one
        });
    };

    // Handle Form Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {
                ...formValues,
                service: formValues.service, // ✅ Fixed
            };

            await PackageServices.updatePackage(packge.id, payload);
            alert("Package updated successfully");
            onSuccess();
            closeModal();
        } catch (error) {
            console.error("Failed to update Package", error);
            alert("Failed to update Package");
        }
    };

    return (
        <div className="modal fade edit-box show d-block" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "800px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Package </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="container-box ">
                            <div className="container-box-inner">
                                <div className="page-details">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            {/* Category Dropdown */}
                                            <div className="col-lg-6">
                                                <div className="input-field">
                                                    <label>Category Name*</label>
                                                    <select
                                                        name="category"
                                                        className="form-control"
                                                        value={formValues.category}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select a category</option>
                                                        {category.map((cat) => (
                                                            <option key={cat._id} value={cat._id}>
                                                                {cat.title}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Service Dropdown (Multiple Selection) */}
                                            <div className="col-lg-6">
                                                <div className="input-field">
                                                    <label>Service Name*</label>
                                                    <select
                                                        name="service"
                                                        className="form-control"
                                                        value={formValues.service}
                                                        onChange={handleServiceChange}
                                                        multiple
                                                        required
                                                    >
                                                        {service.map((ser) => (
                                                            <option key={ser._id} value={ser._id}>
                                                                {ser.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Title Input */}
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Title <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        className="form-control"
                                                        value={formValues.title}
                                                        onChange={handleInputChange}
                                                        placeholder="New title"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Price <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        className="form-control"
                                                        value={formValues.price}
                                                        onChange={handleInputChange}
                                                        placeholder="New price"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Offer Price <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="offerPrice"
                                                        className="form-control"
                                                        value={formValues.offerPrice}
                                                        onChange={handleInputChange}
                                                        placeholder="New Offer Price"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Gender <span className="red">*</span>
                                                    </label>
                                                    <select
                                                        name="gender"
                                                        className="form-control"
                                                        value={formValues.gender}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Both">Both</option>
                                                        <option value="Other">Other</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Age Group <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="age"
                                                        className="form-control"
                                                        value={formValues.age}
                                                        onChange={handleInputChange}
                                                        placeholder="New age group"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Report Time <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="reportTime"
                                                        className="form-control"
                                                        value={formValues.reportTime}
                                                        onChange={handleInputChange}
                                                        placeholder="New report time"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-field">
                                                    <label>
                                                        Fasting Time <span className="red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="fastingTime"
                                                        className="form-control"
                                                        value={formValues.fastingTime}
                                                        onChange={handleInputChange}
                                                        placeholder="New fasting time"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" style={{ marginTop: '40px' }}>
                                                <div className="input-field">
                                                    <label>
                                                        Popular
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        name="popular"
                                                        checked={!!formValues.popular} // Ensure boolean value
                                                        onChange={(e) =>
                                                            setFormValues({ ...formValues, popular: e.target.checked })
                                                        }
                                                        style={{ width: "20px", marginLeft: "20px", height: "20px" }} // Add custom size if hidden
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-box-top-header justify-content-between" style={{ marginTop: "10px" }}>
                                                <h4>Include Add More Details:</h4>
                                            </div>
                                            <div className="page-details">
                                                {formValues.include.map((inc, index) => (
                                                    <div className="row mb-4" key={index}>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="input-field">
                                                                <label>Test</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={inc.test}
                                                                    onChange={(e) => handleIncludeChange(index, 'test', e.target.value)}
                                                                    placeholder="Enter Test"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-sm-4 py-1">

                                                            <div className="input-field">
                                                                <label>Description</label>

                                                                <ReactQuill
                                                                    theme="snow"
                                                                    value={inc.description}
                                                                    onChange={(value) => handleIncludeChange(index, 'description', value)}
                                                                    placeholder="Enter Description"
                                                                    required
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 d-flex align-items-center" style={{ marginTop: "10px" }}>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => removeInclude(index)}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}

                                                <button type="button" className="btn btn-secondary" onClick={addInclude}>
                                                    Add More
                                                </button>
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

export default UpdatePackge;
