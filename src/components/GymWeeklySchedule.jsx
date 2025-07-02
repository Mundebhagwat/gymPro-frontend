import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Avatar,
  CircularProgress,
  Alert,
  Paper,
  Divider
} from '@mui/material';
import {
  FitnessCenter,
  Schedule,
  Person,
  Star,
  CalendarToday
} from '@mui/icons-material';

const WeeklySchedule = ({gymId = localStorage.getItem("userId")}) => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const daysOfWeek = [
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  // Fetch schedules from API
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://gympro-backend-i0rv.onrender.com/api/schedules/gym/${gymId}/week`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch schedules');
        }
        
        const data = await response.json();
        setSchedules(data.schedules || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching schedules:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [gymId]);

  // Group schedules by day of week
  const groupSchedulesByDay = () => {
    const grouped = {};
    
    daysOfWeek.forEach(day => {
      grouped[day] = [];
    });

    schedules.forEach(schedule => {
      const scheduleDate = new Date(schedule.class.date);
      const dayName = scheduleDate.toLocaleDateString('en-US', { weekday: 'long' });
      
      if (grouped[dayName]) {
        grouped[dayName].push(schedule);
      }
    });

    // Sort classes by time within each day
    Object.keys(grouped).forEach(day => {
      grouped[day].sort((a, b) => {
        const timeA = a.class.time_slot.startTime;
        const timeB = b.class.time_slot.startTime;
        return timeA.localeCompare(timeB);
      });
    });

    return grouped;
  };

  const groupedSchedules = groupSchedulesByDay();

  // Class card component
  const ClassCard = ({ schedule }) => {
    const { class: classInfo, trainer } = schedule;
    const { startTime, endTime } = classInfo.time_slot;
    
    return (
      <Card
        sx={{
          mb: 2,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
          borderRadius: 3,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
          }
        }}
      >
        <CardContent sx={{ p: 2.5 }}>
          <Box display="flex" alignItems="center" mb={1.5}>
            <FitnessCenter sx={{ mr: 1, color: '#fff' }} />
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>
              {classInfo.name}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" mb={1.5}>
            <Schedule sx={{ mr: 1, fontSize: 18, color: 'rgba(255,255,255,0.8)' }} />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              {startTime} - {endTime}
            </Typography>
          </Box>

          <Box mb={1.5}>
            <Chip
              icon={<Star />}
              label={classInfo.skill_required}
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: '#fff',
                fontWeight: 'bold',
                '& .MuiChip-icon': {
                  color: '#fff'
                }
              }}
            />
          </Box>

          {trainer && (
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  mr: 1,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  fontSize: 12
                }}
              >
                <Person fontSize="small" />
              </Avatar>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                {trainer.name}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="400px"
        sx={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: 4,
          p: 3
        }}
      >
        <CircularProgress size={60} sx={{ color: '#667eea' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert 
        severity="error" 
        sx={{ 
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)' 
        }}
      >
        Error loading schedules: {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box 
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 4,
          p: 3,
          mb: 4,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <CalendarToday sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h4" fontWeight="bold">
            Weekly Schedule
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Your gym's complete weekly class timetable
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {daysOfWeek.map((day) => (
          <Grid item xs={12} md={6} lg={4} key={day}>
            <Paper
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)',
                borderRadius: 4,
                p: 3,
                minHeight: 200,
                border: '1px solid rgba(102, 126, 234, 0.1)'
              }}
            >
              <Box 
                sx={{
                  textAlign: 'center',
                  mb: 3,
                  pb: 2,
                  borderBottom: '2px solid rgba(102, 126, 234, 0.2)'
                }}
              >
                <Typography 
                  variant="h6" 
                  fontWeight="bold"
                  sx={{ 
                    color: '#667eea',
                    textTransform: 'uppercase',
                    letterSpacing: 1
                  }}
                >
                  {day}
                </Typography>
              </Box>

              {groupedSchedules[day].length > 0 ? (
                groupedSchedules[day].map((schedule) => (
                  <ClassCard key={schedule._id} schedule={schedule} />
                ))
              ) : (
                <Box 
                  sx={{
                    textAlign: 'center',
                    py: 4,
                    color: 'rgba(102, 126, 234, 0.6)'
                  }}
                >
                  <Typography variant="body2" fontStyle="italic">
                    No classes scheduled
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box 
        sx={{
          mt: 4,
          p: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 4,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Total Classes This Week: {schedules.length}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          Keep your fitness journey on track with our diverse class schedule
        </Typography>
      </Box>
    </Box>
  );
};

export default WeeklySchedule;