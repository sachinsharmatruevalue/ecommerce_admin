import React, { useState } from "react";
import PackageServices from "../../../services/PackageService";
import useAsync from "../../hooks/useAsync";
import { Link } from "react-router-dom";

function Pakage() {
  const {
    data: packageData,
    error: packageError,
    isLoading: packageLoading,
  } = useAsync(PackageServices.getPopularPackage);

  const pkg = packageData?.data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentPackages = pkg.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(pkg.length / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="shop-content section-ptb">
      <div className="container">
        <div className="row row-mtm">
          {/* Shop Top Bar */}
          <div className="shop-top-bar">
            <div className="row row-mtm15 align-items-md-center">
              <div className="col-12 col-sm-6 col-md-7 col-lg-8">
                <div className="shop-filter-view ul-mt15 align-items-center">
                  <div className="shop-view-mode">
                    <div className="ul-mt10">
                      <button
                        type="button"
                        className="shop-view-btn dominant-color icon-16 opacity-100 disabled"
                      >
                        <i className="ri-layout-grid-line" />
                      </button>
                      <button
                        type="button"
                        className="shop-view-btn body-color icon-16 opacity-100"
                      >
                        <i className="ri-list-unordered" />
                      </button>
                    </div>
                  </div>
                  <div className="shop-show-product">
                    Showing {indexOfFirst + 1} to{" "}
                    {Math.min(indexOfLast, pkg.length)} of {pkg.length} packages
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="shop-product-wrap data-grid">
            <div className="row row-mtm30">
              {packageLoading ? (
                <div className="text-center w-100">Loading packages...</div>
              ) : packageError ? (
                <div className="text-center w-100 text-danger">
                  Failed to load packages.
                </div>
              ) : currentPackages.length > 0 ? (
                currentPackages.map((pack) => (
                  <div
                    key={pack._id}
                    className="col-6 col-md-4 col-xl-3 shop-col"
                  >
                    <div className="single-product border rounded h-100">
                      <div className="row single-product-wrap">
                        <div className="product-content w-100 p-3">
                          <div className="pro-content">
                            <div className="product-title mb-2">
                              <span className="d-block heading-weight text-uppercase">
                                <Link
                                  to={`/package-details/${btoa(pack._id)}`}
                                  className="d-block w-100 dominant-link  "
                                >
                                  {pack.title}
                                </Link>
                              </span>
                            </div>
                            <div className="PackagesCarousel_details_tags__nzRsl">
                              <div className="PackagesCarousel_details_tags_title__9WjVn">
                                {pack?.service?.map((ser) => ser.name).join(", ")}
                              </div>
                            </div>
                            <div className="price-box mb-2">
                                                        <span className="new-price dominant-color heading-weight me-2">
                                                            ₹{pack.offerPrice}
                                                        </span>
                                                        <span className="old-price heading-weight text-decoration-line-through text-muted">
                                                            ₹{pack.price}
                                                        </span>
                                                    </div>
                                                     <div className="d-flex gap-2 flex-wrap">
                          <span className="badge bg-light text-dark">
                            Reports in (T&C)
                            <br />
                            <strong className="text-dark">
                              {pack.reportTime}
                            </strong>
                          </span>
                          <span className="badge bg-light text-dark">
                            Age Group
                            <br />
                            <strong className="text-dark">{pack.age}</strong>
                          </span>
                        </div>
                           
                             
                           
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center w-100">No package available</div>
              )}
            </div>

            {/* Pagination Controls */}
            {pkg.length > productsPerPage && (
              <div className="pagination-controls d-flex justify-content-center mt-4">
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="align-self-center">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-outline-primary ms-2"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pakage;
