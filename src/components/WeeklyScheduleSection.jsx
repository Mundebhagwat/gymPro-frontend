// import React, { useState } from 'react';
// import {
//   Paper,
//   Typography,
//   Box,
//   Grid,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   DialogContentText,
//   Container,
//   Divider
// } from '@mui/material';
// import {
//   Cancel as CancelIcon,
//   FitnessCenter as GymIcon,
//   Schedule as TimeIcon,
//   LocationOn as LocationIcon
// } from '@mui/icons-material';

// const WeeklyScheduleSection = () => {
//   const [cancelDialog, setCancelDialog] = useState({ open: false, classId: null });

//   // Time slots for the schedule
//   const timeSlots = [
//     '6:00 - 7:00 AM',
//     '7:00 - 8:00 AM',
//     '8:00 - 9:00 AM',
//     '5:00 - 6:00 PM',
//     '6:00 - 7:00 PM',
//     '7:00 - 8:00 PM',
//     '8:00 - 9:00 PM'
//   ];

//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   // Dummy data - will be replaced with real data later
//   const scheduleData = {
//     'Monday': {
//       '6:00 - 7:00 AM': { id: 1, className: 'Morning Yoga', gymName: 'Zen Fitness', booked: true },
//       '7:00 - 8:00 PM': { id: 2, className: 'CrossFit', gymName: 'Iron Gym', booked: true }
//     },
//     'Tuesday': {
//       '6:00 - 7:00 PM': { id: 3, className: 'Pilates', gymName: 'Flex Studio', booked: true }
//     },
//     'Wednesday': {
//       '6:00 - 7:00 AM': { id: 4, className: 'HIIT Training', gymName: 'Power Gym', booked: true },
//       '8:00 - 9:00 PM': { id: 5, className: 'Spin Class', gymName: 'Cycle Hub', booked: true }
//     },
//     'Thursday': {
//       '5:00 - 6:00 PM': { id: 6, className: 'Boxing', gymName: 'Fight Club', booked: true }
//     },
//     'Friday': {
//       '7:00 - 8:00 PM': { id: 7, className: 'Zumba', gymName: 'Dance Fit', booked: true }
//     },
//     'Saturday': {
//       '8:00 - 9:00 AM': { id: 8, className: 'Boot Camp', gymName: 'Outdoor Fitness', booked: true },
//       '6:00 - 7:00 PM': { id: 9, className: 'Strength Training', gymName: 'Iron Gym', booked: true }
//     },
//     'Sunday': {
//       '9:00 - 10:00 AM': { id: 10, className: 'Recovery Yoga', gymName: 'Zen Fitness', booked: true }
//     }
//   };

//   const handleCancelClick = (classId) => {
//     setCancelDialog({ open: true, classId });
//   };

//   const handleCancelConfirm = () => {
//     // Logic to cancel class booking will be implemented here
//     console.log('Cancelling class with ID:', cancelDialog.classId);
//     setCancelDialog({ open: false, classId: null });
//     // TODO: Remove class from schedule or mark as cancelled
//   };

//   const handleCancelClose = () => {
//     setCancelDialog({ open: false, classId: null });
//   };

//   const getClassesForDay = (day) => {
//     const daySchedule = scheduleData[day] || {};
//     return Object.entries(daySchedule)
//       .filter(([_, classData]) => classData.booked)
//       .map(([timeSlot, classData]) => ({ ...classData, timeSlot }));
//   };

//   const renderClassItem = (classData) => (
//     <Card
//       key={classData.id}
//       sx={{
//         mb: 2,
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         color: 'white',
//         borderRadius: 3,
//         overflow: 'hidden',
//         position: 'relative',
//         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 12px 24px rgba(102, 126, 234, 0.3)',
//         },
//         '&:last-child': {
//           mb: 0
//         }
//       }}
//     >
//       <CardContent sx={{ p: 3, position: 'relative' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               fontSize: '1.1rem',
//               textShadow: '0 1px 2px rgba(0,0,0,0.1)'
//             }}
//           >
//             {classData.className}
//           </Typography>
//           <IconButton
//             size="small"
//             onClick={() => handleCancelClick(classData.id)}
//             sx={{
//               backgroundColor: 'rgba(255, 255, 255, 0.2)',
//               color: 'white',
//               backdropFilter: 'blur(10px)',
//               '&:hover': {
//                 backgroundColor: 'rgba(255, 82, 82, 0.8)',
//                 transform: 'scale(1.1)',
//               },
//               transition: 'all 0.2s ease'
//             }}
//           >
//             <CancelIcon fontSize="small" />
//           </IconButton>
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 }}>
//           <TimeIcon sx={{ fontSize: 18, mr: 1 }} />
//           <Typography variant="body2" sx={{ fontWeight: 500 }}>
//             {classData.timeSlot}
//           </Typography>
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, opacity: 0.9 }}>
//           <LocationIcon sx={{ fontSize: 18, mr: 1 }} />
//           <Typography variant="body2" sx={{ fontWeight: 500 }}>
//             {classData.gymName}
//           </Typography>
//         </Box>

//         <Chip
//           label="Booked"
//           size="small"
//           sx={{
//             backgroundColor: 'rgba(255, 255, 255, 0.2)',
//             color: 'white',
//             fontWeight: 600,
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.3)'
//           }}
//         />
//       </CardContent>
//     </Card>
//   );

