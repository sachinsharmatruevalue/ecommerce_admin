import { lazy, Suspense, useEffect } from 'react';
/// Components
import Index from './jsx/index';
import { connect, useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams,Outlet } from 'react-router-dom';
// action
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style

import './vendor/swiper/css/swiper-bundle.min.css';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

const FrontHeader = lazy(() => import('./jsx/components/frontend/common/header'));
const FrontFooter = lazy(() => import('./jsx/components/frontend/common/footer'));
const FrontHome = lazy(() => import('./jsx/components/frontend/home'));
const FrontAbout = lazy(() => import('./jsx/components/frontend/about'));
const FrontBlog = lazy(() => import('./jsx/components/frontend/blog'));
const FrontContact = lazy(() => import('./jsx/components/frontend/contact'));
const FrontService = lazy(() => import('./jsx/components/frontend/service'));
const FrontServiceDetail = lazy(() => import('./jsx/components/frontend/serviceDetails'));
const FrontBlogDetail = lazy(() => import('./jsx/components/frontend/blogDetails'));

const SignUp = lazy(() => import('./jsx/pages/Registration'));
const Login = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
    });
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
function FrontMainLayout() {
   
    return (
        <>
            <div id="front-main-wrapper" >
                <FrontHeader />

                <Outlet />

                <FrontFooter />
            </div>

        </>
    )
};

function App(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useEffect(() => {
    //     checkAutoLogin(dispatch, navigate);
    // }, []);

    let routeblog = (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/page-register' element={<SignUp />} />
            <Route element={<FrontMainLayout />}>
            <Route path='' element={<FrontHome />} />
                <Route path='/home' element={<FrontHome />} />
                <Route path='/about-us' element={<FrontAbout />} />
                <Route path='/contact-us' element={<FrontContact />} />
                <Route path='/services' element={<FrontService />} />
                <Route path='/blogs' element={<FrontBlog />} />
                <Route path="/blog-details/:slug" element={<FrontBlogDetail />} />
                <Route path="/service-details/:id" element={<FrontServiceDetail />} />
            </Route>

        </Routes>
    );
    if (props.isAuthenticated) {
        return (
            <>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Index />
                </Suspense>
            </>
        );

    } else {
        return (
            <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >

                    {routeblog}
                </Suspense>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 