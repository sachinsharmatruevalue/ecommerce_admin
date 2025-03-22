import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PackageServices from "../../../services/PackageService";
import { Link } from "react-router-dom";

function Search() {
    const query = new URLSearchParams(useLocation().search);
    const title = query.get("title") || "";
    console.log(title);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [catPkg, setCatPkg] = useState([]);

    useEffect(() => {
        const fetchPackage = async () => {
            setIsLoading(true);
            try {
                const response = await PackageServices.getPackageSearch(title);
                setCatPkg(response?.data || []); // Ensure it's an array
            } catch (err) {
                setError("Error loading package details");
            } finally {
                setIsLoading(false);
            }
        };

        if (title) fetchPackage(); // Call the function only if title exists

    }, [title]);

    return (
        <>
            <section className="cs_page_heading cs_center cs_bg_filed">
                <div className="container">
                    <div className="cs_page_heading_in">
                        <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">Packages</h1>
                        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                            <li className="breadcrumb-item">
                                <a href="/home">
                                    <i className="fa-solid fa-house" /> Home
                                </a>
                            </li>
                            <li className="breadcrumb-item active">Search Results for "{title}"</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div className="container" style={{ paddingBlock: "70px" }}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : (
                        <>
                            <div className="row">
                                {catPkg.length > 0 ? (
                                    catPkg.map((pkg) => (
                                        <div key={pkg._id} className="col-md-6 mb-4">
                                            <div className="card p-3 border">
                                                <Link to={`/package-details/${btoa(pkg._id)}`}>
                                                    <h5 className="text-danger fw-bold">{pkg.title}</h5>
                                                </Link>
                                                <p className="text-muted">{pkg?.service?.map(ser => ser.name).join(", ")}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="fw-bold text-dark">
                                                        ₹{pkg.offerPrice} <br />
                                                        <del className="text-muted">₹{pkg.price}</del>
                                                    </span>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <span className="badge bg-light text-dark me-2">
                                                        Reports in (T&C)<br />
                                                        <strong style={{ color: 'black' }}>{pkg.reportTime}</strong>
                                                    </span>
                                                    <span className="badge bg-light text-dark">
                                                        Age Group<br />
                                                        <strong style={{ color: 'black' }}>{pkg.age}</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-muted">No packages found for "{title}".</p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default Search;