//   const renderDayCard = (day) => {
//     const classes = getClassesForDay(day);
//     const hasClasses = classes.length > 0;

//     return (
//       <Grid item xs={12} sm={6} md={4} lg={12/7} key={day}>
//         <Paper
//           elevation={0}
//           sx={{
//             borderRadius: 4,
//             overflow: 'hidden',
//             background: hasClasses 
//               ? 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)'
//               : 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
//             border: '1px solid rgba(148, 163, 184, 0.1)',
//             transition: 'all 0.3s ease',
//             height: '100%',
//             minHeight: 400,
//             '&:hover': {
//               transform: 'translateY(-2px)',
//               boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
//             }
//           }}
//         >
//           <Box
//             sx={{
//               background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
//               color: 'white',
//               p: 2.5,
//               textAlign: 'center'
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 700,
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.5px',
//                 fontSize: '1rem'
//               }}
//             >
//               {day}
//             </Typography>
//           </Box>

//           <CardContent sx={{ p: 3, height: 'calc(100% - 70px)', display: 'flex', flexDirection: 'column' }}>
//             {hasClasses ? (
//               <Box sx={{ flex: 1 }}>
//                 {classes.map(renderClassItem)}
//               </Box>
//             ) : (
//               <Box
//                 sx={{
//                   flex: 1,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   opacity: 0.6
//                 }}
//               >
//                 <GymIcon sx={{ fontSize: 48, color: '#94a3b8', mb: 2 }} />
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: '#64748b',
//                     fontWeight: 500,
//                     textAlign: 'center',
//                     fontSize: '0.95rem'
//                   }}
//                 >
//                   No Classes Scheduled
//                 </Typography>
//               </Box>
//             )}
//           </CardContent>
//         </Paper>
//       </Grid>
//     );
//   };

//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Paper
//         elevation={0}
//         sx={{
//           borderRadius: 6,
//           background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
//           border: '1px solid rgba(226, 232, 240, 0.8)',
//           overflow: 'hidden'
//         }}
//       >
//         <Box
//           sx={{
//             background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//             color: 'white',
//             p: 4,
//             textAlign: 'center',
//             position: 'relative',
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//             }
//           }}
//         >
//           <Box sx={{ position: 'relative', zIndex: 1 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: 800,
//                 mb: 1,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//                 textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//               }}
//             >
//               Weekly Schedule
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 opacity: 0.9,
//                 fontWeight: 400,
//                 fontSize: '1.1rem'
//               }}
//             >
//               Your Fitness Journey This Week
//             </Typography>
//           </Box>
//         </Box>

//         <Box sx={{ p: 4 }}>
//           <Grid container spacing={3}>
//             {days.map(renderDayCard)}
//           </Grid>
//         </Box>
//       </Paper>

//       {/* Cancel Confirmation Dialog */}
//       <Dialog
//         open={cancelDialog.open}
//         onClose={handleCancelClose}
//         aria-labelledby="cancel-dialog-title"
//         aria-describedby="cancel-dialog-description"
//         PaperProps={{
//           sx: {
//             borderRadius: 4,
//             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
//           }
//         }}
//       >
//         <DialogTitle 
//           id="cancel-dialog-title" 
//           sx={{ 
//             color: '#dc2626',
//             fontWeight: 700,
//             fontSize: '1.25rem',
//             pb: 1
//           }}
//         >
//           Cancel Class Booking
//         </DialogTitle>
//         <Divider />
//         <DialogContent sx={{ pt: 3 }}>
//           <DialogContentText 
//             id="cancel-dialog-description"
//             sx={{ 
//               fontSize: '1rem',
//               color: '#374151',
//               lineHeight: 1.6
//             }}
//           >
//             Are you sure you want to cancel this class booking? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 2 }}>
//           <Button
//             onClick={handleCancelClose}
//             variant="outlined"
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               borderColor: '#d1d5db',
//               color: '#374151',
//               '&:hover': {
//                 borderColor: '#9ca3af',
//                 backgroundColor: '#f9fafb'
//               }
//             }}
//           >
//             Keep Booking
//           </Button>
//           <Button
//             onClick={handleCancelConfirm}
//             variant="contained"
//             color="error"
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
//               boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.25)',
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)',
//                 boxShadow: '0 6px 20px 0 rgba(220, 38, 38, 0.35)'
//               }
//             }}
//             autoFocus
//           >
//             Cancel Booking
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default WeeklyScheduleSection;


// import React, { useState, useEffect } from 'react';
// import {
//   Paper,
//   Typography,
//   Box,
//   Grid,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   DialogContentText,
//   Container,
//   Divider,
//   CircularProgress
// } from '@mui/material';
// import {
//   Cancel as CancelIcon,
//   FitnessCenter as GymIcon,
//   Schedule as TimeIcon,
//   LocationOn as LocationIcon
// } from '@mui/icons-material';

// const WeeklyScheduleSection = ({trainerId = localStorage.getItem("userId")}) => {
//   const [cancelDialog, setCancelDialog] = useState({ open: false, classId: null });
//   const [scheduleData, setScheduleData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Time slots for the schedule
//   const timeSlots = [
//     '6:00 - 7:00 AM',
//     '7:00 - 8:00 AM',
//     '8:00 - 9:00 AM',
//     '5:00 - 6:00 PM',
//     '6:00 - 7:00 PM',
//     '7:00 - 8:00 PM',
//     '8:00 - 9:00 PM'
//   ];

