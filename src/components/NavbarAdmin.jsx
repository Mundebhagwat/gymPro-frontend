// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Avatar,
//   IconButton,
//   Menu,
//   MenuItem,
//   Badge,
//   Divider,
//   Chip
// } from '@mui/material';
// import {
//   Dashboard,
//   FitnessCenter,
//   Schedule,
//   Business,
//   People,
//   Notifications,
//   Settings,
//   AccountCircle,
//   ExitToApp,
//   Timeline,
//   AssignmentInd
// } from '@mui/icons-material';

// const AdminNavbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [notificationAnchor, setNotificationAnchor] = useState(null);
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const handleProfileClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setNotificationAnchor(null);
//   };

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
    
//     // Smooth scroll to the section
//     const element = document.getElementById(tabName);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       });
//     }
//   };

//   const navigationItems = [
//     { name: 'Dashboard', key: 'dashboard', icon: <Dashboard /> },
//     { name: 'Trainers', key: 'trainers', icon: <FitnessCenter /> },
//     { name: 'Schedule', key: 'schedule', icon: <Timeline /> },
//     { name: 'Gyms', key: 'gyms', icon: <Business /> },
//   ];

//   // Observer for updating active tab based on scroll position
//   React.useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['dashboard', 'trainers', 'schedule', 'gyms'];
//       const scrollPosition = window.scrollY + 100; // Offset for navbar height

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const element = document.getElementById(sections[i]);
//         if (element && element.offsetTop <= scrollPosition) {
//           setActiveTab(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .navbar-container {
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
//           backdrop-filter: blur(10px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .logo-section {
//           display: flex;
//           align-items: center;
//           margin-right: 40px;
//         }

//         .logo-icon {
//           background: linear-gradient(135deg, #ff6b6b, #ee5a24);
//           border-radius: 12px;
//           padding: 8px;
//           margin-right: 12px;
//           box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
//         }

//         .logo-text {
//           font-weight: 800;
//           font-size: 1.5rem;
//           background: linear-gradient(135deg, #ffffff, #e0e6ed);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           letter-spacing: -0.5px;
//         }

//         .nav-buttons-container {
//           display: flex;
//           gap: 8px;
//           flex: 1;
//           justify-content: center;
//         }

//         .nav-button {
//           color: rgba(255, 255, 255, 0.8);
//           text-transform: none;
//           font-weight: 600;
//           padding: 10px 20px;
//           border-radius: 12px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//           backdrop-filter: blur(10px);
//           border: 1px solid transparent;
//         }

//         .nav-button:hover {
//           color: #ffffff;
//           background: rgba(255, 255, 255, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
//         }

//         .nav-button.active {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: #ffffff;
//           box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }

//         .nav-button.active:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
//         }

//         .nav-button::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//           transition: left 0.5s;
//         }

//         .nav-button:hover::before {
//           left: 100%;
//         }

//         .actions-section {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .notification-button {
//           color: rgba(255, 255, 255, 0.8);
//           transition: all 0.3s ease;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 12px;
//           padding: 8px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .notification-button:hover {
//           color: #ffffff;
//           background: rgba(255, 255, 255, 0.1);
//           transform: scale(1.05);
//         }

//         .profile-section {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 8px 16px;
//           border-radius: 12px;
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }

//         .profile-section:hover {
//           background: rgba(255, 255, 255, 0.1);
//           transform: translateY(-1px);
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//         }

//         .profile-avatar {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
//         }

//         .profile-info {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//         }

//         .profile-name {
//           color: #ffffff;
//           font-weight: 600;
//           font-size: 0.9rem;
//           line-height: 1.2;
//         }

//         .profile-role {
//           color: rgba(255, 255, 255, 0.7);
//           font-size: 0.75rem;
//           line-height: 1;
//         }

//         .status-chip {
//           background: linear-gradient(135deg, #00c851, #00a047);
//           color: #ffffff;
//           font-size: 0.7rem;
//           height: 20px;
//           margin-left: 8px;
//           box-shadow: 0 2px 8px rgba(0, 200, 81, 0.3);
//         }

