import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FitnessCenter,
  Dashboard,
  Person,
  Schedule,
  LocationOn,
  Logout,
  Menu as MenuIcon
} from '@mui/icons-material';

const NavBar = ({ activeTab = 'dashboard', onTabChange = () => {}, onLogout = () => {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [userData, setUserData] = useState({
    userName: 'Admin User',
    userRole: 'Super Admin'
  });

  useEffect(() => {
    // Simulate loading user data from localStorage
    const storedUserName = localStorage.getItem('userName') || 'Admin User';
    const storedUserRole = localStorage.getItem('userRole') || 'Super Admin';
    
    setUserData({
      userName: storedUserName,
      userRole: storedUserRole
    });
  }, []);

  const navigationTabs = [
    // { label: 'Dashboard', value: 'dashboard', icon: <Dashboard sx={{ mr: 1 }} /> },
    // { label: 'Trainers', value: 'trainers', icon: <Person sx={{ mr: 1 }} /> },
    // { label: 'Schedule', value: 'schedule', icon: <Schedule sx={{ mr: 1 }} /> },
    // { label: 'Gyms', value: 'gyms', icon: <LocationOn sx={{ mr: 1 }} /> }
  ];

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.clear();
    
    handleUserMenuClose();
    onLogout();
    
    // Redirect to home page
    navigate('/');
  };

  const handleTabChange = (event, newValue) => {
    onTabChange(newValue);
    handleMobileMenuClose();
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'super admin':
        return '#e91e63';
      case 'admin':
        return '#2196f3';
      case 'manager':
        return '#ff9800';
      case 'trainer':
        return '#4caf50';
      default:
        return '#9c27b0';
    }
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: -1
        }
      }}
    >
      <Toolbar sx={{ minHeight: '70px', px: { xs: 2, md: 4 } }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
          <Box
            sx={{
              width: 45,
              height: 45,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
            }}
          >
            <FitnessCenter sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                color: 'white',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              GymPro
            </Typography>
            <Chip
              label="GYM"
              size="small"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '0.7rem',
                height: '20px',
                mt: 0.5
              }}
            />
          </Box>
        </Box>

        {/* Navigation Tabs - Desktop */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  minWidth: 120,
                  '&.Mui-selected': {
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px'
                  }
                },
                '& .MuiTabs-indicator': {
                  display: 'none'
                }
              }}
            >
              {navigationTabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {tab.icon}
                      {tab.label}
                    </Box>
                  }
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', mr: 2 }}>
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        {/* User Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={handleUserMenuOpen}
            sx={{
              color: 'white',
              textTransform: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }
            }}
          >
            <Avatar
              sx={{
                width: 35,
                height: 35,
                mr: 1,
                backgroundColor: getRoleColor(userData.userRole),
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              {userData.userName.charAt(0).toUpperCase()}
            </Avatar>
            {!isMobile && (
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                  {userData.userName}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8, lineHeight: 1.2 }}>
                  {userData.userRole}
                </Typography>
              </Box>
            )}
          </Button>
        </Box>

        {/* User Dropdown Menu - Only Logout */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleUserMenuClose}
          PaperProps={{
            elevation: 8,
            sx: {
              mt: 1.5,
              minWidth: 150,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }
          }}
        >
          <MenuItem 
            onClick={handleLogout}
            sx={{ 
              color: 'error.main',
              '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.1)' },
              justifyContent: 'center',
              py: 1.5
            }}
          >
            <Logout sx={{ mr: 2 }} />
            Logout
          </MenuItem>
        </Menu>

        {/* Mobile Navigation Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          PaperProps={{
            elevation: 8,
            sx: {
              mt: 1.5,
              minWidth: 200,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }
          }}
        >
          {navigationTabs.map((tab) => (
            <MenuItem
              key={tab.value}
              onClick={() => handleTabChange(null, tab.value)}
              selected={activeTab === tab.value}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  color: '#667eea'
                }
              }}
            >
              {tab.icon}
              {tab.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;