//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   // Function to format time from API format to display format
//   const formatTimeSlot = (startTime, endTime) => {
//     const formatTime = (time) => {
//       const [hours, minutes] = time.split(':');
//       const hour = parseInt(hours);
//       const ampm = hour >= 12 ? 'PM' : 'AM';
//       const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
//       return `${displayHour}:${minutes} ${ampm}`;
//     };
    
//     return `${formatTime(startTime)} - ${formatTime(endTime)}`;
//   };

//   // Function to get day name from date
//   const getDayName = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   // Fetch schedule data from API
//   const fetchScheduleData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await fetch(`https://gympro-backend-i0rv.onrender.com/api/schedules/trainer/${trainerId}/week`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
        
//       }
      
//       const data = await response.json();
      
//       // Transform API data to match the existing component structure
//       const transformedData = {};
      
//       data.schedules.forEach((schedule) => {
//         const dayName = getDayName(schedule.class.date);
//         const timeSlot = formatTimeSlot(
//           schedule.class.time_slot.startTime,
//           schedule.class.time_slot.endTime
//         );
        
//         if (!transformedData[dayName]) {
//           transformedData[dayName] = {};
//         }
        
//         transformedData[dayName][timeSlot] = {
//           id: schedule._id,
//           className: schedule.class.name,
//           gymName: schedule.gym.name,
//           gymLocation: schedule.gym.location,
//           booked: schedule.status === 'Scheduled',
//           status: schedule.status,
//           skillRequired: schedule.class.skill_required,
//           originalDate: schedule.class.date
//         };
//       });
      
//       setScheduleData(transformedData);
//     } catch (err) {
//       console.error('Error fetching schedule data:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchScheduleData();
//   }, []);

//   const handleCancelClick = (classId) => {
//     setCancelDialog({ open: true, classId });
//   };

//   const handleCancelConfirm = () => {
//     // Logic to cancel class booking will be implemented here
//     console.log('Cancelling class with ID:', cancelDialog.classId);
//     setCancelDialog({ open: false, classId: null });
//     // TODO: Make API call to cancel the class and refresh data
//     // After successful cancellation, you might want to call fetchScheduleData() again
//   };

//   const handleCancelClose = () => {
//     setCancelDialog({ open: false, classId: null });
//   };

//   const getClassesForDay = (day) => {
//     const daySchedule = scheduleData[day] || {};
//     return Object.entries(daySchedule)
//       .filter(([_, classData]) => classData.booked)
//       .map(([timeSlot, classData]) => ({ ...classData, timeSlot }));
//   };

//   const renderClassItem = (classData) => (
//     <Card
//       key={classData.id}
//       sx={{
//         mb: 2,
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         color: 'white',
//         borderRadius: 3,
//         overflow: 'hidden',
//         position: 'relative',
//         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 12px 24px rgba(102, 126, 234, 0.3)',
//         },
//         '&:last-child': {
//           mb: 0
//         }
//       }}
//     >
//       <CardContent sx={{ p: 3, position: 'relative' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               fontSize: '1.1rem',
//               textShadow: '0 1px 2px rgba(0,0,0,0.1)'
//             }}
//           >
//             {classData.className}
//           </Typography>
//           <IconButton
//             size="small"
//             onClick={() => handleCancelClick(classData.id)}
//             sx={{
//               backgroundColor: 'rgba(255, 255, 255, 0.2)',
//               color: 'white',
//               backdropFilter: 'blur(10px)',
//               '&:hover': {
//                 backgroundColor: 'rgba(255, 82, 82, 0.8)',
//                 transform: 'scale(1.1)',
//               },
//               transition: 'all 0.2s ease'
//             }}
//           >
//             <CancelIcon fontSize="small" />
//           </IconButton>
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 }}>
//           <TimeIcon sx={{ fontSize: 18, mr: 1 }} />
//           <Typography variant="body2" sx={{ fontWeight: 500 }}>
//             {classData.timeSlot}
//           </Typography>
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, opacity: 0.9 }}>
//           <LocationIcon sx={{ fontSize: 18, mr: 1 }} />
//           <Typography variant="body2" sx={{ fontWeight: 500 }}>
//             {classData.gymName}
//             {classData.gymLocation && ` - ${classData.gymLocation}`}
//           </Typography>
//         </Box>

//         <Chip
//           label={classData.status || "Booked"}
//           size="small"
//           sx={{
//             backgroundColor: 'rgba(255, 255, 255, 0.2)',
//             color: 'white',
//             fontWeight: 600,
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.3)'
//           }}
//         />
//       </CardContent>
//     </Card>
//   );

//   const renderDayCard = (day) => {
//     const classes = getClassesForDay(day);
//     const hasClasses = classes.length > 0;

//     return (
//       <Grid item xs={12} sm={6} md={4} lg={12/7} key={day}>
//         <Paper
//           elevation={0}
//           sx={{
//             borderRadius: 4,
//             overflow: 'hidden',
//             background: hasClasses 
//               ? 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)'
//               : 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
//             border: '1px solid rgba(148, 163, 184, 0.1)',
//             transition: 'all 0.3s ease',
//             height: '100%',
//             minHeight: 400,
//             '&:hover': {
//               transform: 'translateY(-2px)',
//               boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
//             }
//           }}
//         >
//           <Box
//             sx={{
//               background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
//               color: 'white',
//               p: 2.5,
//               textAlign: 'center'
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 700,
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.5px',
//                 fontSize: '1rem'
//               }}
//             >
//               {day}
//             </Typography>
//           </Box>

