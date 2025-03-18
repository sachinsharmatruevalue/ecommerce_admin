import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PackageServices from "../../../services/PackageService";
import CategoryServices from "../../../services/CategoryService";
import HealthServices from "../../../services/healthService";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function AddPackage() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        title: "",
        category: "",
        service: [],
        price: "",
        offerPrice: "",
        gender: "",
        age: "",
        reportTime: "",
        popular: "",
        fastingTime: "",
        include: [
            {
                test: "",
                description: "",
            },
        ],
    });

    const [category, setCategory] = useState([]); // Initialize as an array
    const [service, setService] = useState([]); // Initialize as an array

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Handle multiple select for `service`
        if (name === "service") {
            const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
            setFormValues((prevValues) => ({
                ...prevValues,
                service: selectedOptions,
            }));
        } else {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await CategoryServices.getCat();
                if (res.status) {
                    setCategory(res.data);
                } else {
                    alert("Failed to fetch category");
                }
            } catch (error) {
                console.error("Failed to fetch category", error);
                alert("Failed to fetch category");
            }
        };

        fetchCategory();
    }, []);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await HealthServices.getService(); // Added `await`
                if (res.status) {
                    setService(res.data);
                } else {
                    alert("Failed to fetch service");
                }
            } catch (error) {
                console.error("Failed to fetch service", error);
                alert("Failed to fetch service");
            }
        };

        fetchService();
    }, []);



    const handleIncludeChange = (index, field, value) => {
        const updatedinclude = [...formValues.include];
        updatedinclude[index][field] = value;
        setFormValues({
            ...formValues,
            include: updatedinclude,
        });
    };

    // Add more rooms
    const addInclude = () => {
        setFormValues({
            ...formValues,
            include: [
                ...formValues.include,
                { test: '', description: '' },
            ],
        });
    };

    // Remove a room
    const removeInclude = (index) => {
        const updatedinclude = formValues.include.filter((_, i) => i !== index);
        setFormValues({
            ...formValues,
            include: updatedinclude,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {
                ...formValues,
                service: service
            }


            await PackageServices.createPackage(payload);
            alert("Package Added Successfully");
            navigate("/admin/package");
        } catch (error) {
            console.error("Failed to add package details", error);
            alert("Failed to add package details");
        }
    };

    return (
        <div className="right_col" role="main">
            <div className="title-box">
                <h2>Add Package</h2>
                <div className="container-box-top-header-right">
                    <Link className="round-add-btn" to="/admin/package">
                        Package List
                    </Link>
                </div>
            </div>
            <div className="container-box px-5">
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
                                            onChange={handleInputChange}
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
                                            <div className="col-lg-12 col-md-12">
                                                <div className="input-field">
                                                    <label>Description</label>

                                                    <ReactQuill
                                                        theme="snow"
                                                        value={inc.description}
                                                        onChange={(value) => handleIncludeChange(index, 'description', value)}  // Fix applied here
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary mb-3"
                                style={{ marginTop: "10px" }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPackage;