//         .menu-paper {
//           background: rgba(26, 26, 46, 0.95);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 12px;
//           margin-top: 8px;
//         }

//         .menu-item {
//           color: rgba(255, 255, 255, 0.9);
//           padding: 12px 20px;
//           transition: all 0.3s ease;
//         }

//         .menu-item:hover {
//           background: rgba(255, 255, 255, 0.1);
//           color: #ffffff;
//         }

//         .menu-divider {
//           background: rgba(255, 255, 255, 0.1);
//           margin: 8px 0;
//         }

//         @media (max-width: 968px) {
//           .nav-buttons-container {
//             display: none;
//           }
          
//           .logo-section {
//             margin-right: 20px;
//           }
//         }

//         @media (max-width: 768px) {
//           .profile-info {
//             display: none;
//           }
          
//           .actions-section {
//             gap: 8px;
//           }
//         }
//       `}</style>

//       <AppBar position="fixed" className="navbar-container" elevation={0}>
//         <Toolbar sx={{ padding: '0 24px', minHeight: '70px' }}>
//           {/* Logo Section */}
//           <Box className="logo-section">
//             <Box className="logo-icon">
//               <FitnessCenter sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
//             </Box>
//             <Typography className="logo-text">
//               GymPro
//             </Typography>
//             <Chip 
//               label="Admin" 
//               className="status-chip"
//               size="small"
//             />
//           </Box>

//           {/* Navigation Buttons */}
//           <Box className="nav-buttons-container">
//             {navigationItems.map((item) => (
//               <Button
//                 key={item.key}
//                 startIcon={item.icon}
//                 className={`nav-button ${activeTab === item.key ? 'active' : ''}`}
//                 onClick={() => handleTabClick(item.key)}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>