//           <CardContent sx={{ p: 3, height: 'calc(100% - 70px)', display: 'flex', flexDirection: 'column' }}>
//             {hasClasses ? (
//               <Box sx={{ flex: 1 }}>
//                 {classes.map(renderClassItem)}
//               </Box>
//             ) : (
//               <Box
//                 sx={{
//                   flex: 1,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   opacity: 0.6
//                 }}
//               >
//                 <GymIcon sx={{ fontSize: 48, color: '#94a3b8', mb: 2 }} />
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: '#64748b',
//                     fontWeight: 500,
//                     textAlign: 'center',
//                     fontSize: '0.95rem'
//                   }}
//                 >
//                   No Classes Scheduled
//                 </Typography>
//               </Box>
//             )}
//           </CardContent>
//         </Paper>
//       </Grid>
//     );
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
//           <CircularProgress size={60} />
//         </Box>
//       </Container>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             borderRadius: 6,
//             background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
//             border: '1px solid rgba(226, 232, 240, 0.8)',
//             p: 4,
//             textAlign: 'center'
//           }}
//         >
//           <Typography variant="h6" color="error" gutterBottom>
//             Error Loading Schedule
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
//             {error}
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={fetchScheduleData}
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600
//             }}
//           >
//             Retry
//           </Button>
//         </Paper>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Paper
//         elevation={0}
//         sx={{
//           borderRadius: 6,
//           background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
//           border: '1px solid rgba(226, 232, 240, 0.8)',
//           overflow: 'hidden'
//         }}
//       >
//         <Box
//           sx={{
//             background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//             color: 'white',
//             p: 4,
//             textAlign: 'center',
//             position: 'relative',
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//             }
//           }}
//         >
//           <Box sx={{ position: 'relative', zIndex: 1 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: 800,
//                 mb: 1,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//                 textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//               }}
//             >
//               Weekly Schedule
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 opacity: 0.9,
//                 fontWeight: 400,
//                 fontSize: '1.1rem'
//               }}
//             >
//               Your Fitness Journey This Week
//             </Typography>
//           </Box>
//         </Box>

//         <Box sx={{ p: 4 }}>
//           <Grid container spacing={3}>
//             {days.map(renderDayCard)}
//           </Grid>
//         </Box>
//       </Paper>

//       {/* Cancel Confirmation Dialog */}
//       <Dialog
//         open={cancelDialog.open}
//         onClose={handleCancelClose}
//         aria-labelledby="cancel-dialog-title"
//         aria-describedby="cancel-dialog-description"
//         PaperProps={{
//           sx: {
//             borderRadius: 4,
//             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
//           }
//         }}
//       >
//         <DialogTitle 
//           id="cancel-dialog-title" 
//           sx={{ 
//             color: '#dc2626',
//             fontWeight: 700,
//             fontSize: '1.25rem',
//             pb: 1
//           }}
//         >
//           Cancel Class Booking
//         </DialogTitle>
//         <Divider />
//         <DialogContent sx={{ pt: 3 }}>
//           <DialogContentText 
//             id="cancel-dialog-description"
//             sx={{ 
//               fontSize: '1rem',
//               color: '#374151',
//               lineHeight: 1.6
//             }}
//           >
//             Are you sure you want to cancel this class booking? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 2 }}>
//           <Button
//             onClick={handleCancelClose}
//             variant="outlined"
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               borderColor: '#d1d5db',
//               color: '#374151',
//               '&:hover': {
//                 borderColor: '#9ca3af',
//                 backgroundColor: '#f9fafb'
//               }
//             }}
//           >
//             Keep Booking
//           </Button>
//           <Button
//             onClick={handleCancelConfirm}
//             variant="contained"
//             color="error"
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
//               boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.25)',
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)',
//                 boxShadow: '0 6px 20px 0 rgba(220, 38, 38, 0.35)'
//               }
//             }}
//             autoFocus
//           >
//             Cancel Booking
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default WeeklyScheduleSection;



// import React, { useState, useEffect } from 'react';
// import {
//   Paper,
//   Typography,
//   Box,
//   Grid,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   DialogContentText,
//   Container,
//   Divider,
//   CircularProgress
// } from '@mui/material';
// import {
//   Cancel as CancelIcon,
//   FitnessCenter as GymIcon,
//   Schedule as TimeIcon,
//   LocationOn as LocationIcon,
//   EventBusy as CancelledIcon
// } from '@mui/icons-material';

// const WeeklyScheduleSection = ({trainerId = localStorage.getItem("userId")}) => {
//   const [cancelDialog, setCancelDialog] = useState({ open: false, classId: null });
//   const [scheduleData, setScheduleData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [cancelling, setCancelling] = useState(false);

//   // Time slots for the schedule
//   const timeSlots = [
//     '6:00 - 7:00 AM',
//     '7:00 - 8:00 AM',
//     '8:00 - 9:00 AM',
//     '5:00 - 6:00 PM',
//     '6:00 - 7:00 PM',
//     '7:00 - 8:00 PM',
//     '8:00 - 9:00 PM'
//   ];

