// import React, { useState, useCallback, useMemo } from 'react';
// import {
//   Paper,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
//   Grid,
//   Box,
//   Alert,
//   Divider,
//   Card,
//   CardContent,
//   IconButton,
//   Fade,
//   Slide,
//   Zoom
// } from '@mui/material';
// import {
//   Add as AddIcon,
//   Delete as DeleteIcon,
//   Save as SaveIcon,
//   Schedule as ScheduleIcon,
//   AccessTime as TimeIcon
// } from '@mui/icons-material';

// const AvailabilitySection = ({ 
//   initialAvailability = [], 
//   preferredGyms = [],
//   onSave 
// }) => {
//   const [availability, setAvailability] = useState(initialAvailability);
//   const [newSlot, setNewSlot] = useState({
//     day: '',
//     startTime: '',
//     endTime: '',
//     gym: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [animateCards, setAnimateCards] = useState(false);

//   const daysOfWeek = [
//     'Monday',
//     'Tuesday', 
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
//   ];

//   const styles = {
//     mainPaper: {
//       p: 4, 
//       mt: 3,
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       borderRadius: 3,
//       position: 'relative',
//       overflow: 'hidden',
//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'rgba(255, 255, 255, 0.1)',
//         backdropFilter: 'blur(10px)',
//         zIndex: 0
//       }
//     },
//     contentWrapper: {
//       position: 'relative',
//       zIndex: 1,
//       backgroundColor: 'rgba(255, 255, 255, 0.95)',
//       borderRadius: 2,
//       p: 3,
//       backdropFilter: 'blur(20px)'
//     },
//     headerSection: {
//       mb: 3,
//       textAlign: 'center'
//     },
//     title: {
//       display: 'flex', 
//       alignItems: 'center', 
//       justifyContent: 'center',
//       gap: 1,
//       color: '#1a237e',
//       fontWeight: 700,
//       fontSize: '2rem',
//       mb: 1
//     },
//     subtitle: {
//       color: '#5e35b1',
//       fontWeight: 500
//     },
//     formCard: {
//       mb: 3, 
//       background: 'linear-gradient(45deg, #f8f9ff 0%, #e8eaf6 100%)',
//       border: '2px solid #e1bee7',
//       borderRadius: 2,
//       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//       '&:hover': {
//         transform: 'translateY(-2px)',
//         boxShadow: '0 8px 25px rgba(103, 58, 183, 0.15)'
//       }
//     },
//     formTitle: {
//       mb: 2, 
//       color: '#4527a0',
//       fontWeight: 600,
//       display: 'flex',
//       alignItems: 'center',
//       gap: 1
//     },
//     addButton: {
//       height: '56px',
//       background: 'linear-gradient(45deg, #4caf50 30%, #8bc34a 90%)',
//       color: 'white',
//       fontWeight: 600,
//       borderRadius: 2,
//       transition: 'all 0.3s ease',
//       '&:hover': {
//         background: 'linear-gradient(45deg, #388e3c 30%, #689f38 90%)',
//         transform: 'scale(1.05)',
//         boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)'
//       }
//     },
//     dayCard: (hasSlots) => ({
//       minHeight: '140px',
//       background: hasSlots 
//         ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)'
//         : 'linear-gradient(135deg, #fafafa 0%, #eeeeee 100%)',
//       border: hasSlots ? '2px solid #4caf50' : '1px solid #e0e0e0',
//       borderRadius: 2,
//       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//       transform: animateCards ? 'scale(1)' : 'scale(0.95)',
//       opacity: animateCards ? 1 : 0.8,
//       '&:hover': {
//         transform: 'translateY(-4px) scale(1.02)',
//         boxShadow: hasSlots 
//           ? '0 12px 25px rgba(76, 175, 80, 0.2)'
//           : '0 8px 20px rgba(0, 0, 0, 0.1)'
//       }
//     }),
//     dayTitle: (hasSlots) => ({
//       fontWeight: 700, 
//       mb: 1.5,
//       color: hasSlots ? '#2e7d32' : '#757575',
//       fontSize: '1.1rem',
//       textAlign: 'center',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px'
//     }),
//     timeSlot: {
//       mb: 1, 
//       p: 1.5, 
//       background: 'linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)', 
//       borderRadius: 2,
//       border: '1px solid #e3f2fd',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       transition: 'all 0.3s ease',
//       '&:hover': {
//         transform: 'translateX(4px)',
//         boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)',
//         borderColor: '#2196f3'
//       }
//     },
//     timeText: {
//       fontWeight: 600,
//       color: '#1565c0',
//       fontSize: '0.95rem'
//     },
//     gymText: {
//       color: '#666',
//       fontSize: '0.85rem',
//       fontStyle: 'italic'
//     },
//     deleteButton: {
//       color: '#f44336',
//       transition: 'all 0.3s ease',
//       '&:hover': {
//         backgroundColor: 'rgba(244, 67, 54, 0.1)',
//         transform: 'scale(1.2)'
//       }
//     },
//     saveButton: {
//       px: 6,
//       py: 2,
//       fontSize: '1.2rem',
//       fontWeight: 700,
//       background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
//       color: 'white',
//       borderRadius: 3,
//       textTransform: 'none',
//       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//       '&:hover': {
//         background: 'linear-gradient(45deg, #1976d2 30%, #1de9b6 90%)',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 8px 25px rgba(33, 150, 243, 0.4)'
//       },
//       '&:disabled': {
//         background: '#cccccc',
//         color: '#666666'
//       }
//     }
//   };

