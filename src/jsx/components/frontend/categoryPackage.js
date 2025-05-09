import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PackageServices from "../../../services/PackageService";

function CategoryPackage() {
  const { id } = useParams(); // Encoded package ID from URL
  const decodedId = atob(id); // Decode the ID
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [catPkg, setCatPkg] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchPackage = async () => {
      
      try {
        const response = await PackageServices.getWebPackageByCategory(
          decodedId
        );
        setCatPkg(response?.data || []);
      } catch (err) {
        setError("Error loading package details");
      } finally {
        setIsLoading(false);
      }
    };

    if (decodedId) fetchPackage();
  }, [decodedId]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = catPkg.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(catPkg.length / productsPerPage);

  return (
    <>
      <section
        className="cs_page_heading cs_center cs_bg_filed"
        data-src="assets/img/page_heading_bg.jpg"
         style={{ backgroundColor: "#123456" }}
      >
        <div className="container">
          <div className="cs_page_heading_in" >
            <h1 className="cs_page_heading_title cs_fs_48 cs_white_color">
              Packages
            </h1>
            <ol className="breadcrumb cs_fs_20 cs_white_color cs_heading_font">
              <li className="breadcrumb-item">
                <Link to="/home">
                  <i className="fa-solid fa-house" /> Home/
                </Link>
              </li>
              <li >Categories</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="shop-content section-ptb">
        <div className="container">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
              {/* Shop Top Bar */}
              <div className="shop-top-bar mb-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="shop-show-product">
                      Showing {indexOfFirstProduct + 1} to{" "}
                      {Math.min(indexOfLastProduct, catPkg.length)} of{" "}
                      {catPkg.length} packages
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Grid */}
              <div className="shop-product-wrap data-grid">
                <div className="row row-mtm30">
                  {currentProducts.map((pkg) => (
                    <div
                      key={pkg._id}
                      className="col-12 col-md-4 shop-col"
                    >
                      <div className="single-product border rounded p-4"  style={{ 
                         width: "100%"
                       }} >
                        <Link to={`/package-details/${btoa(pkg._id)}`}>
                          <h5 className="text-danger fw-bold ">
                            {pkg.title}
                          </h5>
                        </Link>
                        <p className="text-muted  ">
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
                            <strong className="text-dark">
                              {pkg.reportTime}
                            </strong>
                          </span>
                          <span className="badge bg-light text-dark">
                            Age Group
                            <br />
                            <strong className="text-dark">{pkg.age}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination mt-4 d-flex justify-content-center align-items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                    >
                      First
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
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
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
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
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default CategoryPackage;