//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   // Function to format time from API format to display format
//   const formatTimeSlot = (startTime, endTime) => {
//     const formatTime = (time) => {
//       const [hours, minutes] = time.split(':');
//       const hour = parseInt(hours);
//       const ampm = hour >= 12 ? 'PM' : 'AM';
//       const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
//       return `${displayHour}:${minutes} ${ampm}`;
//     };
    
//     return `${formatTime(startTime)} - ${formatTime(endTime)}`;
//   };

//   // Function to get day name from date
//   const getDayName = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   // Fetch schedule data from API
//   const fetchScheduleData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await fetch(`https://gympro-backend-i0rv.onrender.com/api/schedules/trainer/${trainerId}/week`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
        
//       }
      
//       const data = await response.json();
      
//       // Transform API data to match the existing component structure
//       const transformedData = {};
      
//       data.schedules.forEach((schedule) => {
//         const dayName = getDayName(schedule.class.date);
//         const timeSlot = formatTimeSlot(
//           schedule.class.time_slot.startTime,
//           schedule.class.time_slot.endTime
//         );
        
//         if (!transformedData[dayName]) {
//           transformedData[dayName] = {};
//         }
        
//         transformedData[dayName][timeSlot] = {
//           id: schedule._id,
//           className: schedule.class.name,
//           gymName: schedule.gym.name,
//           gymLocation: schedule.gym.location,
//           booked: schedule.status === 'Scheduled',
//           status: schedule.status,
//           skillRequired: schedule.class.skill_required,
//           originalDate: schedule.class.date,
//           cancelled: schedule.status === 'cancelled'
//         };
//       });
      
//       setScheduleData(transformedData);
//     } catch (err) {
//       console.error('Error fetching schedule data:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchScheduleData();
//   }, []);

//   const handleCancelClick = (classId) => {
//     setCancelDialog({ open: true, classId });
//   };

//   const handleCancelConfirm = async () => {
//     try {
//       setCancelling(true);
      
//       // Make API call to cancel the booking
//       const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/schedule-generator/reschedule', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           trainerId: trainerId,
//           scheduleId: cancelDialog.classId
//         })
//       });
//       console.log(JSON.stringify({
//         trainerId: trainerId,
//         scheduleId: cancelDialog.classId
//       }));
      
//       const data = await response.json();
//       console.log(data);
      

//       if (!response.ok) {
//         throw new Error(`Failed to cancel booking: ${response.status}`);
//       }

//       // Close dialog
//       setCancelDialog({ open: false, classId: null });
      
//       // Refresh schedule data to show updated status
//       await fetchScheduleData();
      
//       console.log('Successfully cancelled class with ID:', cancelDialog.classId);
      
//     } catch (err) {
//       console.error('Error cancelling booking:', err);
//       setError(`Failed to cancel booking: ${err.message}`);
//     } finally {
//       setCancelling(false);
//     }
//   };

//   const handleCancelClose = () => {
//     setCancelDialog({ open: false, classId: null });
//   };

//   const getClassesForDay = (day) => {
//     const daySchedule = scheduleData[day] || {};
//     return Object.entries(daySchedule)
//       .filter(([_, classData]) => classData.booked || classData.cancelled)
//       .map(([timeSlot, classData]) => ({ ...classData, timeSlot }));
//   };

//   const renderClassItem = (classData) => {
//     const isCancelled = classData.cancelled || classData.status === 'cancelled';
    
//     return (
//       <Card
//         key={classData.id}
//         sx={{
//           mb: 2,
//           background: isCancelled 
//             ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
//             : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           color: 'white',
//           borderRadius: 3,
//           overflow: 'hidden',
//           position: 'relative',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           opacity: isCancelled ? 0.7 : 1,
//           '&:hover': {
//             transform: isCancelled ? 'none' : 'translateY(-4px)',
//             boxShadow: isCancelled 
//               ? '0 8px 16px rgba(239, 68, 68, 0.3)'
//               : '0 12px 24px rgba(102, 126, 234, 0.3)',
//           },
//           '&:last-child': {
//             mb: 0
//           }
//         }}
//       >
//         <CardContent sx={{ p: 3, position: 'relative' }}>
//           {isCancelled && (
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%) rotate(-15deg)',
//                 zIndex: 1,
//                 opacity: 0.3,
//                 pointerEvents: 'none'
//               }}
//             >
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: 900,
//                   color: 'rgba(255, 255, 255, 0.8)',
//                   fontSize: '3rem',
//                   textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                   letterSpacing: '2px'
//                 }}
//               >
//                 CANCELLED
//               </Typography>
//             </Box>
//           )}
          
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative', zIndex: 2 }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 700,
//                 fontSize: '1.1rem',
//                 textShadow: '0 1px 2px rgba(0,0,0,0.1)',
//                 textDecoration: isCancelled ? 'line-through' : 'none'
//               }}
//             >
//               {classData.className}
//             </Typography>
//             {!isCancelled && (
//               <IconButton
//                 size="small"
//                 onClick={() => handleCancelClick(classData.id)}
//                 sx={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                   color: 'white',
//                   backdropFilter: 'blur(10px)',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 82, 82, 0.8)',
//                     transform: 'scale(1.1)',
//                   },
//                   transition: 'all 0.2s ease'
//                 }}
//               >
//                 <CancelIcon fontSize="small" />
//               </IconButton>
//             )}
//             {isCancelled && (
//               <Box
//                 sx={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                   borderRadius: '50%',
//                   p: 1,
//                   backdropFilter: 'blur(10px)',
//                 }}
//               >
//                 <CancelledIcon fontSize="small" />
//               </Box>
//             )}
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9, position: 'relative', zIndex: 2 }}>
//             <TimeIcon sx={{ fontSize: 18, mr: 1 }} />
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 fontWeight: 500,
//                 textDecoration: isCancelled ? 'line-through' : 'none'
//               }}
//             >
//               {classData.timeSlot}
//             </Typography>
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, opacity: 0.9, position: 'relative', zIndex: 2 }}>
//             <LocationIcon sx={{ fontSize: 18, mr: 1 }} />
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 fontWeight: 500,
//                 textDecoration: isCancelled ? 'line-through' : 'none'
//               }}
//             >
//               {classData.gymName}
//               {classData.gymLocation && ` - ${classData.gymLocation}`}
//             </Typography>
//           </Box>