//   const validateTimeSlot = useCallback(() => {
//     if (!newSlot.day || !newSlot.startTime || !newSlot.endTime || !newSlot.gym) {
//       setMessage({ type: 'error', text: 'Please fill in all fields' });
//       return false;
//     }

//     if (newSlot.startTime >= newSlot.endTime) {
//       setMessage({ type: 'error', text: 'End time must be after start time' });
//       return false;
//     }

//     return true;
//   }, [newSlot]);

//   const handleAddTimeSlot = useCallback(() => {
//     if (!validateTimeSlot()) return;

//     const newAvailabilitySlot = {
//       id: Date.now(),
//       day: newSlot.day,
//       startTime: newSlot.startTime,
//       endTime: newSlot.endTime,
//       gym: newSlot.gym
//     };

//     setAvailability(prev => [...prev, newAvailabilitySlot]);
//     setNewSlot({
//       day: '',
//       startTime: '',
//       endTime: '',
//       gym: ''
//     });
//     setMessage({ type: 'success', text: '✨ Time slot added successfully!' });
//     setAnimateCards(true);
    
//     setTimeout(() => setAnimateCards(false), 500);
//   }, [newSlot, validateTimeSlot]);

//   const handleRemoveSlot = useCallback((slotId) => {
//     setAvailability(prev => prev.filter(slot => slot.id !== slotId));
//     setMessage({ type: 'info', text: 'Time slot removed' });
//   }, []);

//   const handleSaveChanges = useCallback(async () => {
//     if (availability.length === 0) {
//       setMessage({ type: 'error', text: 'Please add at least one availability slot' });
//       return;
//     }

//     setLoading(true);
//     try {
//       await onSave(availability);
//       setMessage({ type: 'success', text: '🎉 Availability updated successfully!' });
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Failed to save availability. Please try again.' });
//     } finally {
//       setLoading(false);
//     }
//   }, [availability, onSave]);

//   const formatTime = useCallback((timeString) => {
//     if (!timeString) return '';
//     const [hours, minutes] = timeString.split(':');
//     const hour = parseInt(hours, 10);
//     const ampm = hour >= 12 ? 'PM' : 'AM';
//     const displayHour = hour % 12 || 12;
//     return `${displayHour}:${minutes} ${ampm}`;
//   }, []);

//   const availabilityByDay = useMemo(() => {
//     const grouped = {};
//     daysOfWeek.forEach(day => {
//       grouped[day] = availability.filter(slot => slot.day === day);
//     });
//     return grouped;
//   }, [availability, daysOfWeek]);

//   return (
//     <Paper elevation={8} sx={styles.mainPaper}>
//       <Box sx={styles.contentWrapper}>
//         <Fade in timeout={800}>
//           <Box sx={styles.headerSection}>
//             <Typography variant="h4" component="h2" sx={styles.title}>
//               <ScheduleIcon fontSize="large" />
//               Next Week Availability
//             </Typography>
//             <Typography variant="h6" sx={styles.subtitle}>
//               Set your availability for the upcoming week
//             </Typography>
//           </Box>
//         </Fade>

//         {message.text && (
//           <Slide direction="down" in={!!message.text} timeout={400}>
//             <Alert 
//               severity={message.type} 
//               sx={{ mb: 3, borderRadius: 2 }}
//               onClose={() => setMessage({ type: '', text: '' })}
//             >
//               {message.text}
//             </Alert>
//           </Slide>
//         )}