//           {/* Actions Section */}
//           <Box className="actions-section">
//             {/* Profile Section */}
//             <Box className="profile-section" onClick={handleProfileClick}>
//               <Avatar className="profile-avatar" sx={{ width: 40, height: 40 }}>
//                 <AccountCircle />
//               </Avatar>
//               <Box className="profile-info">
//                 <Typography className="profile-name">
//                   Admin User
//                 </Typography>
//                 <Typography className="profile-role">
//                   Super Admin
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Profile Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         PaperProps={{
//           className: 'menu-paper',
//           sx: { minWidth: 200 }
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <Divider className="menu-divider" />
//         <MenuItem className="menu-item" sx={{ color: '#ff6b6b !important' }}>
//           <ExitToApp sx={{ mr: 2 }} />
//           Logout
//         </MenuItem>
//       </Menu>

//       {/* Notifications Menu */}
//       <Menu
//         anchorEl={notificationAnchor}
//         open={Boolean(notificationAnchor)}
//         onClose={handleClose}
//         PaperProps={{
//           className: 'menu-paper',
//           sx: { minWidth: 300 }
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem className="menu-item">
//           <Box>
//             <Typography sx={{ fontWeight: 600, color: '#ffffff' }}>
//               New trainer registered
//             </Typography>
//             <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
//               John Smith just joined as a trainer
//             </Typography>
//           </Box>
//         </MenuItem>
//         <Divider className="menu-divider" />
//         <MenuItem className="menu-item">
//           <Box>
//             <Typography sx={{ fontWeight: 600, color: '#ffffff' }}>
//               Session cancelled
//             </Typography>
//             <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
//               Yoga class at 3 PM has been cancelled
//             </Typography>
//           </Box>
//         </MenuItem>
//         <Divider className="menu-divider" />
//         <MenuItem className="menu-item">
//           <Box>
//             <Typography sx={{ fontWeight: 600, color: '#ffffff' }}>
//               System maintenance
//             </Typography>
//             <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
//               Scheduled maintenance at 2 AM tonight
//             </Typography>
//           </Box>
//         </MenuItem>
//       </Menu>

//       {/* Spacer for fixed navbar */}
//       <Toolbar sx={{ minHeight: '70px' }} />
//     </>
//   );
// };

// export default AdminNavbar;




import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Chip
} from '@mui/material';
import {
  Dashboard,
  FitnessCenter,
  Business,
  ExitToApp,
  Timeline,
  AccountCircle
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchor(null);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(tabName);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('loginTime');
    localStorage.removeItem('userAvailability');
    localStorage.removeItem('userData');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhone');
    localStorage.removeItem('userPreferredGyms');
    localStorage.removeItem('userRestPeriod');
    localStorage.removeItem('userRole');

    navigate('/');
  };

  const navigationItems = [
    { name: 'Dashboard', key: 'dashboard', icon: <Dashboard /> },
    { name: 'Trainers', key: 'trainers', icon: <FitnessCenter /> },
    { name: 'Schedule', key: 'schedule', icon: <Timeline /> },
    { name: 'Gyms', key: 'gyms', icon: <Business /> },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['dashboard', 'trainers', 'schedule', 'gyms'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        .navbar-container {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo-section {
          display: flex;
          align-items: center;
          margin-right: 40px;
        }

        .logo-icon {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          border-radius: 12px;
          padding: 8px;
          margin-right: 12px;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }

        .logo-text {
          font-weight: 800;
          font-size: 1.5rem;
          background: linear-gradient(135deg, #ffffff, #e0e6ed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .nav-buttons-container {
          display: flex;
          gap: 8px;
          flex: 1;
          justify-content: center;
        }

        .nav-button {
          color: rgba(255, 255, 255, 0.8);
          text-transform: none;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }

        .nav-button:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .nav-button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-button.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
        }

        .actions-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .profile-section:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .profile-avatar {
          background: linear-gradient(135deg, #667eea, #764ba2);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .profile-name {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.2;
        }

        .profile-role {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          line-height: 1;
        }

        .status-chip {
          background: linear-gradient(135deg, #00c851, #00a047);
          color: #ffffff;
          font-size: 0.7rem;
          height: 20px;
          margin-left: 8px;
          box-shadow: 0 2px 8px rgba(0, 200, 81, 0.3);
        }

        .menu-paper {
          background: rgba(26, 26, 46, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin-top: 8px;
        }

        .menu-item {
          color: rgba(255, 255, 255, 0.9);
          padding: 12px 20px;
          transition: all 0.3s ease;
        }

        .menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .menu-divider {
          background: rgba(255, 255, 255, 0.1);
          margin: 8px 0;
        }

        @media (max-width: 968px) {
          .nav-buttons-container {
            display: none;
          }

          .logo-section {
            margin-right: 20px;
          }
        }

        @media (max-width: 768px) {
          .profile-info {
            display: none;
          }

          .actions-section {
            gap: 8px;
          }
        }
      `}</style>

      <AppBar position="fixed" className="navbar-container" elevation={0}>
        <Toolbar sx={{ padding: '0 24px', minHeight: '70px' }}>
          <Box className="logo-section">
            <Box className="logo-icon">
              <FitnessCenter sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Typography className="logo-text">GymPro</Typography>
            <Chip label="Admin" className="status-chip" size="small" />
          </Box>

          <Box className="nav-buttons-container">
            {navigationItems.map((item) => (
              <Button
                key={item.key}
                startIcon={item.icon}
                className={`nav-button ${activeTab === item.key ? 'active' : ''}`}
                onClick={() => handleTabClick(item.key)}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box className="actions-section">
            <Box className="profile-section" onClick={handleProfileClick}>
              <Avatar className="profile-avatar" sx={{ width: 40, height: 40 }}>
                <AccountCircle />
              </Avatar>
              <Box className="profile-info">
                <Typography className="profile-name">{localStorage.getItem("userName")}</Typography>
                <Typography className="profile-role">Super Admin</Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: 'menu-paper',
          sx: { minWidth: 200 }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Divider className="menu-divider" />
        <MenuItem
          className="menu-item"
          sx={{ color: '#ff6b6b !important' }}
          onClick={handleLogout}
        >
          <ExitToApp sx={{ mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>

      <Toolbar sx={{ minHeight: '70px' }} />
    </>
  );
};

export default AdminNavbar;
