import React, { useState } from 'react';

// Since Material UI is not available in this environment, I'll create custom components
// that mimic Material UI styling. In your actual project, you would import these from @mui/material

const GymAuthSystem = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });
  
  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (field, value) => {
    setLoginForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignupChange = (field, value) => {
    setSignupForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login API call here
    console.log('Login attempted with:', loginForm);
    setAlert({
      show: true,
      message: 'Login functionality will be connected to backend API',
      type: 'info'
    });
    setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      setAlert({
        show: true,
        message: 'Passwords do not match!',
        type: 'error'
      });
      setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
      return;
    }
    // Add your signup API call here
    console.log('Signup attempted with:', signupForm);
    setAlert({
      show: true,
      message: 'Sign up functionality will be connected to backend API',
      type: 'info'
    });
    setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setAlert({ show: false, message: '', type: 'success' });
  };

  // Custom Material UI-style components
  const MuiTextField = ({ 
    label, 
    type = 'text', 
    value, 
    onChange, 
    required = false,
    startIcon,
    endIcon,
    onEndIconClick
  }) => (
    <div className="mui-textfield">
      <label className="mui-label">{label}</label>
      <div className="mui-input-container">
        {startIcon && <span className="mui-start-icon">{startIcon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="mui-input"
          placeholder={` `}
        />
        {endIcon && (
          <span className="mui-end-icon" onClick={onEndIconClick}>
            {endIcon}
          </span>
        )}
      </div>
    </div>
  );

  const MuiButton = ({ children, onClick, variant = 'contained', fullWidth = false, type = 'button' }) => (
    <button
      type={type}
      onClick={onClick}
      className={`mui-button ${variant === 'contained' ? 'mui-button-contained' : 'mui-button-text'} ${fullWidth ? 'mui-button-fullwidth' : ''}`}
    >
      {children}
    </button>
  );

  const MuiCard = ({ children }) => (
    <div className="mui-card">
      {children}
    </div>
  );

  const MuiAlert = ({ type, message, onClose }) => (
    <div className={`mui-alert mui-alert-${type}`}>
      <span className="mui-alert-icon">
        {type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}
      </span>
      <span className="mui-alert-message">{message}</span>
      {onClose && (
        <span className="mui-alert-close" onClick={onClose}>×</span>
      )}
    </div>
  );

  return (
    <>
      <style jsx>{`
        /* Custom Material UI-style CSS */
        .auth-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .auth-wrapper {
          width: 100%;
          max-width: 450px;
        }

        .mui-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          padding: 40px 32px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-title {
          font-size: 2rem;
          font-weight: 600;
          color: #1976d2;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .auth-subtitle {
          color: #666;
          font-size: 0.875rem;
          font-weight: 400;
        }

        .mui-textfield {
          margin-bottom: 24px;
          width: 100%;
        }

        .mui-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #424242;
          margin-bottom: 8px;
        }

        .mui-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .mui-input {
          width: 100%;
          padding: 16px 12px;
          padding-left: 48px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s ease;
          background: #fafafa;
          font-family: inherit;
        }

        .mui-input:focus {
          outline: none;
          border-color: #1976d2;
          background: white;
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }

        .mui-input:hover {
          border-color: #1976d2;
          background: white;
        }

        .mui-start-icon {
          position: absolute;
          left: 12px;
          z-index: 1;
          color: #757575;
          font-size: 1.25rem;
          pointer-events: none;
        }

        .mui-end-icon {
          position: absolute;
          right: 12px;
          z-index: 1;
          color: #757575;
          font-size: 1.25rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .mui-end-icon:hover {
          color: #1976d2;
        }

        .mui-button {
          font-family: inherit;
          font-weight: 500;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
        }

        .mui-button-contained {
          background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
          color: white;
          box-shadow: 0 4px 8px rgba(25, 118, 210, 0.2);
        }

        .mui-button-contained:hover {
          background: linear-gradient(135deg, #1565c0 0%, #1e88e5 100%);
          box-shadow: 0 6px 16px rgba(25, 118, 210, 0.3);
          transform: translateY(-1px);
        }

        .mui-button-text {
          background: transparent;
          color: #1976d2;
        }

        .mui-button-text:hover {
          background: rgba(25, 118, 210, 0.08);
        }

        .mui-button-fullwidth {
          width: 100%;
        }

        .mui-alert {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 0.875rem;
          gap: 12px;
        }

        .mui-alert-success {
          background: #e8f5e8;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
        }

        .mui-alert-error {
          background: #ffebee;
          color: #c62828;
          border: 1px solid #ffcdd2;
        }

        .mui-alert-info {
          background: #e3f2fd;
          color: #1976d2;
          border: 1px solid #bbdefb;
        }

        .mui-alert-close {
          margin-left: auto;
          cursor: pointer;
          font-size: 1.25rem;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }

        .mui-alert-close:hover {
          opacity: 1;
        }

        .auth-switch {
          text-align: center;
          margin-top: 24px;
          color: #666;
          font-size: 0.875rem;
        }

        .auth-form {
          margin-top: 24px;
        }

        @media (max-width: 480px) {
          .mui-card {
            padding: 24px 20px;
          }
          
          .auth-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
      
      <div className="auth-container">
        <div className="auth-wrapper">
          <MuiCard>
            {alert.show && (
              <MuiAlert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert({ show: false, message: '', type: 'success' })}
              />
            )}
            
            <div className="auth-header">
              <h1 className="auth-title">Gym Scheduler</h1>
              <p className="auth-subtitle">
                {isLogin ? 'Welcome back! Please sign in to continue.' : 'Create your account to get started.'}
              </p>
            </div>

            <div className="auth-form">
              {isLogin ? (
                // Login Form
                <div>
                  <MuiTextField
                    label="Email Address"
                    type="email"
                    value={loginForm.email}
                    onChange={(value) => handleLoginChange('email', value)}
                    required
                    startIcon="📧"
                  />
                  
                  <MuiTextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(value) => handleLoginChange('password', value)}
                    required
                    startIcon="🔒"
                    endIcon={showPassword ? "🙈" : "👁️"}
                    onEndIconClick={() => setShowPassword(!showPassword)}
                  />
                  
                  <MuiButton
                    variant="contained"
                    fullWidth
                    onClick={handleLogin}
                  >
                    Sign In
                  </MuiButton>
                </div>
              ) : (
                // Sign Up Form
                <div>
                  <MuiTextField
                    label="Full Name"
                    value={signupForm.fullName}
                    onChange={(value) => handleSignupChange('fullName', value)}
                    required
                    startIcon="👤"
                  />
                  
                  <MuiTextField
                    label="Email Address"
                    type="email"
                    value={signupForm.email}
                    onChange={(value) => handleSignupChange('email', value)}
                    required
                    startIcon="📧"
                  />
                  
                  <MuiTextField
                    label="Phone Number"
                    type="tel"
                    value={signupForm.phone}
                    onChange={(value) => handleSignupChange('phone', value)}
                    required
                    startIcon="📱"
                  />
                  
                  <MuiTextField
                    label="Organization Name"
                    value={signupForm.organization}
                    onChange={(value) => handleSignupChange('organization', value)}
                    required
                    startIcon="🏢"
                  />
                  
                  <MuiTextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={signupForm.password}
                    onChange={(value) => handleSignupChange('password', value)}
                    required
                    startIcon="🔒"
                    endIcon={showPassword ? "🙈" : "👁️"}
                    onEndIconClick={() => setShowPassword(!showPassword)}
                  />
                  
                  <MuiTextField
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={signupForm.confirmPassword}
                    onChange={(value) => handleSignupChange('confirmPassword', value)}
                    required
                    startIcon="🔒"
                    endIcon={showConfirmPassword ? "🙈" : "👁️"}
                    onEndIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                  
                  <MuiButton
                    variant="contained"
                    fullWidth
                    onClick={handleSignup}
                  >
                    Create Account
                  </MuiButton>
                </div>
              )}
            </div>
            
            <div className="auth-switch">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <MuiButton
                variant="text"
                onClick={toggleAuthMode}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </MuiButton>
            </div>
          </MuiCard>
        </div>
      </div>
    </>
  );
};

export default GymAuthSystem;