//         {/* Add New Time Slot Form */}
//         <Zoom in timeout={600}>
//           <Card sx={styles.formCard}>
//             <CardContent>
//               <Typography variant="h6" sx={styles.formTitle}>
//                 <TimeIcon />
//                 Add New Time Slot
//               </Typography>
              
//               <Grid container spacing={3} alignItems="center">
//                 <Grid item xs={12} sm={3}>
//                   <FormControl fullWidth>
//                     <InputLabel>Day</InputLabel>
//                     <Select
//                       value={newSlot.day}
//                       onChange={(e) => setNewSlot(prev => ({ ...prev, day: e.target.value }))}
//                       label="Day"
//                       sx={{ borderRadius: 2 }}
//                     >
//                       {daysOfWeek.map((day) => (
//                         <MenuItem key={day} value={day}>
//                           {day}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} sm={2}>
//                   <TextField
//                     label="Start Time"
//                     type="time"
//                     value={newSlot.startTime}
//                     onChange={(e) => setNewSlot(prev => ({ ...prev, startTime: e.target.value }))}
//                     fullWidth
//                     InputLabelProps={{ shrink: true }}
//                     sx={{ borderRadius: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={2}>
//                   <TextField
//                     label="End Time"
//                     type="time"
//                     value={newSlot.endTime}
//                     onChange={(e) => setNewSlot(prev => ({ ...prev, endTime: e.target.value }))}
//                     fullWidth
//                     InputLabelProps={{ shrink: true }}
//                     sx={{ borderRadius: 2 }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={3}>
//                   <FormControl fullWidth>
//                     <InputLabel>Preferred Gym</InputLabel>
//                     <Select
//                       value={newSlot.gym}
//                       onChange={(e) => setNewSlot(prev => ({ ...prev, gym: e.target.value }))}
//                       label="Preferred Gym"
//                       sx={{ borderRadius: 2 }}
//                     >
//                       {preferredGyms.map((gym) => (
//                         <MenuItem key={gym.id} value={gym.name}>
//                           {gym.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} sm={2}>
//                   <Button
//                     variant="contained"
//                     startIcon={<AddIcon />}
//                     onClick={handleAddTimeSlot}
//                     fullWidth
//                     sx={styles.addButton}
//                   >
//                     Add Slot
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Zoom>

//         <Divider sx={{ my: 4, background: 'linear-gradient(90deg, transparent, #9c27b0, transparent)' }} />

//         {/* Current Availability Display */}
//         <Fade in timeout={1000}>
//           <Box sx={{ mb: 4 }}>
//             <Typography variant="h5" sx={{ mb: 3, color: '#4527a0', fontWeight: 600, textAlign: 'center' }}>
//               📅 Current Availability Schedule
//             </Typography>
            
//             {availability.length === 0 ? (
//               <Zoom in timeout={600}>
//                 <Typography 
//                   variant="h6" 
//                   sx={{ 
//                     textAlign: 'center',
//                     color: '#9e9e9e',
//                     fontStyle: 'italic',
//                     py: 4
//                   }}
//                 >
//                   No availability slots added yet. Start by adding your first time slot! 🚀
//                 </Typography>
//               </Zoom>
//             ) : (
//               <Grid container spacing={2}>
//                 {daysOfWeek.map((day, index) => (
//                   <Grid item xs={12} sm={6} md={4} key={day}>
//                     <Slide 
//                       direction="up" 
//                       in 
//                       timeout={400 + (index * 100)} 
//                       style={{ transitionDelay: `${index * 50}ms` }}
//                     >
//                       <Card sx={styles.dayCard(availabilityByDay[day].length > 0)}>
//                         <CardContent sx={{ pb: '16px !important' }}>
//                           <Typography variant="h6" sx={styles.dayTitle(availabilityByDay[day].length > 0)}>
//                             {day}
//                           </Typography>
                          
