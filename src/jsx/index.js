import React, { useContext } from "react";
/// React router dom
import { Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard
import Home from "./components/Dashboard/Home";
import DashboardDark from "./components/Dashboard/DashboardDark";
import MyWallet from "./components/Dashboard/MyWallet";
import Invoices from "./components/Dashboard/Invoices";
import CardsCenter from "./components/Dashboard/CardsCenter";
import Transaction from "./components/Dashboard/Transaction";
import TransactionDetails from "./components/Dashboard/TransactionDetails";

// about us
import About from "./components/About/about";
import Terms from "./components/About/termsAndCondition";
import Privacy from "./components/About/privacyPoilcy";
import Contact from "./components/Contact/contact";
import Notification from "./components/Notification/notification";
import AddNotification from "./components/Notification/addNotification";
import Blogs from "./components/Blog/blog";
import AddBlogs from "./components/Blog/addBlog ";
//New Pages

// import Index3 from "./components/Dashboard/Index3";
// import Index4 from "./components/Dashboard/Index4";
// import Index5 from "./components/Dashboard/Index5";
// import Index6 from "./components/Dashboard/Index6";
// import Index7 from "./components/Dashboard/Index7";
// import Index8 from "./components/Dashboard/Index8";

//CMS
// import Content from './components/Cms/Content';
// import Menu from './components/Cms/Menu';
// import EmailTemplate from './components/Cms/EmailTemplate';
// import Blog from './components/Cms/Blog';
// //CMS Linking Pages
// import ContentAdd from './components/Cms/ContentAdd';
// import AddMail from './components/Cms/AddMail';
// import AddBlog from './components/Cms/AddBlog';
// import BlogCategory from './components/Cms/BlogCategory';

/// App
// import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
// import Compose from "./components/AppsMenu/Email/Compose/Compose";
// import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
// import Read from "./components/AppsMenu/Email/Read/Read";
// import Calendar from "./components/AppsMenu/Calendar/Calendar";
// import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";

// /// Product List
// import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
// import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
// import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
// import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
// import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
// import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
// import Customers from "./components/AppsMenu/Shop/Customers/Customers";

/// Charts
// import SparklineChart from "./components/charts/Sparkline";
// import ChartJs from "./components/charts/Chartjs";
// import RechartJs from "./components/charts/rechart";
// import ApexChart from "./components/charts/apexcharts";

/// Bootstrap
// import UiAlert from "./components/bootstrap/Alert";
// import UiAccordion from "./components/bootstrap/Accordion";
// import UiBadge from "./components/bootstrap/Badge";
// import UiButton from "./components/bootstrap/Button";
// import UiModal from "./components/bootstrap/Modal";
// import UiButtonGroup from "./components/bootstrap/ButtonGroup";
// import UiListGroup from "./components/bootstrap/ListGroup";
// import UiCards from "./components/bootstrap/Cards";
// import UiCarousel from "./components/bootstrap/Carousel";
// import UiDropDown from "./components/bootstrap/DropDown";
// import UiPopOver from "./components/bootstrap/PopOver";
// import UiProgressBar from "./components/bootstrap/ProgressBar";
// import UiTab from "./components/bootstrap/Tab";
// import UiPagination from "./components/bootstrap/Pagination";
// import UiGrid from "./components/bootstrap/Grid";
// import UiTypography from "./components/bootstrap/Typography";

/// Plugins
// import Select2 from "./components/PluginsMenu/Select2/Select2";
// import Nestable from "./components/PluginsMenu/Nestable/Nestable";
// import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
// import Toastr from "./components/PluginsMenu/Toastr/Toastr";
// import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
// import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";

//Redux
import Todo from "./pages/Todo";

/// Widget
import Widget from "./pages/Widget";

/// Table
// import SortingTable from "./components/table/SortingTable/SortingTable";
// import FilteringTable from "./components/table/FilteringTable/FilteringTable";
// import DataTable from "./components/table/DataTable";
// import BootstrapTable from "./components/table/BootstrapTable";

// /// Form
// import Element from "./components/Forms/Element/Element";
// import Wizard from "./components/Forms/Wizard/Wizard";
// import CkEditor from "./components/Forms/CkEditor/CkEditor";
// import Pickers from "./components/Forms/Pickers/Pickers";
// import FormValidation from "./components/Forms/FormValidation/FormValidation";

/// Pages
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import ScrollToTop from './pages/ScrollToTop';
import { ThemeContext } from "../context/ThemeContext";
import Banner from "./components/Banner/banner";
import AddBanner from "./components/Banner/addBanner";
import Service from "./components/Service/service";
import AddService from "./components/Service/addService";
import UserManager from "./components/UserManager/user";
// import FrontHeader from "./components/frontend/common/header";
// import FrontFooter from "./components/frontend/common/footer";
// import FrontHome from "./components/frontend/home";
// import FrontAbout from "./components/frontend/about";
// import FrontBlog from "./components/frontend/blog";
// import FrontContact from "./components/frontend/contact";
// import FrontService from "./components/frontend/service";
import Profile from "./components/Profile/profile";


const Markup = () => {

  const allroutes = [
    /// Dashboard
    // { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },
    { url: "dashboard-dark", component: <DashboardDark /> },
    { url: "admin/my-wallet", component: <MyWallet /> },
    { url: "admin/invoices", component: <Invoices /> },
    { url: "admin/cards-center", component: <CardsCenter /> },
    { url: "admin/transaction-history", component: <Transaction /> },
    { url: "admin/transaction-details", component: <TransactionDetails /> },

    // about
    { url: "admin/users", component: <UserManager /> },
    { url: "admin/about", component: <About /> },
    { url: "admin/terms", component: <Terms /> },
    { url: "admin/privacy", component: <Privacy /> },
    { url: "admin/contact", component: <Contact /> },
    { url: "admin/notification", component: <Notification /> },
    { url: "admin/add-notification", component: <AddNotification /> },
    { url: "admin/blogs", component: <Blogs /> },
    { url: "admin/add-blogs", component: <AddBlogs /> },
    { url: "admin/banner", component: <Banner /> },
    { url: "admin/add-banner", component: <AddBanner /> },
    { url: "admin/service", component: <Service /> },
    { url: "admin/add-service", component: <AddService /> },
    { url: "admin/profile", component: <Profile /> },

    // new pages
    // { url: "index-3", component: <Index3/> },
    // { url: "index-4", component: <Index4/> },
    // { url: "index-5", component: <Index5/> },
    // { url: "index-6", component: <Index6/> },
    // { url: "index-7", component: <Index7/> },
    // { url: "index-8", component: <Index8/> },

    //Cms
    // { url: 'content', component: <Content/> },
    // { url: 'menu', component: <Menu/> },
    // { url: 'email-template', component: <EmailTemplate/> },
    // { url: 'blog', component: <Blog/> },
    // { url: 'add-content', component: <ContentAdd/> },
    // { url: 'add-email', component: <AddMail/> },
    // { url: 'add-blog', component: <AddBlog/> },
    // { url: 'blog-category', component: <BlogCategory/> },

    /// Apps
    // { url: "app-profile", component: <AppProfile/> },
    // { url: "email-compose", component: <Compose/> },
    // { url: "email-inbox", component: <Inbox/> },
    // { url: "email-read", component: <Read/> },
    // { url: "app-calender", component: <Calendar/> },
    // { url: "post-details", component: <PostDetails/> },

    /// Chart
    // { url: "chart-sparkline", component: <SparklineChart/> },
    // { url: "chart-chartjs", component: <ChartJs/> },    
    // { url: "chart-apexchart", component: <ApexChart/> },
    // { url: "chart-rechart", component: <RechartJs /> },

    /// Bootstrap
    // { url: "ui-alert", component: <UiAlert/> },
    // { url: "ui-badge", component: <UiBadge/> },
    // { url: "ui-button", component: <UiButton/> },
    // { url: "ui-modal", component: <UiModal/> },
    // { url: "ui-button-group", component: <UiButtonGroup/> },
    // { url: "ui-accordion", component: <UiAccordion/> },
    // { url: "ui-list-group", component: <UiListGroup/> },
    // { url: "ui-card", component: <UiCards/> },
    // { url: "ui-carousel", component: <UiCarousel/> },
    // { url: "ui-dropdown", component: <UiDropDown/> },
    // { url: "ui-popover", component: <UiPopOver/> },
    // { url: "ui-progressbar", component: <UiProgressBar/> },
    // { url: "ui-tab", component: <UiTab/> },
    // { url: "ui-pagination", component: <UiPagination/> },
    // { url: "ui-typography", component: <UiTypography/> },
    // { url: "ui-grid", component: <UiGrid/> },

    /// Plugin
    // { url: "uc-select2", component: <Select2/> },
    // { url: "uc-nestable", component: <Nestable/> },
    // { url: "uc-sweetalert", component: <MainSweetAlert/> },
    // { url: "uc-toastr", component: <Toastr/> },
    // { url: "map-jqvmap", component: <JqvMap/> },
    // { url: "uc-lightgallery", component: <Lightgallery/> },

    ///Redux
    { url: "todo", component: <Todo /> },

    /// Widget
    { url: "widget-basic", component: <Widget /> },

    /// Shop
    // { url: "ecom-product-grid", component: <ProductGrid/> },
    // { url: "ecom-product-list", component: <ProductList/> },
    // { url: "ecom-product-detail", component: <ProductDetail/> },
    // { url: "ecom-product-order", component: <ProductOrder/> },
    // { url: "ecom-checkout", component: <Checkout/> },
    // { url: "ecom-invoice", component: <Invoice/> },
    // { url: "ecom-product-detail", component: <ProductDetail/> },
    // { url: "ecom-customers", component: <Customers/> },

    /// Form
    //   { url: "form-element", component: <Element/> },
    //   { url: "form-wizard", component: <Wizard/> },
    //   { url: "form-ckeditor", component: <CkEditor/> },
    //   { url: "form-pickers", component: <Pickers/> },
    //   { url: "form-validation", component: <FormValidation/> },

    //   /// table
    // { url: 'table-filtering', component: <FilteringTable/> },
    //   { url: 'table-sorting', component: <SortingTable/> },
    //   { url: "table-datatable-basic", component: <DataTable/> },
    //   { url: "table-bootstrap-basic", component: <BootstrapTable/> },

    /// pages        
    { url: "page-error-400", component: <Error400 /> },
    { url: "page-error-403", component: <Error403 /> },
    { url: "page-error-404", component: <Error404 /> },
    { url: "page-error-500", component: <Error500 /> },
    { url: "page-error-503", component: <Error503 /> },
  ];
 
  return (
    <>

      <Routes>
        <Route path='/page-lock-screen' element={<LockScreen />} />

        <Route path='/page-error-400' element={<Error400 />} />
        <Route path='/page-error-403' element={<Error403 />} />
        <Route path='/page-error-404' element={<Error404 />} />
        <Route path='/page-error-500' element={<Error500 />} />
        <Route path='/page-error-503' element={<Error503 />} />
        <Route element={<MainLayout />} >
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
        {/* <Route element={<FrontMainLayout />}>
          <Route path='/home' element={<FrontHome />} />
          <Route path='/about-us' element={<FrontAbout />} />
          <Route path='/contact-us' element={<FrontContact />} />
          <Route path='/services' element={<FrontService />} />
          <Route path='/blogs' element={<FrontBlog />} />
        </Route> */}
      </Routes>
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { sidebariconHover } = useContext(ThemeContext);
  const sideMenu = useSelector(state => state.sideMenu);
  return (
    <>
      <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${sideMenu ? "menu-toggle" : ""}`}>
        <Nav />
        <div className="content-body" style={{ minHeight: window.screen.height - 60 }}>
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
};



export default Markup;
