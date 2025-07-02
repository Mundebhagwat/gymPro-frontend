// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const InputField = ({ 
//   label, 
//   type = 'text', 
//   value, 
//   onChange, 
//   required = false,
//   startIcon,
//   endIcon,
//   onEndIconClick,
//   placeholder
// }) => (
//   <div className="input-group">
//     <label className="input-label">{label}</label>
//     <div className="input-container">
//       {startIcon && <span className="input-icon-start">{startIcon}</span>}
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         required={required}
//         className="input-field"
//         placeholder={placeholder}
//       />
//       {endIcon && (
//         <span className="input-icon-end" onClick={onEndIconClick}>
//           {endIcon}
//         </span>
//       )}
//     </div>
//   </div>
// );

// const Button = ({ children, onClick, variant = 'primary', fullWidth = false, type = 'button', disabled = false }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     disabled={disabled}
//     className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${fullWidth ? 'btn-full' : ''} ${disabled ? 'btn-disabled' : ''}`}
//   >
//     {children}
//   </button>
// );

// const Alert = ({ type, message, onClose }) => (
//   <div className={`alert alert-${type}`}>
//     <span className="alert-icon">
//       {type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}
//     </span>
//     <span className="alert-message">{message}</span>
//     {onClose && (
//       <span className="alert-close" onClick={onClose}>×</span>
//     )}
//   </div>
// );

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Function to determine redirect path based on user role
//   const getRedirectPath = (role) => {
//     switch (role.toLowerCase()) {
//       case 'admin':
//         return '/admin';
//       case 'trainer':
//         return '/trainer';
//       case 'gym':
//       case 'gym_owner':
//       case 'gym owner':
//         return '/gym'; // You might need to add this route to your App.jsx
//       default:
//         console.warn(`Unknown role: ${role}, redirecting to home`);
//         return '/';
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.email || !formData.password) {
//       setAlert({
//         show: true,
//         message: 'Please fill in all fields',
//         type: 'error'
//       });
//       setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/users/commonlogin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const data = await response.json();
      

//       if (response.ok) {
//         // Store all the data in memory (React state) instead of localStorage
//         const userData = {
//           token: data.token,
//           role: data.user.role,
//           id: data.user.id,
//           name: data.user.name,
//           email: data.user.email,
//           phone: data.user.phoneNumber,
//           skills: data.user.skills,
//           restPeriod: data.user.rest_period,
//           availability: data.user.availability,
//           preferredGyms: data.user.preferred_gyms,
//           userData: data.user
//         };
        
//         setAlert({
//           show: true,
//           message: `Welcome back, ${data.user.name}! Redirecting to your dashboard...`,
//           type: 'success'
//         });
        
//         // Get the redirect path based on user role
//         const redirectPath = getRedirectPath(data.user.role);
        
//         // Redirect after a short delay to show the success message
//         setTimeout(() => {
//           navigate(redirectPath, { 
//             replace: true,
//             state: { userData } // Pass user data through navigation state
//           });
//         }, 1500);
        
//       } else {
//         setAlert({
//           show: true,
//           message: data.message || 'Login failed. Please check your credentials.',
//           type: 'error'
//         });
//         setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 5000);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setAlert({
//         show: true,
//         message: 'Network error. Please check your connection and try again.',
//         type: 'error'
//       });
//       setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 5000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//         }

//         .login-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d1b69 50%, #8b5cf6 75%, #f59e0b 100%);
//           background-size: 400% 400%;
//           animation: gradientShift 15s ease infinite;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//           position: relative;
//           overflow: hidden;
//         }

//         .login-container::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: 
//             radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//             radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
//           animation: backgroundPulse 8s ease-in-out infinite alternate;
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes backgroundPulse {
//           0% { opacity: 0.5; }
//           100% { opacity: 0.8; }
//         }

//         @keyframes slideUp {
//           from { 
//             opacity: 0; 
//             transform: translateY(30px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//           }
//         }

//         .login-card {
//           background: rgba(15, 15, 15, 0.95);
//           backdrop-filter: blur(20px);
//           border-radius: 24px;
//           padding: 48px 40px;
//           width: 100%;
//           max-width: 480px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           box-shadow: 
//             0 32px 64px rgba(0, 0, 0, 0.4),
//             0 0 0 1px rgba(255, 255, 255, 0.05),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1);
//           position: relative;
//           z-index: 1;
//           animation: slideUp 0.8s ease-out;
//         }

//         .login-header {
//           text-align: center;
//           margin-bottom: 40px;
//         }

//         .gym-logo {
//           font-size: 3rem;
//           margin-bottom: 16px;
//           background: linear-gradient(135deg, #f59e0b 0%, #ef4444 25%, #8b5cf6 75%, #06b6d4 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           font-weight: 900;
//         }

//         .login-title {
//           font-size: 2.5rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 12px;
//           letter-spacing: -0.025em;
//         }

//         .login-subtitle {
//           color: #71717a;
//           font-size: 1rem;
//           font-weight: 400;
//           line-height: 1.5;
//         }

//         .login-form {
//           margin-top: 32px;
//         }

//         .input-group {
//           margin-bottom: 28px;
//         }

//         .input-label {
//           display: block;
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: #e4e4e7;
//           margin-bottom: 12px;
//           letter-spacing: 0.025em;
//         }

//         .input-container {
//           position: relative;
//           display: flex;
//           align-items: center;
//         }

//         .input-field {
//           width: 100%;
//           padding: 18px 20px;
//           padding-left: 56px;
//           background: rgba(24, 24, 27, 0.8);
//           border: 2px solid rgba(63, 63, 70, 0.4);
//           border-radius: 16px;
//           font-size: 1rem;
//           color: #ffffff;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           font-family: inherit;
//           backdrop-filter: blur(8px);
//         }

//         .input-field::placeholder {
//           color: #71717a;
//         }

//         .input-field:focus {
//           outline: none;
//           border-color: #8b5cf6;
//           background: rgba(24, 24, 27, 0.95);
//           box-shadow: 
//             0 0 0 4px rgba(139, 92, 246, 0.1),
//             0 8px 16px rgba(0, 0, 0, 0.2);
//           transform: translateY(-2px);
//         }

//         .input-field:hover:not(:focus) {
//           border-color: rgba(139, 92, 246, 0.6);
//           background: rgba(24, 24, 27, 0.9);
//         }

//         .input-icon-start {
//           position: absolute;
//           left: 18px;
//           z-index: 1;
//           font-size: 1.25rem;
//           pointer-events: none;
//         }

//         .input-icon-end {
//           position: absolute;
//           right: 18px;
//           z-index: 1;
//           font-size: 1.25rem;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           opacity: 0.7;
//         }

//         .input-icon-end:hover {
//           opacity: 1;
//           transform: scale(1.1);
//         }

//         .btn {
//           font-family: inherit;
//           font-weight: 700;
//           font-size: 1rem;
//           border-radius: 16px;
//           padding: 18px 32px;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           border: none;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 56px;
//           letter-spacing: 0.025em;
//           text-transform: uppercase;
//           position: relative;
//           overflow: hidden;
//         }

//         .btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//           transition: left 0.5s;
//         }

//         .btn:hover::before {
//           left: 100%;
//         }

//         .btn-primary {
//           background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%);
//           color: white;
//           box-shadow: 
//             0 8px 16px rgba(139, 92, 246, 0.3),
//             0 4px 8px rgba(0, 0, 0, 0.2);
//         }

//         .btn-primary:hover:not(:disabled) {
//           background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
//           box-shadow: 
//             0 12px 24px rgba(139, 92, 246, 0.4),
//             0 8px 16px rgba(0, 0, 0, 0.3);
//           transform: translateY(-3px);
//         }

//         .btn-primary:active:not(:disabled) {
//           transform: translateY(-1px);
//           box-shadow: 
//             0 6px 12px rgba(139, 92, 246, 0.3),
//             0 4px 8px rgba(0, 0, 0, 0.2);
//         }

//         .btn-disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//           transform: none !important;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
//         }

//         .btn-secondary {
//           background: transparent;
//           color: #8b5cf6;
//           border: 2px solid rgba(139, 92, 246, 0.3);
//         }

//         .btn-secondary:hover {
//           background: rgba(139, 92, 246, 0.1);
//           border-color: #8b5cf6;
//           transform: translateY(-2px);
//         }

//         .btn-full {
//           width: 100%;
//         }

//         .alert {
//           display: flex;
//           align-items: center;
//           padding: 16px 20px;
//           border-radius: 12px;
//           margin-bottom: 28px;
//           font-size: 0.9rem;
//           gap: 12px;
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .alert-success {
//           background: rgba(34, 197, 94, 0.1);
//           color: #22c55e;
//           border-color: rgba(34, 197, 94, 0.2);
//         }

//         .alert-error {
//           background: rgba(239, 68, 68, 0.1);
//           color: #ef4444;
//           border-color: rgba(239, 68, 68, 0.2);
//         }

//         .alert-info {
//           background: rgba(59, 130, 246, 0.1);
//           color: #3b82f6;
//           border-color: rgba(59, 130, 246, 0.2);
//         }

//         .alert-close {
//           margin-left: auto;
//           cursor: pointer;
//           font-size: 1.25rem;
//           opacity: 0.7;
//           transition: all 0.2s ease;
//         }

//         .alert-close:hover {
//           opacity: 1;
//           transform: scale(1.1);
//         }

//         .auth-switch {
//           text-align: center;
//           margin-top: 32px;
//           color: #71717a;
//           font-size: 0.95rem;
//         }

//         .auth-switch a {
//           color: #8b5cf6;
//           text-decoration: none;
//           font-weight: 600;
//           transition: color 0.2s ease;
//         }

//         .auth-switch a:hover {
//           color: #7c3aed;
//           text-decoration: underline;
//         }

//         @media (max-width: 480px) {
//           .login-card {
//             padding: 32px 24px;
//             margin: 16px;
//           }
          
//           .login-title {
//             font-size: 2rem;
//           }
          
//           .gym-logo {
//             font-size: 2.5rem;
//           }
//         }
//       `}</style>
      
//       <div className="login-container">
//         <div className="login-card">
//           {alert.show && (
//             <Alert
//               type={alert.type}
//               message={alert.message}
//               onClose={() => setAlert({ show: false, message: '', type: 'success' })}
//             />
//           )}
          
//           <div className="login-header">
//             <div className="gym-logo">💪</div>
//             <h1 className="login-title">Welcome Back</h1>
//             <p className="login-subtitle">
//               Sign in to access your fitness journey and track your progress
//             </p>
//           </div>

//           <div className="login-form">
//             <InputField
//               label="Email Address"
//               type="email"
//               value={formData.email}
//               onChange={(value) => handleInputChange('email', value)}
//               required
//               startIcon="📧"
//               placeholder="Enter your email"
//             />
            
//             <InputField
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               value={formData.password}
//               onChange={(value) => handleInputChange('password', value)}
//               required
//               startIcon="🔒"
//               endIcon={showPassword ? "🙈" : "👁️"}
//               onEndIconClick={() => setShowPassword(!showPassword)}
//               placeholder="Enter your password"
//             />
            
//             <Button
//               variant="primary"
//               fullWidth
//               type="button"
//               disabled={isLoading}
//               onClick={handleSubmit}
//             >
//               {isLoading ? 'Signing In...' : 'Sign In to Gym'}
//             </Button>
//           </div>
          
//           <div className="auth-switch">
//             Don't have an account? <a href="/signup">Create Account</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const Button = ({ children, onClick, variant = 'primary', fullWidth = false, type = 'button', disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${fullWidth ? 'btn-full' : ''} ${disabled ? 'btn-disabled' : ''}`}
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

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Function to store user data in localStorage
  const storeUserData = (userData) => {
    try {
      // Store individual items for easy access
      localStorage.setItem('authToken', userData.token);
      localStorage.setItem('userRole', userData.role);
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('userName', userData.name);
      localStorage.setItem('userEmail', userData.email);
      localStorage.setItem('userPhone', userData.phone);
      localStorage.setItem('userSkills', JSON.stringify(userData.skills));
      localStorage.setItem('userRestPeriod', userData.restPeriod);
      localStorage.setItem('userAvailability', JSON.stringify(userData.availability));
      localStorage.setItem('userPreferredGyms', JSON.stringify(userData.preferredGyms));
      
      // Store complete user data object
      localStorage.setItem('userData', JSON.stringify(userData.userData));
      
      // Store login timestamp
      localStorage.setItem('loginTime', new Date().toISOString());
      
      console.log('User data stored in localStorage successfully');
    } catch (error) {
      console.error('Error storing user data in localStorage:', error);
    }
  };

  // Function to determine redirect path based on user role
  const getRedirectPath = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return '/admin';
      case 'trainer':
        return '/trainer';
      case 'gym':
      case 'gym_owner':
      case 'gym owner':
        return '/gym';
      default:
        console.warn(`Unknown role: ${role}, redirecting to home`);
        return '/';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setAlert({
        show: true,
        message: 'Please fill in all fields',
        type: 'error'
      });
      setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/users/commonlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      

      if (response.ok) {
        // Prepare user data object
        const userData = {
          token: data.token,
          role: data.user.role,
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phoneNumber,
          skills: data.user.skills,
          restPeriod: data.user.rest_period,
          availability: data.user.availability,
          preferredGyms: data.user.preferred_gyms,
          userData: data.user
        };
        
        // Store user data in localStorage
        storeUserData(userData);
        
        setAlert({
          show: true,
          message: `Welcome back, ${data.user.name}! Redirecting to your dashboard...`,
          type: 'success'
        });
        
        // Get the redirect path based on user role
        const redirectPath = getRedirectPath(data.user.role);
        
        // Redirect after a short delay to show the success message
        setTimeout(() => {
          navigate(redirectPath, { replace: true });
        }, 1500);
        
      } else {
        setAlert({
          show: true,
          message: data.message || 'Login failed. Please check your credentials.',
          type: 'error'
        });
        setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 5000);
      }
    } catch (error) {
      console.error('Login error:', error);
      setAlert({
        show: true,
        message: 'Network error. Please check your connection and try again.',
        type: 'error'
      });
      setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d1b69 50%, #8b5cf6 75%, #f59e0b 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
          animation: backgroundPulse 8s ease-in-out infinite alternate;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes backgroundPulse {
          0% { opacity: 0.5; }
          100% { opacity: 0.8; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .login-card {
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 48px 40px;
          width: 100%;
          max-width: 480px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 32px 64px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
          animation: slideUp 0.8s ease-out;
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .gym-logo {
          font-size: 3rem;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #f59e0b 0%, #ef4444 25%, #8b5cf6 75%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
        }

        .login-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          letter-spacing: -0.025em;
        }

        .login-subtitle {
          color: #71717a;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
        }

        .login-form {
          margin-top: 32px;
        }

        .input-group {
          margin-bottom: 28px;
        }

        .input-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: #e4e4e7;
          margin-bottom: 12px;
          letter-spacing: 0.025em;
        }

        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-field {
          width: 100%;
          padding: 18px 20px;
          padding-left: 56px;
          background: rgba(24, 24, 27, 0.8);
          border: 2px solid rgba(63, 63, 70, 0.4);
          border-radius: 16px;
          font-size: 1rem;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          backdrop-filter: blur(8px);
        }

        .input-field::placeholder {
          color: #71717a;
        }

        .input-field:focus {
          outline: none;
          border-color: #8b5cf6;
          background: rgba(24, 24, 27, 0.95);
          box-shadow: 
            0 0 0 4px rgba(139, 92, 246, 0.1),
            0 8px 16px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .input-field:hover:not(:focus) {
          border-color: rgba(139, 92, 246, 0.6);
          background: rgba(24, 24, 27, 0.9);
        }

        .input-icon-start {
          position: absolute;
          left: 18px;
          z-index: 1;
          font-size: 1.25rem;
          pointer-events: none;
        }

        .input-icon-end {
          position: absolute;
          right: 18px;
          z-index: 1;
          font-size: 1.25rem;
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
          font-size: 1rem;
          border-radius: 16px;
          padding: 18px 32px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          letter-spacing: 0.025em;
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%);
          color: white;
          box-shadow: 
            0 8px 16px rgba(139, 92, 246, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
          box-shadow: 
            0 12px 24px rgba(139, 92, 246, 0.4),
            0 8px 16px rgba(0, 0, 0, 0.3);
          transform: translateY(-3px);
        }

        .btn-primary:active:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 
            0 6px 12px rgba(139, 92, 246, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
        }

        .btn-secondary {
          background: transparent;
          color: #8b5cf6;
          border: 2px solid rgba(139, 92, 246, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: #8b5cf6;
          transform: translateY(-2px);
        }

        .btn-full {
          width: 100%;
        }

        .alert {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 28px;
          font-size: 0.9rem;
          gap: 12px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .alert-success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border-color: rgba(34, 197, 94, 0.2);
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.2);
        }

        .alert-info {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-color: rgba(59, 130, 246, 0.2);
        }

        .alert-close {
          margin-left: auto;
          cursor: pointer;
          font-size: 1.25rem;
          opacity: 0.7;
          transition: all 0.2s ease;
        }

        .alert-close:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .auth-switch {
          text-align: center;
          margin-top: 32px;
          color: #71717a;
          font-size: 0.95rem;
        }

        .auth-switch a {
          color: #8b5cf6;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .auth-switch a:hover {
          color: #7c3aed;
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 32px 24px;
            margin: 16px;
          }
          
          .login-title {
            font-size: 2rem;
          }
          
          .gym-logo {
            font-size: 2.5rem;
          }
        }
      `}</style>
      
      <div className="login-container">
        <div className="login-card">
          {alert.show && (
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => setAlert({ show: false, message: '', type: 'success' })}
            />
          )}
          
          <div className="login-header">
            <div className="gym-logo">💪</div>
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">
              Sign in to access your fitness journey and track your progress
            </p>
          </div>

          <div className="login-form">
            <InputField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              required
              startIcon="📧"
              placeholder="Enter your email"
            />
            
            <InputField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(value) => handleInputChange('password', value)}
              required
              startIcon="🔒"
              endIcon={showPassword ? "🙈" : "👁️"}
              onEndIconClick={() => setShowPassword(!showPassword)}
              placeholder="Enter your password"
            />
            
            <Button
              variant="primary"
              fullWidth
              type="button"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? 'Signing In...' : 'Sign In to Gym'}
            </Button>
          </div>
          
          {/* <div className="auth-switch">
            Don't have an account? <a href="/signup">Create Account</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;