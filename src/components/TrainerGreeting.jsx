import React from 'react';
import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip
} from '@mui/material';
import {
  FitnessCenter,
  WbSunny,
  Brightness3,
  LightMode
} from '@mui/icons-material';

const TrainerGreeting = ({ trainer = { name: 'Alex' } }) => {
  // Get current time and determine greeting
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  // Determine greeting based on time of day
  const getGreeting = () => {
    if (currentHour < 12) return 'Good Morning';
    if (currentHour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Get appropriate icon based on time
  const getTimeIcon = () => {
    if (currentHour < 12) return <WbSunny sx={{ color: '#FFA726' }} />;
    if (currentHour < 17) return <LightMode sx={{ color: '#FF7043' }} />;
    return <Brightness3 sx={{ color: '#5C6BC0' }} />;
  };

  // Motivational quotes array
  const motivationalQuotes = [
    "Push yourself because no one else is going to do it for you!",
    "Great things never come from comfort zones.",
    "Success starts with self-discipline.",
    "Your only limit is your mind.",
    "Train like a beast, look like a beauty!",
    "Every workout is progress, no matter how small.",
    "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <Box className="trainer-greeting-container">
      <Card className="greeting-card">
        <Box className="greeting-content">
          <Box className="greeting-header">
            <Avatar className="trainer-avatar">
              {trainer.name.charAt(0).toUpperCase()}
            </Avatar>
            <Box className="greeting-text">
              <Typography variant="h4" className="greeting-title">
                {getGreeting()}, {trainer.name}!
              </Typography>
              <Box className="time-info">
                {getTimeIcon()}
                <Typography variant="body1" className="time-text">
                  {currentDay} • {currentTime}
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box className="motivational-section">
            <FitnessCenter className="fitness-icon" />
            <Typography variant="body1" className="motivational-quote">
              "{randomQuote}"
            </Typography>
          </Box>
          
          <Chip 
            icon={<FitnessCenter />} 
            label="Ready to Train!" 
            className="ready-chip"
          />
        </Box>
      </Card>

      <style jsx>{`
        .trainer-greeting-container {
          margin-bottom: 24px;
        }

        .greeting-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          border-radius: 20px !important;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3) !important;
          overflow: hidden;
          position: relative;
        }

        .greeting-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .greeting-content {
          padding: 32px;
          position: relative;
          z-index: 1;
        }

        .greeting-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .trainer-avatar {
          width: 60px !important;
          height: 60px !important;
          background: linear-gradient(45deg, #FF6B6B, #4ECDC4) !important;
          font-size: 24px !important;
          font-weight: bold !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
        }

        .greeting-text {
          flex: 1;
        }

        .greeting-title {
          color: white !important;
          font-weight: 700 !important;
          margin-bottom: 8px !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .time-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .time-text {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500 !important;
        }

        .motivational-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .fitness-icon {
          color: #FFD700 !important;
          font-size: 28px !important;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .motivational-quote {
          color: white !important;
          font-style: italic !important;
          font-weight: 500 !important;
          flex: 1;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .ready-chip {
          background: linear-gradient(45deg, #4ECDC4, #44A08D) !important;
          color: white !important;
          font-weight: 600 !important;
          padding: 8px 16px !important;
          border-radius: 25px !important;
          box-shadow: 0 4px 12px rgba(68, 160, 141, 0.4) !important;
          transition: all 0.3s ease !important;
        }

        .ready-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(68, 160, 141, 0.6) !important;
        }

        @media (max-width: 768px) {
          .greeting-content {
            padding: 24px;
          }
          
          .greeting-header {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          
          .greeting-title {
            font-size: 1.8rem !important;
          }
          
          .motivational-section {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
    </Box>
  );
};

export default TrainerGreeting;