//                           {availabilityByDay[day].length === 0 ? (
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 textAlign: 'center',
//                                 color: '#bdbdbd',
//                                 fontStyle: 'italic',
//                                 mt: 2
//                               }}
//                             >
//                               No slots available
//                             </Typography>
//                           ) : (
//                             availabilityByDay[day].map((slot, slotIndex) => (
//                               <Fade 
//                                 key={slot.id} 
//                                 in 
//                                 timeout={600} 
//                                 style={{ transitionDelay: `${slotIndex * 100}ms` }}
//                               >
//                                 <Box sx={styles.timeSlot}>
//                                   <Box>
//                                     <Typography sx={styles.timeText}>
//                                       {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
//                                     </Typography>
//                                     <Typography sx={styles.gymText}>
//                                       📍 {slot.gym}
//                                     </Typography>
//                                   </Box>
//                                   <IconButton
//                                     size="small"
//                                     onClick={() => handleRemoveSlot(slot.id)}
//                                     sx={styles.deleteButton}
//                                   >
//                                     <DeleteIcon fontSize="small" />
//                                   </IconButton>
//                                 </Box>
//                               </Fade>
//                             ))
//                           )}
//                         </CardContent>
//                       </Card>
//                     </Slide>
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//           </Box>
//         </Fade>

//         {/* Save Button */}
//         <Zoom in timeout={800}>
//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//             <Button
//               variant="contained"
//               size="large"
//               startIcon={<SaveIcon />}
//               onClick={handleSaveChanges}
//               disabled={loading || availability.length === 0}
//               sx={styles.saveButton}
//             >
//               {loading ? '💾 Saving...' : '💾 Save All Changes'}
//             </Button>
//           </Box>
//         </Zoom>
//       </Box>
//     </Paper>
//   );
// };

// export default AvailabilitySection;



import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Box,
  Alert,
  Divider,
  Card,
  CardContent,
  IconButton,
  Fade,
  Slide,
  Zoom
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Schedule as ScheduleIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';

