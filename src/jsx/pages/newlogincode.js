import React, { useState, useEffect } from 'react';
import AdminServices from '../../services/AdminService';
import Cookies from 'js-cookie';
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';
import { Link, useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
// Image imports
import logo from "../../images/logo-full-white.png";
import loginbg from "../../images/bg-login.jpg";

const PasswordToggle = ({ password, setPassword }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="form-group">
      <label htmlFor="password" style={{ marginBottom: '10px' }}>
        <i className="fa fa-lock" />
      </label>
      <input
        type={passwordVisible ? 'text' : 'password'}
        className="form-control"
        id="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span
        className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
        onClick={() => setPasswordVisible(!passwordVisible)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

function Login({ setIsAuthenticated, setRole, errorMessage, successMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();
  const nav  = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const rememberedEmail = Cookies.get('rememberEmail');
    const rememberedPassword = Cookies.get('rememberPassword');

    if (rememberedEmail) setEmail(rememberedEmail);
    if (rememberedPassword) setPassword(rememberedPassword);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setErrors({ email: "*Email is required", password: "*Password is required" });
      return;
    }
  
    try {
      const data = await AdminServices.login({ email, password });
  
      if (data.status === true) {
        console.log("hello")
        localStorage.setItem('authToken', data?.token);
        localStorage.setItem('userRole', data?.data?.role);
        localStorage.setItem('name', data?.data?.name);
        localStorage.setItem('image', data?.data?.image);
    
        const rememberPassword = document.getElementById('flexCheckChecked').checked;
        if (rememberPassword) {
          Cookies.set('rememberEmail', email, { expires: 7 });
          Cookies.set('rememberPassword', password, { expires: 7 });
        } else {
          Cookies.remove('rememberEmail');
          Cookies.remove('rememberPassword');
        }
        
        // dispatch(loadingToggleAction(true));	
        // dispatch(loginAction(email, password, nav));
        
      
          nav('/dashboard');  // **Manual redirect after login**
      
    } 
     else {
        setError('*Invalid Credentials');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(`*${err.response.data.message}`);
      } else {
        setError('*Something went wrong. Please try again.');
      }
    }
  };
  

  return (
    <div className="login-main-page" style={{ backgroundImage: `url(${loginbg})` }}>
      <div className="login-wrapper">
        <div className="login-aside-left">
          <Link to="/dashboard" className="login-logo">
            <img src={logo} alt="" />
          </Link>
          <div className="login-description">
            <h2 className="main-title mb-2">Welcome To Dompet</h2>
          </div>
        </div>
        <div className="login-aside-right">
          <div className="row m-0 justify-content-center h-100 align-items-center">
            <div className="p-5">
              <div className="authincation-content">
                <div className="auth-form-1">
                  <h3 className="dz-title mb-1">Sign in</h3>
                  <p>Sign in by entering information below</p>

                  {errorMessage && <div className="bg-red-300 text-red-900 p-1 my-2">{errorMessage}</div>}
                  {successMessage && <div className="bg-green-300 text-green-900 p-1 my-2">{successMessage}</div>}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label><strong>Email</strong></label>
                      <input type="email" className="form-control" placeholder="example@example.com"
                        value={email} onChange={(e) => setEmail(e.target.value.trim())} />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <PasswordToggle password={password} setPassword={setPassword} />

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block">Log In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  errorMessage: state.auth.errorMessage,
  successMessage: state.auth.successMessage,
}))(Login);