//           <Chip
//             label={isCancelled ? "CANCELLED" : (classData.status || "Booked")}
//             size="small"
//             sx={{
//               backgroundColor: isCancelled 
//                 ? 'rgba(255, 255, 255, 0.3)' 
//                 : 'rgba(255, 255, 255, 0.2)',
//               color: 'white',
//               fontWeight: 600,
//               backdropFilter: 'blur(10px)',
//               border: '1px solid rgba(255, 255, 255, 0.3)',
//               position: 'relative',
//               zIndex: 2
//             }}
//           />
//         </CardContent>
//       </Card>
//     );
//   };

//   const renderDayCard = (day) => {
//     const classes = getClassesForDay(day);
//     const hasClasses = classes.length > 0;

//     return (
//       <Grid item xs={12} sm={6} md={4} lg={12/7} key={day}>
//         <Paper
//           elevation={0}
//           sx={{
//             borderRadius: 4,
//             overflow: 'hidden',
//             background: hasClasses 
//               ? 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)'
//               : 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
//             border: '1px solid rgba(148, 163, 184, 0.1)',
//             transition: 'all 0.3s ease',
//             height: '100%',
//             minHeight: 400,
//             '&:hover': {
//               transform: 'translateY(-2px)',
//               boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
//             }
//           }}
//         >
//           <Box
//             sx={{
//               background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
//               color: 'white',
//               p: 2.5,
//               textAlign: 'center'
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 700,
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.5px',
//                 fontSize: '1rem'
//               }}
//             >
//               {day}
//             </Typography>
//           </Box>

//           <CardContent sx={{ p: 3, height: 'calc(100% - 70px)', display: 'flex', flexDirection: 'column' }}>
//             {hasClasses ? (
//               <Box sx={{ flex: 1 }}>
//                 {classes.map(renderClassItem)}
//               </Box>
//             ) : (
//               <Box
//                 sx={{
//                   flex: 1,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   opacity: 0.6
//                 }}
//               >
//                 <GymIcon sx={{ fontSize: 48, color: '#94a3b8', mb: 2 }} />
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: '#64748b',
//                     fontWeight: 500,
//                     textAlign: 'center',
//                     fontSize: '0.95rem'
//                   }}
//                 >
//                   No Classes Scheduled
//                 </Typography>
//               </Box>
//             )}
//           </CardContent>
//         </Paper>
//       </Grid>
//     );
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
//           <CircularProgress size={60} />
//         </Box>
//       </Container>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             borderRadius: 6,
//             background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
//             border: '1px solid rgba(226, 232, 240, 0.8)',
//             p: 4,
//             textAlign: 'center'
//           }}
//         >
//           <Typography variant="h6" color="error" gutterBottom>
//             Error Loading Schedule
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
//             {error}
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={fetchScheduleData}
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600
//             }}
//           >
//             Retry
//           </Button>
//         </Paper>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Paper
//         elevation={0}
//         sx={{
//           borderRadius: 6,
//           background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
//           border: '1px solid rgba(226, 232, 240, 0.8)',
//           overflow: 'hidden'
//         }}
//       >
//         <Box
//           sx={{
//             background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//             color: 'white',
//             p: 4,
//             textAlign: 'center',
//             position: 'relative',
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//             }
//           }}
//         >
//           <Box sx={{ position: 'relative', zIndex: 1 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: 800,
//                 mb: 1,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//                 textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//               }}
//             >
//               Weekly Schedule
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 opacity: 0.9,
//                 fontWeight: 400,
//                 fontSize: '1.1rem'
//               }}
//             >
//               Your Fitness Journey This Week
//             </Typography>
//           </Box>
//         </Box>

//         <Box sx={{ p: 4 }}>
//           <Grid container spacing={3}>
//             {days.map(renderDayCard)}
//           </Grid>
//         </Box>
//       </Paper>

