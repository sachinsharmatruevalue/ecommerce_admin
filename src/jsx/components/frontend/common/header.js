import React, { useState, useContext, useEffect } from 'react';
import CategoryServices from '../../../../services/CategoryService';
import useAsync from '../../../hooks/useAsync';
import { Link, useNavigate } from 'react-router-dom';
import '../css/css/style5.css';
import '../css/css/account.css';
import '../css/css/blog.css';
import '../css/css/collection.css';
import '../css/css/collection5.css';
import '../css/css/other.css';
import '../css/css/plugin.css';
import '../css/css/product.css';
import '../css/css/theme.css';
import '../css/css/theme5.css';


const Header = () => {
  const { data: categoryData, error: bannerError, isLoading: bannerLoading } = useAsync(CategoryServices.getWebCat);
  const category = categoryData?.data || [];
  const [search, setSearch] = useState("");
      const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
        navigate(`/search?title=${encodeURIComponent(search)}`);
    }
};
    return (
        <>

  {/* header-top start */}
  <div className="header-top-area">
    {/* notification-bar start */}
    <div className="notification-bar ptb-10 secondary-bg">
      <div className="container d-none d-xl-block">
        <div className="row">
          <div className="col-xl-5">
            <span className="d-inline-block text-white">
              Free shipping for above $98.00!
            </span>
          </div>
          <div className="col-xl-7">
            <ul className="ul-mt30 justify-content-xl-end">
              <li>
                <span className="d-inline-block text-white">
                  <i className="ri-mail-line icon-16 mer-5" />
                  <a
                    href="mailto:demo@demo.com"
                    className="d-inline-block text-white"
                  >
                    demo@demo.com
                  </a>
                </span>
              </li>
              <li>
                <span className="d-inline-block text-white">
                  <i className="ri-time-line icon-16 mer-5" />
                  Mon-Fri: 8:00am-7:00pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="notification-marquee d-flex d-xl-none overflow-hidden">
        <div className="notification-marquee-row notification-marquee1 d-flex">
          <div className="text-white psl-15 text-nowrap">
            Free shipping for above $98.00!
          </div>
          <div className="text-white psl-15 text-nowrap">
            <i className="ri-mail-line icon-16 mer-5" />
            <a
              href="mailto:demo@demo.com"
              className="d-inline-block text-white"
            >
              demo@demo.com
            </a>
          </div>
          <div className="text-white psl-15 text-nowrap">
            <i className="ri-time-line icon-16 mer-5" />
            Mon-Fri: 8:00am-7:00pm
          </div>
        </div>
        <div className="notification-marquee-row notification-marquee2 d-flex">
          <div className="text-white psl-15 text-nowrap">
            Free shipping for above $98.00!
          </div>
          <div className="text-white psl-15 text-nowrap">
            <i className="ri-mail-line icon-16 mer-5" />
            <a
              href="mailto:demo@demo.com"
              className="d-inline-block text-white"
            >
              demo@demo.com
            </a>
          </div>
          <div className="text-white psl-15 text-nowrap">
            <i className="ri-time-line icon-16 mer-5" />
            Mon-Fri: 8:00am-7:00pm
          </div>
        </div>
      </div>
    </div>
    {/* notification-bar end */}
    {/* header-top-first start */}
    <div className="header-top-first ptb-15 ptb-xl-20 body-bg">
      <div className="container">
        <div className="row align-items-center header-area">
          {/* header-logo start */}
          <div className="col-6 col-xl-5 header-element header-logo-call">
            <div className="d-xl-flex flex-xl-wrap">
              <div className="header-theme-logo">
                <a href="index.html" className="d-block theme-logo">
                  <img
                    src="/frontend/assets/image/index5/logo.png" 
                    className="width-88 width-xl-144 img-fluid logos"
                    alt="logo" 
                  />
                </a>
              </div>
              <div className="header-call d-none d-xl-block psl-30 msl-30 bsl">
                <div className="header-phone-text d-flex flex-wrap align-items-center">
                  <span className="dominant-color font-20 width-40 height-40 extra-bg d-flex align-items-center justify-content-center rounded-circle">
                    <i className="ri-phone-line d-block lh-1" />
                  </span>
                  <div className="header-text-content width-calc-40 psl-15">
                    <span className="d-block">24x7 Support</span>
                    <a
                      href="tel:(+00)123456789"
                      className="d-inline-block dominant-link mst-4 heading-weight fw-bold"
                    >
                      (+00)-123456789
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-logo end */}
          {/* header-icon start */}
          <div className="col-6 col-xl-7 header-element header-icon">
            <div className="header-icon-block d-flex justify-content-end">
              <ul className="ul-mt30 flex-nowrap align-items-center header-icon-element">
                <li className="header-icon-wrap search-bar-wrap d-none d-xl-block">
                  {/* header-search start */}
                  <div className="header-search">
                                
                    <form
                     onSubmit={handleSearch}
                      className="search-form"
                    >
                      <div className="search-bar position-relative">
                        <div className="form-search d-flex flex-wrap border-full border-radius2 overflow-hidden">
                          <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Your Package"
                            className="search-input width-calc-48 h-auto border-0 rounded-0"
                            style={{ width: '300px' }}
                          />
                          <button
                            type="submit"
                            onclick="window.location.href='search-product.html'"
                            className="d-block width-48 dominant-link font-16 font-xl-20"
                            aria-label="Go to search"
                            disabled=""
                          >
                            <i className="ri-search-line d-block lh-1" />
                          </button>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                  {/* header-search end */}
                </li>
                <li className="header-icon-wrap toggler-wrap d-xl-none">
                  <div className="header-icon-wrapper">
                    <a
                      href="javascript:void(0)"
                      className="d-block header-icon-toggler toggler-btn"
                      aria-label="Menu toggler button"
                    >
                      <span className="d-block header-block-icon dominant-link font-16 font-xl-24">
                        <i className="ri-menu-line d-block lh-1" />
                      </span>
                    </a>
                  </div>
                </li>
                <li className="header-icon-wrap search-wrap d-xl-none">
                  <div className="header-icon-wrapper">
                    <a
                      href="#searchmodal"
                      className="d-block header-icon-search"
                      data-bs-toggle="modal"
                      aria-label="Search modal"
                    >
                      <span className="d-block header-block-icon dominant-link font-16 font-xl-24">
                        <i className="ri-search-line d-block lh-1" />
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* header-icon end */}
        </div>
      </div>
    </div>
    {/* header-top-first end */}
  </div>
  {/* header-top end */}
  {/* header-bottom start */}
  <div className="header-bottom-area d-xl-block d-none position-relative body-bg">
    <div className="container">
      <div className="bst">
        <div className="row align-items-center">
          {/* vega-menu start */}
          <div className="col-xl-3">
            <div className="vegamenu-content position-relative ber">
              <a
                href="index.html"
                className="menu-link d-flex flex-wrap align-items-center ptb-12 per-15 body-bg"
              >
                <span className="width-16 icon-16 fw-normal lh-1">
                  <i className="ri-menu-line" />
                </span>
                <span className="menu-title width-calc-32 psl-10 text-uppercase heading-weight fw-bold">
                   categories
                </span>
                <span className="width-16 icon-16 fw-normal lh-1">
                  <i className="ri-arrow-down-s-line" />
                </span>
              </a>
              <div className="main-wrap collapse position-absolute top-100 start-0 end-0 body-bg z-2 DropDownSlide box-shadow">
                <ul className="menu-ul">
                {category.map((cat) => (
  <>
    {/* First li with static content (if needed, you can keep or customize this) */}
    <li className="menu-li">
        <Link
        to={`/cat-package/${btoa(cat._id)}`}
        className="body-dominant-color d-flex align-items-center ptb-10 plr-15"
      >
        <span className="width-16 lh-1">
          <img
            src={`${process.env.REACT_APP_URL || ""}${cat.image}`}
            className="w-100 img-fluid"
            alt={cat?.title || "cat image"}
          />
        </span>
        <span className="menusub-title width-calc-16 psl-10">
        {cat.title}
        </span>
        </Link>
            </li>

   
  </>
))}
                </ul>
              </div>
            </div>
          </div>
          {/* vega-menu end */}
          {/* main-menu start */}
          <div className="col-xl-6">
            <div className="mainmenu-content">
              <div className="main-wrap">
                <ul className="menu-ul d-flex flex-wrap">
                  <li className="menu-li">
                    <a
                      href="/"
                      className="menu-link d-flex align-items-center ptb-12 plr-15"
                    >
                      <span className="menu-title text-uppercase heading-weight fw-bold">
                        Home
                      </span>
                    </a>
                  </li>
                  <li className="menu-li">
                    <a
                      href="/package"
                      className="menu-link d-flex align-items-center ptb-12 plr-15"
                    >
                      <span className="menu-title text-uppercase heading-weight fw-bold">
                        Package
                      </span>
                    </a>
                  </li>
                  <li className="menu-li">
                    <a
                      href="/services"
                      className="menu-link d-flex align-items-center ptb-12 plr-15"
                    >
                      <span className="menu-title text-uppercase heading-weight fw-bold">
                        Service
                      </span>
                    </a>
                  </li>
                  <li className="menu-li">
                    <a
                      href="/blogs"
                      className="menu-link d-flex align-items-center ptb-12 plr-15"
                    >
                      <span className="menu-title text-uppercase heading-weight fw-bold">
                        Blog
                      </span>
                    </a>
                  </li>
                  <li className="menu-li">
                    <a
                      href="/contact-us"
                      className="menu-link d-flex align-items-center ptb-12 plr-15"
                    >
                      <span className="menu-title text-uppercase heading-weight fw-bold">
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* main-menu end */}
        </div>
      </div>
    </div>
  </div>
  {/* header-bottom end */}


        </>
    )
}
export default Header;
