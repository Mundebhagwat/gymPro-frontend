import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  Box,
  Chip,
  CircularProgress,
  Fade,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for premium look
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '20px',
  padding: '2px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
  },
  transition: 'all 0.3s ease',
}));

const InnerTable = styled(Paper)(({ theme }) => ({
  borderRadius: '18px',
  overflow: 'hidden',
  background: theme.palette.background.paper,
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  '& .MuiTableCell-head': {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    borderBottom: 'none',
    padding: '20px 16px',
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: alpha(theme.palette.primary.light, 0.05),
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    transform: 'scale(1.01)',
  },
  transition: 'all 0.2s ease',
}));

const TimeCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '0.9rem',
  color: theme.palette.primary.main,
  borderRight: `2px solid ${alpha(theme.palette.primary.light, 0.2)}`,
  backgroundColor: alpha(theme.palette.primary.light, 0.05),
  padding: '16px',
  minWidth: '120px',
}));

const ClassChip = styled(Chip)(({ theme, classtype }) => {
  const colors = {
    zumba: { bg: '#FF6B6B', color: '#fff' },
    yoga: { bg: '#4ECDC4', color: '#fff' },
    cardio: { bg: '#45B7D1', color: '#fff' },
    strength: { bg: '#96CEB4', color: '#fff' },
    pilates: { bg: '#FFEAA7', color: '#2d3436' },
    crossfit: { bg: '#FDA7DF', color: '#fff' },
    default: { bg: '#74b9ff', color: '#fff' }
  };
  
  const colorScheme = colors[classtype?.toLowerCase()] || colors.default;
  
  return {
    backgroundColor: colorScheme.bg,
    color: colorScheme.color,
    fontWeight: 'bold',
    fontSize: '0.75rem',
    margin: '2px',
    padding: '8px 12px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    },
    transition: 'all 0.2s ease',
  };
});

const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px',
  flexDirection: 'column',
  gap: '20px',
});

const TrainerSchedule = () => {
  const [loading, setLoading] = useState(true);
  const [scheduleData, setScheduleData] = useState([]);
  const theme = useTheme();

  // Sample availability data - in real app, this would come from props or API
  const availability = [
    {
      day: 'Monday',
      classes: [
        { time: '17:00', className: 'Power Yoga', duration: 60, type: 'yoga' },
        { time: '19:00', className: 'Zumba Fitness', duration: 45, type: 'zumba' }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '18:00', className: 'HIIT Cardio', duration: 30, type: 'cardio' }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '16:30', className: 'Strength Training', duration: 60, type: 'strength' },
        { time: '18:30', className: 'Pilates Flow', duration: 50, type: 'pilates' }
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '17:30', className: 'CrossFit', duration: 45, type: 'crossfit' }
      ]
    },
    {
      day: 'Friday',
      classes: [
        { time: '17:00', className: 'Evening Yoga', duration: 60, type: 'yoga' },
        { time: '19:30', className: 'Dance Cardio', duration: 45, type: 'cardio' }
      ]
    },
    {
      day: 'Saturday',
      classes: [
        { time: '09:00', className: 'Morning Bootcamp', duration: 60, type: 'crossfit' },
        { time: '11:00', className: 'Gentle Yoga', duration: 75, type: 'yoga' }
      ]
    },
    {
      day: 'Sunday',
      classes: [
        { time: '10:00', className: 'Sunday Stretch', duration: 45, type: 'yoga' }
      ]
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setScheduleData(availability);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour12 = parseInt(hours) > 12 ? parseInt(hours) - 12 : parseInt(hours);
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${hour12 === 0 ? 12 : hour12}:${minutes} ${ampm}`;
  };

  const getClassForTimeAndDay = (time, day) => {
    const daySchedule = scheduleData.find(d => d.day === day);
    return daySchedule?.classes?.filter(cls => cls.time === time) || [];
  };

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" color="primary">
          Loading your schedule...
        </Typography>
      </LoadingContainer>
    );
  }

  return (
    <Fade in={!loading} timeout={800}>
      <Box sx={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box textAlign="center" mb={4}>
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}
              >
                Weekly Training Schedule
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Your assigned classes and time slots
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <StyledTableContainer>
              <InnerTable>
                <Table>
                  <StyledTableHead>
                    <TableRow>
                      <TableCell sx={{ color: 'white !important' }}>Time</TableCell>
                      {daysOfWeek.map((day) => (
                        <TableCell key={day} sx={{ color: 'white !important' }}>
                          {day}
                        </TableCell>
                      ))}
                    </TableRow>
                  </StyledTableHead>
                  <TableBody>
                    {timeSlots.map((time) => (
                      <StyledTableRow key={time}>
                        <TimeCell>
                          {formatTime(time)}
                        </TimeCell>
                        {daysOfWeek.map((day) => {
                          const classes = getClassForTimeAndDay(time, day);
                          return (
                            <TableCell 
                              key={`${day}-${time}`} 
                              sx={{ 
                                padding: '16px',
                                minHeight: '80px',
                                verticalAlign: 'top'
                              }}
                            >
                              {classes.length > 0 ? (
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                  {classes.map((cls, index) => (
                                    <ClassChip
                                      key={index}
                                      label={`${cls.className} (${cls.duration}min)`}
                                      classtype={cls.type}
                                      size="small"
                                    />
                                  ))}
                                </Box>
                              ) : (
                                <Typography 
                                  variant="body2" 
                                  color="text.disabled"
                                  sx={{ fontStyle: 'italic' }}
                                >
                                  Free
                                </Typography>
                              )}
                            </TableCell>
                          );
                        })}
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </InnerTable>
            </StyledTableContainer>
          </Grid>

          <Grid item xs={12}>
            <Box 
              sx={{ 
                mt: 3, 
                p: 3, 
                background: alpha(theme.palette.primary.light, 0.05),
                borderRadius: '15px',
                border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`
              }}
            >
              <Typography variant="h6" gutterBottom color="primary" fontWeight="bold">
                Class Types Legend
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                <ClassChip label="Zumba" classtype="zumba" size="small" />
                <ClassChip label="Yoga" classtype="yoga" size="small" />
                <ClassChip label="Cardio" classtype="cardio" size="small" />
                <ClassChip label="Strength" classtype="strength" size="small" />
                <ClassChip label="Pilates" classtype="pilates" size="small" />
                <ClassChip label="CrossFit" classtype="crossfit" size="small" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default TrainerSchedule;