//       {/* Cancel Confirmation Dialog */}
//       <Dialog
//         open={cancelDialog.open}
//         onClose={handleCancelClose}
//         aria-labelledby="cancel-dialog-title"
//         aria-describedby="cancel-dialog-description"
//         PaperProps={{
//           sx: {
//             borderRadius: 4,
//             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
//           }
//         }}
//       >
//         <DialogTitle 
//           id="cancel-dialog-title" 
//           sx={{ 
//             color: '#dc2626',
//             fontWeight: 700,
//             fontSize: '1.25rem',
//             pb: 1
//           }}
//         >
//           Cancel Class Booking
//         </DialogTitle>
//         <Divider />
//         <DialogContent sx={{ pt: 3 }}>
//           <DialogContentText 
//             id="cancel-dialog-description"
//             sx={{ 
//               fontSize: '1rem',
//               color: '#374151',
//               lineHeight: 1.6
//             }}
//           >
//             Are you sure you want to cancel this class booking? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 2 }}>
//           <Button
//             onClick={handleCancelClose}
//             variant="outlined"
//             disabled={cancelling}
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               borderColor: '#d1d5db',
//               color: '#374151',
//               '&:hover': {
//                 borderColor: '#9ca3af',
//                 backgroundColor: '#f9fafb'
//               }
//             }}
//           >
//             Keep Booking
//           </Button>
//           <Button
//             onClick={handleCancelConfirm}
//             variant="contained"
//             color="error"
//             disabled={cancelling}
//             sx={{
//               borderRadius: 3,
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
//               boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.25)',
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)',
//                 boxShadow: '0 6px 20px 0 rgba(220, 38, 38, 0.35)'
//               }
//             }}
//             autoFocus
//           >
//             {cancelling ? <CircularProgress size={20} color="inherit" /> : 'Cancel Booking'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default WeeklyScheduleSection;



import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Container,
  Divider,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Cancel as CancelIcon,
  FitnessCenter as GymIcon,
  Schedule as TimeIcon,
  LocationOn as LocationIcon,
  EventBusy as CancelledIcon
} from '@mui/icons-material';

