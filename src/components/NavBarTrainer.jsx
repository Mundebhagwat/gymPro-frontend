import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  FitnessCenter as FitnessCenterIcon,
  Person as PersonIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

// Custom styled AppBar with gradient background
const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'static',
});

// Logo container styling
const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
});

// Logo icon styling
const LogoIcon = styled(Box)({
  width: 40,
  height: 40,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
});

// User profile container styling
const UserProfileContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '8px 16px',
  borderRadius: '50px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    transform: 'translateY(-1px)',
  },
});

// Custom styled Menu for dropdown
const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#1f2937',
    borderRadius: '8px',
    border: '1px solid #374151',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    minWidth: '180px',
    marginTop: '8px',
  },
});

// Custom styled MenuItem for logout
const StyledMenuItem = styled(MenuItem)({
  color: '#ef4444',
  padding: '12px 16px',
  '&:hover': {
    backgroundColor: '#374151',
  },
  '& .MuiSvgIcon-root': {
    marginRight: '12px',
    fontSize: '20px',
  },
});

const NavBarTrainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Mock trainer data
  const trainerData = {
    name: 'John Smith',
    role: 'Trainer'
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    handleClose();
    // Add logout logic here
  };

  return (
    <StyledAppBar>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '70px' }}>
        {/* Left Side - Logo */}
        <LogoContainer>
          <LogoIcon>
            <FitnessCenterIcon sx={{ color: 'white', fontSize: 24 }} />
          </LogoIcon>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            GymPro
          </Typography>
        </LogoContainer>

        {/* Right Side - User Profile */}
        <Box sx={{ position: 'relative' }}>
          <UserProfileContainer onClick={handleClick}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#4f46e5',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <PersonIcon sx={{ color: 'white' }} />
            </Avatar>
            <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  lineHeight: 1.2,
                }}
              >
                {trainerData.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}
              >
                {trainerData.role}
              </Typography>
            </Box>
          </UserProfileContainer>

          {/* Dropdown Menu */}
          <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <StyledMenuItem onClick={handleLogout}>
              <LogoutIcon />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Logout
              </Typography>
            </StyledMenuItem>
          </StyledMenu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBarTrainer;