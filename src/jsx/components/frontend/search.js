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
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

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

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = catPkg.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(catPkg.length / productsPerPage);

    return (
        <>
            <section className="cs_page_heading cs_center cs_bg_filed" style={{ backgroundColor: "#123456" }}>
                <div className="container">
                    <div className="cs_page_heading_in">
                        <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">Packages</h1>
                        <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
                            <li className="breadcrumb-item">
                                <a href="/home">
                                    <i className="fa-solid fa-house" /> Home/
                                </a>
                            </li>
                            <li >Search Results for "{title}"</li>
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
                            <div className="shop-product-wrap data-grid">
                                <div className="row row-mtm30">
                                    {currentProducts.length > 0 ? (
                                        currentProducts.map((pkg) => (
                                            <div key={pkg._id} className="col-12 col-md-4 shop-col">
                                                <div className="single-product border rounded p-4 h-100">
                                                    <Link to={`/package-details/${btoa(pkg._id)}`}>
                                                        <h5 className="d-block w-100 dominant-link ">{pkg.title}</h5>
                                                    </Link>
                                                    <p className="text-muted">
                                                        {pkg?.service?.map((ser) => ser.name).join(", ")}
                                                    </p>
                                                    <div className="price-box mb-2">
                                                        <span className="new-price dominant-color heading-weight me-2">
                                                            ₹{pkg.offerPrice}
                                                        </span>
                                                        <span className="old-price heading-weight text-decoration-line-through text-muted">
                                                            ₹{pkg.price}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-2 flex-wrap">
                                                        <span className="badge bg-light text-dark">
                                                            Reports in (T&C)
                                                            <br />
                                                            <strong className="text-dark">{pkg.reportTime}</strong>
                                                        </span>
                                                        <span className="badge bg-light text-dark">
                                                            Age Group
                                                            <br />
                                                            <strong className="text-dark">{pkg.age}</strong>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center w-100 text-muted">
                                            No packages found for "{title}".
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="pagination mt-4 d-flex justify-content-center align-items-center gap-2">
                                    <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                                        First
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        className="page-link d-flex align-items-center justify-content-center text-white px-2 py-1 rounded"
                                        style={{ backgroundColor: "red" }}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="ri-arrow-left-line" />
                                    </button>
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`btn btn-sm mx-1 ${
                                                currentPage === index + 1
                                                    ? "bg-success text-white"
                                                    : "bg-light text-dark"
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        className="page-link d-flex align-items-center justify-content-center text-white px-2 py-1 rounded"
                                        style={{ backgroundColor: "red" }}
                                        disabled={currentPage === totalPages}
                                    >
                                        <i className="ri-arrow-right-line" />
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(totalPages)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Last
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

export default Search;