const WeeklyScheduleSection = ({trainerId = localStorage.getItem("userId")}) => {
  const [cancelDialog, setCancelDialog] = useState({ open: false, classId: null });
  const [scheduleData, setScheduleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancelling, setCancelling] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

  // Time slots for the schedule
  const timeSlots = [
    '6:00 - 7:00 AM',
    '7:00 - 8:00 AM',
    '8:00 - 9:00 AM',
    '5:00 - 6:00 PM',
    '6:00 - 7:00 PM',
    '7:00 - 8:00 PM',
    '8:00 - 9:00 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Function to format time from API format to display format
  const formatTimeSlot = (startTime, endTime) => {
    const formatTime = (time) => {
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minutes} ${ampm}`;
    };
    
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  // Function to get day name from date
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  // Fetch schedule data from API
  const fetchScheduleData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://gympro-backend-i0rv.onrender.com/api/schedules/trainer/${trainerId}/week`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        
      }
      
      const data = await response.json();
      
      // Transform API data to match the existing component structure
      const transformedData = {};
      
      data.schedules.forEach((schedule) => {
        const dayName = getDayName(schedule.class.date);
        const timeSlot = formatTimeSlot(
          schedule.class.time_slot.startTime,
          schedule.class.time_slot.endTime
        );
        
        if (!transformedData[dayName]) {
          transformedData[dayName] = {};
        }
        
        transformedData[dayName][timeSlot] = {
          id: schedule._id,
          className: schedule.class.name,
          gymName: schedule.gym.name,
          gymLocation: schedule.gym.location,
          booked: schedule.status === 'Scheduled',
          status: schedule.status,
          skillRequired: schedule.class.skill_required,
          originalDate: schedule.class.date,
          cancelled: schedule.status === 'cancelled'
        };
      });
      
      setScheduleData(transformedData);
    } catch (err) {
      console.error('Error fetching schedule data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchScheduleData();
  }, []);

  const handleCancelClick = (classId) => {
    setCancelDialog({ open: true, classId });
  };

  const handleCancelConfirm = async () => {
    try {
      setCancelling(true);
      
      // Make API call to cancel the booking
      const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/schedule-generator/reschedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trainerId: trainerId,
          scheduleId: cancelDialog.classId
        })
      });
      
      console.log(JSON.stringify({
        trainerId: trainerId,
        scheduleId: cancelDialog.classId
      }));
      
      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        // Show specific error message from API
        const errorMessage = data.error || data.message || `Failed to cancel booking: ${response.status}`;
        setSnackbar({ 
          open: true, 
          message: errorMessage, 
          severity: 'error' 
        });
        setCancelDialog({ open: false, classId: null });
        return;
      }

      // Close dialog
      setCancelDialog({ open: false, classId: null });
      
      // Show success message
      setSnackbar({ 
        open: true, 
        message: 'Class rescheduled successfully!', 
        severity: 'success' 
      });
      
      // Refresh schedule data to show updated status
      await fetchScheduleData();
      
      console.log('Successfully cancelled class with ID:', cancelDialog.classId);
      
    } catch (err) {
      console.error('Error cancelling booking:', err);
      setSnackbar({ 
        open: true, 
        message: `Failed to cancel booking: ${err.message}`, 
        severity: 'error' 
      });
    } finally {
      setCancelling(false);
      setCancelDialog({ open: false, classId: null });
    }
  };

  const handleCancelClose = () => {
    setCancelDialog({ open: false, classId: null });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const getClassesForDay = (day) => {
    const daySchedule = scheduleData[day] || {};
    return Object.entries(daySchedule)
      .filter(([_, classData]) => classData.booked || classData.cancelled)
      .map(([timeSlot, classData]) => ({ ...classData, timeSlot }));
  };

  const renderClassItem = (classData) => {
    const isCancelled = classData.cancelled || classData.status === 'cancelled';
    
    return (
      <Card
        key={classData.id}
        sx={{
          mb: 2,
          background: isCancelled 
            ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isCancelled ? 0.7 : 1,
          '&:hover': {
            transform: isCancelled ? 'none' : 'translateY(-4px)',
            boxShadow: isCancelled 
              ? '0 8px 16px rgba(239, 68, 68, 0.3)'
              : '0 12px 24px rgba(102, 126, 234, 0.3)',
          },
          '&:last-child': {
            mb: 0
          }
        }}
      >
        <CardContent sx={{ p: 3, position: 'relative' }}>
          {isCancelled && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-15deg)',
                zIndex: 1,
                opacity: 0.3,
                pointerEvents: 'none'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '3rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  letterSpacing: '2px'
                }}
              >
                CANCELLED
              </Typography>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '1.1rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textDecoration: isCancelled ? 'line-through' : 'none'
              }}
            >
              {classData.className}
            </Typography>
            {!isCancelled && (
              <IconButton
                size="small"
                onClick={() => handleCancelClick(classData.id)}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 82, 82, 0.8)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <CancelIcon fontSize="small" />
              </IconButton>
            )}
            {isCancelled && (
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  p: 1,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CancelledIcon fontSize="small" />
              </Box>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9, position: 'relative', zIndex: 2 }}>
            <TimeIcon sx={{ fontSize: 18, mr: 1 }} />
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 500,
                textDecoration: isCancelled ? 'line-through' : 'none'
              }}
            >
              {classData.timeSlot}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, opacity: 0.9, position: 'relative', zIndex: 2 }}>
            <LocationIcon sx={{ fontSize: 18, mr: 1 }} />
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 500,
                textDecoration: isCancelled ? 'line-through' : 'none'
              }}
            >
              {classData.gymName}
              {classData.gymLocation && ` - ${classData.gymLocation}`}
            </Typography>
          </Box>

          <Chip
            label={isCancelled ? "CANCELLED" : (classData.status || "Booked")}
            size="small"
            sx={{
              backgroundColor: isCancelled 
                ? 'rgba(255, 255, 255, 0.3)' 
                : 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: 600,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              position: 'relative',
              zIndex: 2
            }}
          />
        </CardContent>
      </Card>
    );
  };

  const renderDayCard = (day) => {
    const classes = getClassesForDay(day);
    const hasClasses = classes.length > 0;

    return (
      <Grid item xs={12} sm={6} md={4} lg={12/7} key={day}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            background: hasClasses 
              ? 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)'
              : 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            transition: 'all 0.3s ease',
            height: '100%',
            minHeight: 400,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              color: 'white',
              p: 2.5,
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '1rem'
              }}
            >
              {day}
            </Typography>
          </Box>

          <CardContent sx={{ p: 3, height: 'calc(100% - 70px)', display: 'flex', flexDirection: 'column' }}>
            {hasClasses ? (
              <Box sx={{ flex: 1 }}>
                {classes.map(renderClassItem)}
              </Box>
            ) : (
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.6
                }}
              >
                <GymIcon sx={{ fontSize: 48, color: '#94a3b8', mb: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#64748b',
                    fontWeight: 500,
                    textAlign: 'center',
                    fontSize: '0.95rem'
                  }}
                >
                  No Classes Scheduled
                </Typography>
              </Box>
            )}
          </CardContent>
        </Paper>
      </Grid>
    );
  };

  // Loading state
  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 6,
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            p: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" color="error" gutterBottom>
            Error Loading Schedule
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {error}
          </Typography>
          <Button
            variant="contained"
            onClick={fetchScheduleData}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1,
              fontWeight: 600
            }}
          >
            Retry
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 6,
          background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            p: 4,
            textAlign: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 1,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Weekly Schedule
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.9,
                fontWeight: 400,
                fontSize: '1.1rem'
              }}
            >
              Your Fitness Journey This Week
            </Typography>
          </Box>
        </Box>

        <Box sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {days.map(renderDayCard)}
          </Grid>
        </Box>
      </Paper>

      {/* Cancel Confirmation Dialog */}
      <Dialog
        open={cancelDialog.open}
        onClose={handleCancelClose}
        aria-labelledby="cancel-dialog-title"
        aria-describedby="cancel-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: 4,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        <DialogTitle 
          id="cancel-dialog-title" 
          sx={{ 
            color: '#dc2626',
            fontWeight: 700,
            fontSize: '1.25rem',
            pb: 1
          }}
        >
          Cancel Class Booking
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 3 }}>
          <DialogContentText 
            id="cancel-dialog-description"
            sx={{ 
              fontSize: '1rem',
              color: '#374151',
              lineHeight: 1.6
            }}
          >
            Are you sure you want to cancel this class booking? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 2 }}>
          <Button
            onClick={handleCancelClose}
            variant="outlined"
            disabled={cancelling}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1,
              fontWeight: 600,
              borderColor: '#d1d5db',
              color: '#374151',
              '&:hover': {
                borderColor: '#9ca3af',
                backgroundColor: '#f9fafb'
              }
            }}
          >
            Keep Booking
          </Button>
          <Button
            onClick={handleCancelConfirm}
            variant="contained"
            color="error"
            disabled={cancelling}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.25)',
              '&:hover': {
                background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)',
                boxShadow: '0 6px 20px 0 rgba(220, 38, 38, 0.35)'
              }
            }}
            autoFocus
          >
            {cancelling ? <CircularProgress size={20} color="inherit" /> : 'Cancel Booking'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for showing error/success messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default WeeklyScheduleSection;