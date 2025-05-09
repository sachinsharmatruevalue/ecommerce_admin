import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PackageServices from "../../../services/PackageService";

function PackageDetails() {
    const { id } = useParams(); // Encoded package ID from URL
    const decodedId = atob(id); // Decode the ID
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pkg, setPkg] = useState(null);

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await PackageServices.getPackageById(decodedId);
                setPkg(response?.data || null);
            } catch (err) {
                setError("Error loading package details");
            } finally {
                setIsLoading(false);
            }
        };

        if (decodedId) fetchPackage();
    }, [decodedId]);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // console.log(pkg);
    return (
        <>
            {/* Page Heading */}
            <section className="cs_page_heading cs_center cs_bg_filed"  style={{ backgroundColor: "#123456" }}>
                <div className="container">
                    <div className="cs_page_heading_in">
                        <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">Packages</h1>
                        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                            <li className="breadcrumb-item">
                                <a href="/home">
                                    <i className="fa-solid fa-house" /> Home/
                                </a>
                            </li>
                            <li className="">Package Details</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Package Details Section */}
            <section>
                <div className="container" style={{ paddingBlock: "50px" }}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : pkg ? (
                        <>
                            <div className="card p-4 shadow-sm">
                                <h4 className="text-danger fw-bold">{pkg.title}</h4>
                                <p className="text-muted">{pkg?.service?.map(ser => ser.name).join(", ")}</p>

                                {/* Pricing Section */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fw-bold text-dark fs-4">
                                        ₹{pkg.offerPrice}{" "}
                                        <del className="text-muted fs-5">₹{pkg.price}</del>
                                    </span>

                                </div>

                                {/* Package Info */}
                                <div className="d-flex mt-3">
                                    <span className="badge bg-light text-dark me-2" style={{ fontSize: "16px" }}>
                                        <i className="fa fa-list"></i>Fasting <br /> {pkg.fastingTime}
                                    </span>
                                    <span className="badge bg-light text-dark me-2" style={{ fontSize: "16px" }}>
                                        <i className="fa fa-clock"></i> Reports in <br /> <strong>{pkg.reportTime} Hours</strong>
                                    </span>
                                </div>
                                <div className="d-flex mt-3">
                                    <span className="badge bg-light text-dark me-2" style={{ fontSize: "16px" }}>
                                        <i className="fa fa-user"></i> Recommended Gender <br /><strong>{pkg.gender}</strong>
                                    </span>
                                    <span className="badge bg-light text-dark me-2" style={{ fontSize: "16px" }}>
                                        <i className="fa fa-user"></i> Age Group <br /><strong>{pkg.age}</strong>
                                    </span>
                                </div>


                                {/* Included Tests */}
                                <div className="mt-5">
                                    <h5 className="fw-bold">Included Tests</h5>
                                    <ul className="list-group">
                                        {pkg.include?.map((test, index) => (
                                            <li
                                                key={index}
                                                className="list-group-item"
                                                style={{ border: "none", padding: "10px 15px" }} // Border Removed
                                            >
                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                    onClick={() => toggleDescription(index)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <span>
                                                        <i className="fa fa-flask me-2"></i> {/* Selective Icon */}
                                                        {test.test}
                                                    </span>
                                                    <span className="badge bg-secondary">{test.count}</span>
                                                </div>
                                                {openIndex === index && (
                                                    <div className="mt-2 text-muted">
                                                          <small dangerouslySetInnerHTML={{ __html: test.description }}></small>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>No package found.</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default PackageDetails;
