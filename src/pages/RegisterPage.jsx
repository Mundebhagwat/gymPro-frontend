import React, { useState } from 'react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    password: '',
    confirmPassword: ''
  });
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setAlert({
        show: true,
        message: 'Passwords do not match!',
        type: 'error'
      });
      setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
      return;
    }
    // Add your signup API call here
    console.log('Signup attempted with:', formData);
    setAlert({
      show: true,
      message: 'Account created successfully! Welcome to the gym family!',
      type: 'success'
    });
    setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
  };

  const InputField = ({ 
    label, 
    type = 'text', 
    value, 
    onChange, 
    required = false,
    startIcon,
    endIcon,
    onEndIconClick,
    placeholder
  }) => (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="input-container">
        {startIcon && <span className="input-icon-start">{startIcon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="input-field"
          placeholder={placeholder}
        />
        {endIcon && (
          <span className="input-icon-end" onClick={onEndIconClick}>
            {endIcon}
          </span>
        )}
      </div>
    </div>
  );

  const Button = ({ children, onClick, variant = 'primary', fullWidth = false, type = 'button' }) => (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${fullWidth ? 'btn-full' : ''}`}
    >
      {children}
    </button>
  );

  const Alert = ({ type, message, onClose }) => (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">
        {type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}
      </span>
      <span className="alert-message">{message}</span>
      {onClose && (
        <span className="alert-close" onClick={onClose}>×</span>
      )}
    </div>
  );

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .signup-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .signup-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 70%, rgba(255, 193, 7, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(156, 39, 176, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.1) 0%, transparent 50%);
          animation: backgroundFloat 12s ease-in-out infinite alternate;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes backgroundFloat {
          0% { 
            opacity: 0.3;
            transform: translateY(0px) scale(1);
          }
          100% { 
            opacity: 0.6;
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .signup-card {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(25px);
          border-radius: 28px;
          padding: 40px 36px;
          width: 100%;
          max-width: 520px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 1;
          animation: slideIn 1s ease-out;
        }

        .signup-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .gym-logo {
          font-size: 2.8rem;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffd700 0%, #ff6b35 25%, #f7931e 50%, #c471ed 75%, #12d8fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          animation: logoGlow 3s ease-in-out infinite alternate;
        }

        @keyframes logoGlow {
          0% { filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.3)); }
          100% { filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.6)); }
        }

        .signup-title {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .signup-subtitle {
          color: #94a3b8;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
        }

        .signup-form {
          margin-top: 32px;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 10px;
          letter-spacing: 0.02em;
        }

        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-field {
          width: 100%;
          padding: 16px 18px;
          padding-left: 52px;
          background: rgba(30, 30, 40, 0.7);
          border: 2px solid rgba(100, 116, 139, 0.3);
          border-radius: 14px;
          font-size: 0.95rem;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          backdrop-filter: blur(6px);
        }

        .input-field::placeholder {
          color: #64748b;
        }

        .input-field:focus {
          outline: none;
          border-color: #f59e0b;
          background: rgba(30, 30, 40, 0.9);
          box-shadow: 
            0 0 0 3px rgba(245, 158, 11, 0.1),
            0 6px 12px rgba(0, 0, 0, 0.2);
          transform: translateY(-1px);
        }

        .input-field:hover:not(:focus) {
          border-color: rgba(245, 158, 11, 0.5);
          background: rgba(30, 30, 40, 0.8);
        }

        .input-icon-start {
          position: absolute;
          left: 16px;
          z-index: 1;
          font-size: 1.2rem;
          pointer-events: none;
          opacity: 0.8;
        }

        .input-icon-end {
          position: absolute;
          right: 16px;
          z-index: 1;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.2s ease;
          opacity: 0.7;
        }

        .input-icon-end:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .btn {
          font-family: inherit;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 14px;
          padding: 16px 28px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          transition: left 0.6s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%);
          color: white;
          box-shadow: 
            0 6px 12px rgba(245, 158, 11, 0.3),
            0 3px 6px rgba(0, 0, 0, 0.2);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%);
          box-shadow: 
            0 10px 20px rgba(245, 158, 11, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px);
        }

        .btn-primary:active {
          transform: translateY(0px);
          box-shadow: 
            0 4px 8px rgba(245, 158, 11, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          background: transparent;
          color: #f59e0b;
          border: 2px solid rgba(245, 158, 11, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(245, 158, 11, 0.1);
          border-color: #f59e0b;
          transform: translateY(-1px);
        }

        .btn-full {
          width: 100%;
        }

        .alert {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 0.85rem;
          gap: 10px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .alert-success {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border-color: rgba(34, 197, 94, 0.25);
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border-color: rgba(239, 68, 68, 0.25);
        }

        .alert-info {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.25);
        }

        .alert-close {
          margin-left: auto;
          cursor: pointer;
          font-size: 1.2rem;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }

        .alert-close:hover {
          opacity: 1;
        }

        .divider {
          text-align: center;
          margin: 28px 0;
          position: relative;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(100, 116, 139, 0.3);
        }

        .divider span {
          background: rgba(10, 10, 15, 0.95);
          padding: 0 16px;
          color: #64748b;
          font-size: 0.85rem;
        }

        .login-link {
          text-align: center;
          margin-top: 28px;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .login-link a {
          color: #f59e0b;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .login-link a:hover {
          color: #fbbf24;
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .signup-container {
            padding: 12px;
          }
          
          .signup-card {
            padding: 28px 24px;
          }
          
          .gym-logo {
            font-size: 2.2rem;
          }
          
          .signup-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
      
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <div className="gym-logo">💪 FITZONE</div>
            <h1 className="signup-title">Join the Family</h1>
            <p className="signup-subtitle">
              Start your fitness journey with us today and transform your life
            </p>
          </div>

          {alert.show && (
            <Alert 
              type={alert.type} 
              message={alert.message} 
              onClose={() => setAlert({ show: false, message: '', type: 'success' })}
            />
          )}

          <form className="signup-form" onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              value={formData.fullName}
              onChange={(value) => handleInputChange('fullName', value)}
              required
              startIcon="👤"
              placeholder="Enter your full name"
            />

            <InputField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              required
              startIcon="✉️"
              placeholder="Enter your email"
            />

            <InputField
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              required
              startIcon="📱"
              placeholder="Enter your phone number"
            />

            <InputField
              label="Organization (Optional)"
              value={formData.organization}
              onChange={(value) => handleInputChange('organization', value)}
              startIcon="🏢"
              placeholder="Company or organization"
            />

            <InputField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(value) => handleInputChange('password', value)}
              required
              startIcon="🔒"
              endIcon={showPassword ? '🙈' : '👁️'}
              onEndIconClick={() => setShowPassword(!showPassword)}
              placeholder="Create a strong password"
            />

            <InputField
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(value) => handleInputChange('confirmPassword', value)}
              required
              startIcon="🔒"
              endIcon={showConfirmPassword ? '🙈' : '👁️'}
              onEndIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
              placeholder="Confirm your password"
            />

            <Button type="submit" variant="primary" fullWidth>
              Create Account
            </Button>
          </form>

          <div className="login-link">
            Already have an account? <a href="#login">Sign in here</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;