const AvailabilitySection = ({ 
  initialAvailability = [], 
  preferredGyms = [],
  trainerId // Add trainerId prop
}) => {
  const [availability, setAvailability] = useState([]);
  const [newSlot, setNewSlot] = useState({
    day: '',
    startTime: '',
    endTime: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [animateCards, setAnimateCards] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Load availability from localStorage on component mount
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData.availability && parsedUserData.availability.length > 0) {
          setAvailability(parsedUserData.availability);
        }
      } catch (error) {
        console.error('Error parsing userData from localStorage:', error);
      }
    }
  }, []);

  const daysOfWeek = [
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const styles = {
    mainPaper: {
      p: 4, 
      mt: 3,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 3,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 0
      }
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 2,
      p: 3,
      backdropFilter: 'blur(20px)'
    },
    headerSection: {
      mb: 3,
      textAlign: 'center'
    },
    title: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: 1,
      color: '#1a237e',
      fontWeight: 700,
      fontSize: '2rem',
      mb: 1
    },
    subtitle: {
      color: '#5e35b1',
      fontWeight: 500
    },
    formCard: {
      mb: 3, 
      background: 'linear-gradient(45deg, #f8f9ff 0%, #e8eaf6 100%)',
      border: '2px solid #e1bee7',
      borderRadius: 2,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(103, 58, 183, 0.15)'
      }
    },
    formTitle: {
      mb: 2, 
      color: '#4527a0',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 1
    },
    addButton: {
      height: '56px',
      background: 'linear-gradient(45deg, #4caf50 30%, #8bc34a 90%)',
      color: 'white',
      fontWeight: 600,
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'linear-gradient(45deg, #388e3c 30%, #689f38 90%)',
        transform: 'scale(1.05)',
        boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)'
      }
    },
    editButton: {
      px: 4,
      py: 1.5,
      fontSize: '1rem',
      fontWeight: 600,
      background: 'linear-gradient(45deg, #ff9800 30%, #ffc107 90%)',
      color: 'white',
      borderRadius: 2,
      textTransform: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'linear-gradient(45deg, #f57c00 30%, #ff8f00 90%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)'
      }
    },
    dayCard: (hasSlots) => ({
      minHeight: '140px',
      background: hasSlots 
        ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)'
        : 'linear-gradient(135deg, #fafafa 0%, #eeeeee 100%)',
      border: hasSlots ? '2px solid #4caf50' : '1px solid #e0e0e0',
      borderRadius: 2,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: animateCards ? 'scale(1)' : 'scale(0.95)',
      opacity: animateCards ? 1 : 0.8,
      '&:hover': {
        transform: 'translateY(-4px) scale(1.02)',
        boxShadow: hasSlots 
          ? '0 12px 25px rgba(76, 175, 80, 0.2)'
          : '0 8px 20px rgba(0, 0, 0, 0.1)'
      }
    }),
    dayTitle: (hasSlots) => ({
      fontWeight: 700, 
      mb: 1.5,
      color: hasSlots ? '#2e7d32' : '#757575',
      fontSize: '1.1rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }),
    timeSlot: {
      mb: 1, 
      p: 1.5, 
      background: 'linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)', 
      borderRadius: 2,
      border: '1px solid #e3f2fd',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateX(4px)',
        boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)',
        borderColor: '#2196f3'
      }
    },
    timeText: {
      fontWeight: 600,
      color: '#1565c0',
      fontSize: '0.95rem'
    },
    deleteButton: {
      color: '#f44336',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        transform: 'scale(1.2)'
      }
    }
  };

  const validateTimeSlot = useCallback(() => {
    if (!newSlot.day || !newSlot.startTime || !newSlot.endTime) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return false;
    }

    if (newSlot.startTime >= newSlot.endTime) {
      setMessage({ type: 'error', text: 'End time must be after start time' });
      return false;
    }

    // Check for overlapping time slots on the same day
    const existingSlots = availability.filter(slot => slot.day === newSlot.day);
    const hasOverlap = existingSlots.some(slot => {
      return (newSlot.startTime < slot.endTime && newSlot.endTime > slot.startTime);
    });

    if (hasOverlap) {
      setMessage({ type: 'error', text: 'Time slot overlaps with existing availability' });
      return false;
    }

    return true;
  }, [newSlot, availability]);

  const handleAddTimeSlot = useCallback(async () => {
    if (!validateTimeSlot()) return;

    const newAvailabilitySlot = {
      day: newSlot.day,
      startTime: newSlot.startTime,
      endTime: newSlot.endTime
    };

    const updatedAvailability = [...availability, newAvailabilitySlot];

    // Update the database immediately when adding a new slot
    if (!trainerId) {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setMessage({ type: 'error', text: 'User ID not found' });
        return;
      }
    }

    setLoading(true);
    try {
      const id = trainerId || localStorage.getItem('userId');
      const response = await fetch(`http://localhost:5000/api/trainers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          availability: updatedAvailability
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update availability');
      }

      const result = await response.json();
      
      // Update local state
      setAvailability(updatedAvailability);
      
      // Update localStorage
      const userData = localStorage.getItem('userData');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        parsedUserData.availability = updatedAvailability;
        localStorage.setItem('userData', JSON.stringify(parsedUserData));
      }
      
      setNewSlot({
        day: '',
        startTime: '',
        endTime: ''
      });
      setMessage({ type: 'success', text: '✨ Time slot added and saved successfully!' });
      setAnimateCards(true);
      
      setTimeout(() => setAnimateCards(false), 500);
    } catch (error) {
      console.error('Error adding availability:', error);
      setMessage({ type: 'error', text: 'Failed to add availability. Please try again.' });
    } finally {
      setLoading(false);
    }
  }, [newSlot, validateTimeSlot, availability, trainerId]);

  const handleRemoveSlot = useCallback(async (day, startTime, endTime) => {
    const updatedAvailability = availability.filter(slot => 
      !(slot.day === day && slot.startTime === startTime && slot.endTime === endTime)
    );

    // Update the database immediately when removing a slot
    const id = trainerId || localStorage.getItem('userId');
    if (!id) {
      setMessage({ type: 'error', text: 'User ID not found' });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/trainers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          availability: updatedAvailability
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update availability');
      }

      // Update local state
      setAvailability(updatedAvailability);
      
      // Update localStorage
      const userData = localStorage.getItem('userData');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        parsedUserData.availability = updatedAvailability;
        localStorage.setItem('userData', JSON.stringify(parsedUserData));
      }
      
      setMessage({ type: 'info', text: 'Time slot removed successfully' });
    } catch (error) {
      console.error('Error removing availability:', error);
      setMessage({ type: 'error', text: 'Failed to remove availability. Please try again.' });
    } finally {
      setLoading(false);
    }
  }, [availability, trainerId]);

  const handleEditToggle = useCallback(() => {
    setEditMode(!editMode);
    setMessage({ 
      type: 'info', 
      text: editMode ? 'Edit mode disabled' : 'Edit mode enabled - You can now add/remove time slots' 
    });
  }, [editMode]);

  const availabilityByDay = useMemo(() => {
    const grouped = {};
    daysOfWeek.forEach(day => {
      grouped[day] = availability.filter(slot => slot.day === day);
    });
    return grouped;
  }, [availability, daysOfWeek]);

  return (
    <Paper elevation={8} sx={styles.mainPaper}>
      <Box sx={styles.contentWrapper}>
        <Fade in timeout={800}>
          <Box sx={styles.headerSection}>
            <Typography variant="h4" component="h2" sx={styles.title}>
              <ScheduleIcon fontSize="large" />
              Trainer Availability
            </Typography>
            <Typography variant="h6" sx={styles.subtitle}>
              Manage your availability schedule
            </Typography>
            
            {/* Edit Button */}
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={handleEditToggle}
                sx={styles.editButton}
              >
                {editMode ? 'Disable Edit' : 'Edit Availability'}
              </Button>
            </Box>
          </Box>
        </Fade>

        {message.text && (
          <Slide direction="down" in={!!message.text} timeout={400}>
            <Alert 
              severity={message.type} 
              sx={{ mb: 3, borderRadius: 2 }}
              onClose={() => setMessage({ type: '', text: '' })}
            >
              {message.text}
            </Alert>
          </Slide>
        )}

        {/* Add New Time Slot Form - Only show in edit mode */}
        {editMode && (
          <Zoom in timeout={600}>
            <Card sx={styles.formCard}>
              <CardContent>
                <Typography variant="h6" sx={styles.formTitle}>
                  <TimeIcon />
                  Add New Time Slot
                </Typography>
                
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel>Day</InputLabel>
                      <Select
                        value={newSlot.day}
                        onChange={(e) => setNewSlot(prev => ({ ...prev, day: e.target.value }))}
                        label="Day"
                        sx={{ borderRadius: 2 }}
                      >
                        {daysOfWeek.map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      label="Start Time"
                      type="time"
                      value={newSlot.startTime}
                      onChange={(e) => setNewSlot(prev => ({ ...prev, startTime: e.target.value }))}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      sx={{ borderRadius: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      label="End Time"
                      type="time"
                      value={newSlot.endTime}
                      onChange={(e) => setNewSlot(prev => ({ ...prev, endTime: e.target.value }))}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      sx={{ borderRadius: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={2}>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={handleAddTimeSlot}
                      fullWidth
                      disabled={loading}
                      sx={styles.addButton}
                    >
                      {loading ? 'Adding...' : 'Add Slot'}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Zoom>
        )}

        <Divider sx={{ my: 4, background: 'linear-gradient(90deg, transparent, #9c27b0, transparent)' }} />

        {/* Current Availability Display */}
        <Fade in timeout={1000}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, color: '#4527a0', fontWeight: 600, textAlign: 'center' }}>
              📅 Current Availability Schedule
            </Typography>
            
            {availability.length === 0 ? (
              <Zoom in timeout={600}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    textAlign: 'center',
                    color: '#9e9e9e',
                    fontStyle: 'italic',
                    py: 4
                  }}
                >
                  No availability slots set yet. Click "Edit Availability" to add your schedule! 🚀
                </Typography>
              </Zoom>
            ) : (
              <Grid container spacing={2}>
                {daysOfWeek.map((day, index) => (
                  <Grid item xs={12} sm={6} md={4} key={day}>
                    <Slide 
                      direction="up" 
                      in 
                      timeout={400 + (index * 100)} 
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <Card sx={styles.dayCard(availabilityByDay[day].length > 0)}>
                        <CardContent sx={{ pb: '16px !important' }}>
                          <Typography variant="h6" sx={styles.dayTitle(availabilityByDay[day].length > 0)}>
                            {day}
                          </Typography>
                          
                          {availabilityByDay[day].length === 0 ? (
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                textAlign: 'center',
                                color: '#bdbdbd',
                                fontStyle: 'italic',
                                mt: 2
                              }}
                            >
                              No slots available
                            </Typography>
                          ) : (
                            availabilityByDay[day].map((slot, slotIndex) => (
                              <Fade 
                                key={`${slot.day}-${slot.startTime}-${slot.endTime}`} 
                                in 
                                timeout={600} 
                                style={{ transitionDelay: `${slotIndex * 100}ms` }}
                              >
                                <Box sx={styles.timeSlot}>
                                  <Box>
                                    <Typography sx={styles.timeText}>
                                      {slot.startTime} - {slot.endTime}
                                    </Typography>
                                  </Box>
                                  {editMode && (
                                    <IconButton
                                      size="small"
                                      onClick={() => handleRemoveSlot(slot.day, slot.startTime, slot.endTime)}
                                      sx={styles.deleteButton}
                                      disabled={loading}
                                    >
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                  )}
                                </Box>
                              </Fade>
                            ))
                          )}
                        </CardContent>
                      </Card>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Fade>
      </Box>
    </Paper>
  );
};

export default AvailabilitySection;