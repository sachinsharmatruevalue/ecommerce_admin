import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PackageServices from "../../../services/PackageService";
import { Link, useNavigate } from 'react-router-dom';

function CategoryPackage() {
    const { id } = useParams(); // Encoded package ID from URL
    const decodedId = atob(id); // Decode the ID
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [catPkg, setCatPkg] = useState([]);

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await PackageServices.getWebPackageByCategory(decodedId);
                setCatPkg(response?.data || []); // Ensure it's an array
            } catch (err) {
                setError("Error loading package details");
            } finally {
                setIsLoading(false);
            }
        };

        if (decodedId) fetchPackage();
    }, [decodedId]);

    // Slice packages if needed
    const [showAll, setShowAll] = useState(false);
    const displayedPackages = showAll ? catPkg : catPkg.slice(0, 4);
console.log(displayedPackages);
    return (
        <>
            <section className="cs_page_heading cs_center cs_bg_filed" data-src="assets/img/page_heading_bg.jpg">
                <div className="container">
                    <div className="cs_page_heading_in">
                        <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">Packages</h1>
                        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                            <li className="breadcrumb-item">
                                <a href="/home">
                                    <i className="fa-solid fa-house" /> Home
                                </a>
                            </li>
                            <li className="breadcrumb-item active">All Packages</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div className="container" style={{paddingBlock: "70px"}}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : (
                        <>
                            <div className="row">
                                {displayedPackages.map((pkg) => (
                                    <div key={pkg.id} className="col-md-6 mb-4">
                                        <div className="card p-3 border">
                                            <Link to={`/package-details/${btoa(pkg._id)}`}>
                                            <h5 className="text-danger fw-bold">{pkg.title}</h5>
                                            </Link>
                                            <p className="text-muted">{pkg?.service?.map(ser => ser.name).join(", ")}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-bold text-dark" >
                                                    ₹{pkg.offerPrice} <br /><del className="text-muted">₹{pkg.price}</del>
                                                </span>
                                                
                                            </div>
                                            <div className="d-flex mt-2">
                                                <span className="badge bg-light text-dark me-2"> Reports in (T&C)<br/><strong style={{ color: 'black' }}>{pkg.reportTime}</strong> </span>
                                                <span className="badge bg-light text-dark">Age Group<br/><strong style={{ color: 'black' }}>{pkg.age}</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {!showAll && catPkg.length > 4 && (
                                <div className="text-center mt-4">
                                    <button className="btn btn-primary" onClick={() => setShowAll(true)}>
                                        View All Packages
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default CategoryPackage;
