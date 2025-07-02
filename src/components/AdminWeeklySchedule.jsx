// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Select,
//   MenuItem,
//   TextField,
//   Popover,
//   Typography,
//   Box,
//   Chip,
//   Button,
//   FormControl,
//   InputLabel,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Fade,
//   Zoom,
//   Card,
//   CardContent,
//   Tooltip
// } from '@mui/material';
// import {
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Add as AddIcon,
//   Save as SaveIcon,
//   Cancel as CancelIcon,
//   FitnessCenter as FitnessCenterIcon,
//   Person as PersonIcon,
//   Schedule as ScheduleIcon
// } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';

// // Styled components for premium look
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//   borderRadius: '20px',
//   boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
//   overflow: 'hidden',
//   position: 'relative',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'rgba(255,255,255,0.05)',
//     borderRadius: '20px',
//   }
// }));

// const StyledTable = styled(Table)(({ theme }) => ({
//   minWidth: 800,
//   '& .MuiTableCell-root': {
//     borderBottom: '1px solid rgba(255,255,255,0.1)',
//     color: 'white',
//     fontWeight: 500,
//   }
// }));

// const StyledTableHead = styled(TableHead)(({ theme }) => ({
//   background: 'rgba(255,255,255,0.1)',
//   '& .MuiTableCell-head': {
//     fontWeight: 700,
//     fontSize: '1.1rem',
//     color: 'white',
//     textAlign: 'center',
//     padding: '20px 16px',
//   }
// }));

// const TimeSlotCell = styled(TableCell)(({ theme }) => ({
//   background: 'rgba(255,255,255,0.08)',
//   fontWeight: 600,
//   fontSize: '0.9rem',
//   width: '120px',
//   textAlign: 'center',
// }));

// const ScheduleCell = styled(TableCell)(({ theme }) => ({
//   padding: '8px',
//   position: 'relative',
//   height: '80px',
//   verticalAlign: 'top',
//   cursor: 'pointer',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     background: 'rgba(255,255,255,0.05)',
//     transform: 'scale(1.02)',
//   }
// }));

// const getSessionColors = (type) => {
//   switch (type) {
//     case 'Personal Training':
//       return {
//         background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
//         color: 'white',
//         boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
//       };
//     case 'Group Class':
//       return {
//         background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
//         color: 'white',
//         boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
//       };
//     case 'Cardio Session':
//       return {
//         background: 'linear-gradient(45deg, #A8EDEA, #FED6E3)',
//         color: '#333',
//         boxShadow: '0 4px 15px rgba(168, 237, 234, 0.3)'
//       };
//     case 'Strength Training':
//       return {
//         background: 'linear-gradient(45deg, #667eea, #764ba2)',
//         color: 'white',
//         boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
//       };
//     default:
//       return {
//         background: 'linear-gradient(45deg, #f093fb, #f5576c)',
//         color: 'white',
//         boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
//       };
//   }
// };

// const SessionChip = styled(Chip)(({ theme }) => ({
//   borderRadius: '12px',
//   fontSize: '0.75rem',
//   fontWeight: 600,
//   transition: 'all 0.3s ease',
//   margin: '2px',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//   }
// }));

// const AddSessionButton = styled(Button)(({ theme }) => ({
//   background: 'linear-gradient(45deg, #667eea, #764ba2)',
//   color: 'white',
//   borderRadius: '12px',
//   padding: '8px 16px',
//   fontSize: '0.8rem',
//   fontWeight: 600,
//   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     background: 'linear-gradient(45deg, #764ba2, #667eea)',
//     transform: 'translateY(-2px)',
//     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
//   }
// }));

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialog-paper': {
//     borderRadius: '20px',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     color: 'white',
//     minWidth: '400px',
//   }
// }));

// const WeeklySchedule = () => {
//   // Time slots from 6 AM to 10 PM
//   const timeSlots = [
//     '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
//     '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
//     '18:00', '19:00', '20:00', '21:00', '22:00'
//   ];

//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
//   const sessionTypes = ['Personal Training', 'Group Class', 'Cardio Session', 'Strength Training', 'Yoga Class'];
//   const trainers = ['John Smith', 'Sarah Johnson', 'Mike Wilson', 'Emma Davis', 'Alex Brown'];

//   // Sample schedule data
//   const [schedule, setSchedule] = useState({
//     'Monday-09:00': { trainer: 'John Smith', type: 'Personal Training', client: 'Client A', id: 1 },
//     'Monday-10:00': { trainer: 'Sarah Johnson', type: 'Group Class', client: 'Yoga Group', id: 2 },
//     'Tuesday-08:00': { trainer: 'Mike Wilson', type: 'Strength Training', client: 'Client B', id: 3 },
//     'Wednesday-15:00': { trainer: 'Emma Davis', type: 'Cardio Session', client: 'Client C', id: 4 },
//     'Thursday-09:00': { trainer: 'Alex Brown', type: 'Personal Training', client: 'Client D', id: 5 },
//     'Friday-17:00': { trainer: 'John Smith', type: 'Group Class', client: 'Evening Class', id: 6 },
//   });

//   const [editDialog, setEditDialog] = useState({ open: false, slot: null, session: null });
//   const [newSession, setNewSession] = useState({
//     trainer: '',
//     type: '',
//     client: ''
//   });

//   const handleCellClick = (day, time) => {
//     const slotKey = `${day}-${time}`;
//     const existingSession = schedule[slotKey];
    
//     setNewSession(existingSession || { trainer: '', type: '', client: '' });
//     setEditDialog({ open: true, slot: slotKey, session: existingSession });
//   };

//   const handleSaveSession = () => {
//     if (newSession.trainer && newSession.type && newSession.client) {
//       const updatedSchedule = { ...schedule };
//       updatedSchedule[editDialog.slot] = {
//         ...newSession,
//         id: editDialog.session?.id || Date.now()
//       };
//       setSchedule(updatedSchedule);
//     }
//     setEditDialog({ open: false, slot: null, session: null });
//     setNewSession({ trainer: '', type: '', client: '' });
//   };

//   const handleDeleteSession = () => {
//     const updatedSchedule = { ...schedule };
//     delete updatedSchedule[editDialog.slot];
//     setSchedule(updatedSchedule);
//     setEditDialog({ open: false, slot: null, session: null });
//   };

//   const handleCloseDialog = () => {
//     setEditDialog({ open: false, slot: null, session: null });
//     setNewSession({ trainer: '', type: '', client: '' });
//   };

//   const formatTime = (time) => {
//     const hour = parseInt(time.split(':')[0]);
//     const period = hour >= 12 ? 'PM' : 'AM';
//     const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
//     return `${displayHour}:00 ${period}`;
//   };

//   return (
//     <Box sx={{ padding: '20px', minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
//       <Card sx={{ 
//         marginBottom: '30px', 
//         borderRadius: '20px', 
//         background: 'rgba(255,255,255,0.9)',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <CardContent sx={{ textAlign: 'center', padding: '30px' }}>
//           <Typography variant="h4" sx={{ 
//             fontWeight: 700, 
//             color: '#333',
//             marginBottom: '10px',
//             background: 'linear-gradient(45deg, #667eea, #764ba2)',
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             <ScheduleIcon sx={{ fontSize: '2rem', marginRight: '15px', color: '#667eea' }} />
//             Weekly Training Schedule
//           </Typography>
//           <Typography variant="subtitle1" sx={{ color: '#666', fontSize: '1.1rem' }}>
//             Manage trainer schedules and client sessions
//           </Typography>
//         </CardContent>
//       </Card>

//       <Fade in timeout={800}>
//         <StyledTableContainer component={Paper}>
//           <StyledTable>
//             <StyledTableHead>
//               <TableRow>
//                 <TableCell sx={{ width: '120px' }}>Time</TableCell>
//                 {daysOfWeek.map((day) => (
//                   <TableCell key={day} align="center">
//                     {day}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {timeSlots.map((time) => (
//                 <TableRow key={time} sx={{ '&:hover': { background: 'rgba(255,255,255,0.02)' } }}>
//                   <TimeSlotCell>
//                     {formatTime(time)}
//                   </TimeSlotCell>
//                   {daysOfWeek.map((day) => {
//                     const slotKey = `${day}-${time}`;
//                     const session = schedule[slotKey];
                    
//                     return (
//                       <ScheduleCell 
//                         key={slotKey} 
//                         onClick={() => handleCellClick(day, time)}
//                       >
//                         {session ? (
//                           <Zoom in timeout={300}>
//                             <Box>
//                               <SessionChip
//                                 label={session.type}
//                                 size="small"
//                                 sx={{
//                                   display: 'block',
//                                   marginBottom: '4px',
//                                   ...getSessionColors(session.type)
//                                 }}
//                               />
//                               <Typography variant="caption" sx={{ 
//                                 display: 'block', 
//                                 color: 'rgba(255,255,255,0.9)',
//                                 fontWeight: 600,
//                                 fontSize: '0.7rem'
//                               }}>
//                                 <PersonIcon sx={{ fontSize: '0.8rem', marginRight: '2px' }} />
//                                 {session.trainer}
//                               </Typography>
//                               <Typography variant="caption" sx={{ 
//                                 display: 'block', 
//                                 color: 'rgba(255,255,255,0.7)',
//                                 fontSize: '0.65rem'
//                               }}>
//                                 {session.client}
//                               </Typography>
//                             </Box>
//                           </Zoom>
//                         ) : (
//                           <Box sx={{ 
//                             display: 'flex', 
//                             alignItems: 'center', 
//                             justifyContent: 'center',
//                             height: '100%',
//                             opacity: 0.3,
//                             transition: 'opacity 0.3s ease',
//                             '&:hover': { opacity: 0.8 }
//                           }}>
//                             <AddIcon sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)' }} />
//                           </Box>
//                         )}
//                       </ScheduleCell>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </StyledTable>
//         </StyledTableContainer>
//       </Fade>

//       <StyledDialog 
//         open={editDialog.open} 
//         onClose={handleCloseDialog}
//         TransitionComponent={Zoom}
//         TransitionProps={{ timeout: 300 }}
//       >
//         <DialogTitle sx={{ 
//           textAlign: 'center', 
//           fontSize: '1.5rem', 
//           fontWeight: 700,
//           paddingBottom: '10px'
//         }}>
//           <FitnessCenterIcon sx={{ fontSize: '2rem', marginRight: '10px' }} />
//           {editDialog.session ? 'Edit Session' : 'Add New Session'}
//         </DialogTitle>
//         <DialogContent sx={{ padding: '20px 30px' }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
//             <FormControl fullWidth>
//               <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Trainer</InputLabel>
//               <Select
//                 value={newSession.trainer}
//                 onChange={(e) => setNewSession({ ...newSession, trainer: e.target.value })}
//                 sx={{
//                   color: 'white',
//                   '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
//                   '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
//                   '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
//                 }}
//               >
//                 {trainers.map((trainer) => (
//                   <MenuItem key={trainer} value={trainer}>{trainer}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <FormControl fullWidth>
//               <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Session Type</InputLabel>
//               <Select
//                 value={newSession.type}
//                 onChange={(e) => setNewSession({ ...newSession, type: e.target.value })}
//                 sx={{
//                   color: 'white',
//                   '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
//                   '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
//                   '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
//                 }}
//               >
//                 {sessionTypes.map((type) => (
//                   <MenuItem key={type} value={type}>{type}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <TextField
//               fullWidth
//               label="Client/Group Name"
//               value={newSession.client}
//               onChange={(e) => setNewSession({ ...newSession, client: e.target.value })}
//               sx={{
//                 '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
//                 '& .MuiOutlinedInput-root': { 
//                   color: 'white',
//                   '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
//                   '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
//                   '&.Mui-focused fieldset': { borderColor: 'white' }
//                 }
//               }}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions sx={{ padding: '20px 30px', justifyContent: 'space-between' }}>
//           <Box>
//             {editDialog.session && (
//               <Button
//                 onClick={handleDeleteSession}
//                 startIcon={<DeleteIcon />}
//                 sx={{
//                   color: '#ff6b6b',
//                   borderColor: '#ff6b6b',
//                   '&:hover': { 
//                     background: 'rgba(255, 107, 107, 0.1)',
//                     borderColor: '#ff5252'
//                   }
//                 }}
//                 variant="outlined"
//               >
//                 Delete
//               </Button>
//             )}
//           </Box>
//           <Box sx={{ display: 'flex', gap: '10px' }}>
//             <Button 
//               onClick={handleCloseDialog}
//               startIcon={<CancelIcon />}
//               sx={{ 
//                 color: 'rgba(255,255,255,0.7)',
//                 '&:hover': { color: 'white' }
//               }}
//             >
//               Cancel
//             </Button>
//             <AddSessionButton
//               onClick={handleSaveSession}
//               startIcon={<SaveIcon />}
//               disabled={!newSession.trainer || !newSession.type || !newSession.client}
//             >
//               {editDialog.session ? 'Update' : 'Add'} Session
//             </AddSessionButton>
//           </Box>
//         </DialogActions>
//       </StyledDialog>
//     </Box>
//   );
// };

// export default WeeklySchedule;



// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
//   Chip,
//   Card,
//   CardContent,
//   Fade,
//   Zoom,
//   Tooltip,
//   Avatar,
//   Badge
// } from '@mui/material';
// import {
//   FitnessCenter as FitnessCenterIcon,
//   Person as PersonIcon,
//   Schedule as ScheduleIcon,
//   AccessTime as AccessTimeIcon,
//   Group as GroupIcon
// } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';

// // Styled components for premium look
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//   borderRadius: '20px',
//   boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
//   overflow: 'hidden',
//   position: 'relative',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'rgba(255,255,255,0.05)',
//     borderRadius: '20px',
//   }
// }));

// const StyledTable = styled(Table)(({ theme }) => ({
//   minWidth: 1000,
//   '& .MuiTableCell-root': {
//     borderBottom: '1px solid rgba(255,255,255,0.1)',
//     color: 'white',
//     fontWeight: 500,
//   }
// }));

// const StyledTableHead = styled(TableHead)(({ theme }) => ({
//   background: 'rgba(255,255,255,0.1)',
//   '& .MuiTableCell-head': {
//     fontWeight: 700,
//     fontSize: '1.1rem',
//     color: 'white',
//     textAlign: 'center',
//     padding: '20px 16px',
//   }
// }));

// const TimeSlotCell = styled(TableCell)(({ theme }) => ({
//   background: 'rgba(255,255,255,0.08)',
//   fontWeight: 600,
//   fontSize: '0.85rem',
//   width: '140px',
//   textAlign: 'center',
//   padding: '12px 8px',
// }));

// const ScheduleCell = styled(TableCell)(({ theme }) => ({
//   padding: '8px',
//   position: 'relative',
//   minHeight: '100px',
//   verticalAlign: 'top',
//   width: '180px',
//   background: 'rgba(255,255,255,0.02)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     background: 'rgba(255,255,255,0.08)',
//   }
// }));

// const getClassColors = (className) => {
//   const colorMap = {
//     'Yoga': {
//       background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
//       color: 'white',
//       boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
//     },
//     'CrossFit': {
//       background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
//       color: 'white',
//       boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
//     },
//     'Cardio': {
//       background: 'linear-gradient(45deg, #A8EDEA, #FED6E3)',
//       color: '#333',
//       boxShadow: '0 4px 15px rgba(168, 237, 234, 0.3)'
//     },
//     'Strength Training': {
//       background: 'linear-gradient(45deg, #667eea, #764ba2)',
//       color: 'white',
//       boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
//     },
//     'Pilates': {
//       background: 'linear-gradient(45deg, #f093fb, #f5576c)',
//       color: 'white',
//       boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
//     },
//     'Zumba': {
//       background: 'linear-gradient(45deg, #FFA726, #FF7043)',
//       color: 'white',
//       boxShadow: '0 4px 15px rgba(255, 167, 38, 0.3)'
//     }
//   };
  
//   return colorMap[className] || {
//     background: 'linear-gradient(45deg, #9C27B0, #673AB7)',
//     color: 'white',
//     boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)'
//   };
// };

// const SessionCard = styled(Box)(({ theme }) => ({
//   background: 'rgba(255,255,255,0.1)',
//   backdropFilter: 'blur(10px)',
//   borderRadius: '12px',
//   padding: '12px',
//   margin: '4px 0',
//   border: '1px solid rgba(255,255,255,0.2)',
//   transition: 'all 0.3s ease',
//   cursor: 'pointer',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
//     background: 'rgba(255,255,255,0.15)',
//   }
// }));

// const StatusChip = styled(Chip)(({ status }) => {
//   const statusColors = {
//     'Scheduled': { backgroundColor: '#4CAF50', color: 'white' },
//     'Completed': { backgroundColor: '#2196F3', color: 'white' },
//     'Cancelled': { backgroundColor: '#f44336', color: 'white' }
//   };
  
//   return {
//     fontSize: '0.7rem',
//     height: '20px',
//     fontWeight: 600,
//     ...statusColors[status]
//   };
// });

// const WeeklySchedule = () => {
//   // Generate time slots with 15-minute intervals
//   const generateTimeSlots = () => {
//     const slots = [];
//     for (let hour = 6; hour <= 22; hour++) {
//       for (let minute = 0; minute < 60; minute += 15) {
//         const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         slots.push(timeString);
//       }
//     }
//     return slots;
//   };

//   const timeSlots = generateTimeSlots();
//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
//   // Sample schedule data based on your schema structure
//   const [scheduleData, setScheduleData] = useState([
//     {
//       _id: '1',
//       gym: { _id: 'gym1', name: 'Elite Fitness Center' },
//       trainer: { _id: 'trainer1', name: 'John Smith', avatar: '/api/placeholder/40/40' },
//       class: { 
//         _id: 'class1', 
//         name: 'Morning Yoga', 
//         type: 'Yoga',
//         startTime: '07:00',
//         endTime: '08:30',
//         day: 'Monday',
//         capacity: 15,
//         enrolled: 12
//       },
//       status: 'Scheduled',
//       createdAt: new Date('2024-01-15')
//     },
//     {
//       _id: '2',
//       gym: { _id: 'gym1', name: 'Elite Fitness Center' },
//       trainer: { _id: 'trainer2', name: 'Sarah Johnson', avatar: '/api/placeholder/40/40' },
//       class: { 
//         _id: 'class2', 
//         name: 'CrossFit Blast', 
//         type: 'CrossFit',
//         startTime: '18:00',
//         endTime: '19:15',
//         day: 'Monday',
//         capacity: 10,
//         enrolled: 8
//       },
//       status: 'Scheduled',
//       createdAt: new Date('2024-01-15')
//     },
//     {
//       _id: '3',
//       gym: { _id: 'gym1', name: 'Elite Fitness Center' },
//       trainer: { _id: 'trainer3', name: 'Mike Wilson', avatar: '/api/placeholder/40/40' },
//       class: { 
//         _id: 'class3', 
//         name: 'Strength & Power', 
//         type: 'Strength Training',
//         startTime: '09:30',
//         endTime: '10:45',
//         day: 'Tuesday',
//         capacity: 12,
//         enrolled: 12
//       },
//       status: 'Scheduled',
//       createdAt: new Date('2024-01-15')
//     },
//     {
//       _id: '4',
//       gym: { _id: 'gym1', name: 'Elite Fitness Center' },
//       trainer: { _id: 'trainer4', name: 'Emma Davis', avatar: '/api/placeholder/40/40' },
//       class: { 
//         _id: 'class4', 
//         name: 'Cardio Burn', 
//         type: 'Cardio',
//         startTime: '16:15',
//         endTime: '17:00',
//         day: 'Wednesday',
//         capacity: 20,
//         enrolled: 15
//       },
//       status: 'Completed',
//       createdAt: new Date('2024-01-15')
//     },
//     {
//       _id: '5',
//       gym: { _id: 'gym1', name: 'Elite Fitness Center' },
//       trainer: { _id: 'trainer5', name: 'Alex Brown', avatar: '/api/placeholder/40/40' },
//       class: { 
//         _id: 'class5', 
//         name: 'Pilates Flow', 
//         type: 'Pilates',
//         startTime: '08:45',
//         endTime: '09:45',
//         day: 'Thursday',
//         capacity: 15,
//         enrolled: 13
//       },
//       status: 'Scheduled',
//       createdAt: new Date('2024-01-15')
//     },
//     {
//       _id: '6',
//       gym: { _id: 'gym1', name: 'Elite Fitness Center' },
//       trainer: { _id: 'trainer6', name: 'Lisa Garcia', avatar: '/api/placeholder/40/40' },
//       class: { 
//         _id: 'class6', 
//         name: 'Zumba Party', 
//         type: 'Zumba',
//         startTime: '19:30',
//         endTime: '20:30',
//         day: 'Friday',
//         capacity: 25,
//         enrolled: 22
//       },
//       status: 'Scheduled',
//       createdAt: new Date('2024-01-15')
//     }
//   ]);

//   const formatTime = (time) => {
//     const [hour, minute] = time.split(':');
//     const hourNum = parseInt(hour);
//     const period = hourNum >= 12 ? 'PM' : 'AM';
//     const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum;
//     return `${displayHour}:${minute} ${period}`;
//   };

//   const formatTimeRange = (startTime, endTime) => {
//     return `${formatTime(startTime)} - ${formatTime(endTime)}`;
//   };

//   const getScheduleForSlot = (day, timeSlot) => {
//     return scheduleData.filter(schedule => {
//       const classData = schedule.class;
//       const startTime = classData.startTime;
//       const endTime = classData.endTime;
      
//       // Check if the class is on this day and overlaps with this time slot
//       if (classData.day !== day) return false;
      
//       // Convert times to minutes for comparison
//       const slotMinutes = parseInt(timeSlot.split(':')[0]) * 60 + parseInt(timeSlot.split(':')[1]);
//       const startMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
//       const endMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
      
//       return slotMinutes >= startMinutes && slotMinutes < endMinutes;
//     });
//   };

//   const isMainSlot = (day, timeSlot, schedule) => {
//     const classData = schedule.class;
//     return classData.day === day && classData.startTime === timeSlot;
//   };

//   return (
//     <Box sx={{ 
//       padding: '20px', 
//       minHeight: '100vh', 
//       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' 
//     }}>
//       <Card sx={{ 
//         marginBottom: '30px', 
//         borderRadius: '20px', 
//         background: 'rgba(255,255,255,0.9)',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <CardContent sx={{ textAlign: 'center', padding: '30px' }}>
//           <Typography variant="h4" sx={{ 
//             fontWeight: 700, 
//             color: '#333',
//             marginBottom: '10px',
//             background: 'linear-gradient(45deg, #667eea, #764ba2)',
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             <ScheduleIcon sx={{ fontSize: '2rem', marginRight: '15px', color: '#667eea' }} />
//             Weekly Class Schedule
//           </Typography>
//           <Typography variant="subtitle1" sx={{ color: '#666', fontSize: '1.1rem' }}>
//             View all scheduled classes and training sessions
//           </Typography>
//         </CardContent>
//       </Card>

//       <Fade in timeout={800}>
//         <StyledTableContainer component={Paper}>
//           <StyledTable>
//             <StyledTableHead>
//               <TableRow>
//                 <TableCell sx={{ width: '140px' }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <AccessTimeIcon sx={{ fontSize: '1.2rem', marginRight: '8px' }} />
//                     Time
//                   </Box>
//                 </TableCell>
//                 {daysOfWeek.map((day) => (
//                   <TableCell key={day} align="center">
//                     {day}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {timeSlots.map((timeSlot, index) => {
//                 // Only show main time intervals (every 4th slot = hourly display)
//                 if (index % 4 !== 0) return null;
                
//                 return (
//                   <TableRow key={timeSlot} sx={{ '&:hover': { background: 'rgba(255,255,255,0.02)' } }}>
//                     <TimeSlotCell>
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {formatTime(timeSlot)}
//                       </Typography>
//                     </TimeSlotCell>
//                     {daysOfWeek.map((day) => {
//                       const schedulesInSlot = getScheduleForSlot(day, timeSlot);
                      
//                       return (
//                         <ScheduleCell key={`${day}-${timeSlot}`}>
//                           {schedulesInSlot.map((schedule) => {
//                             // Only show the card at the start time of the class
//                             if (!isMainSlot(day, timeSlot, schedule)) return null;
                            
//                             const classData = schedule.class;
//                             const trainerData = schedule.trainer;
//                             const colors = getClassColors(classData.type);
                            
//                             return (
//                               <Zoom in timeout={300} key={schedule._id}>
//                                 <SessionCard>
//                                   <Box sx={{ marginBottom: '8px' }}>
//                                     <Chip
//                                       label={classData.type}
//                                       size="small"
//                                       sx={{
//                                         ...colors,
//                                         fontWeight: 600,
//                                         fontSize: '0.7rem'
//                                       }}
//                                     />
//                                     <StatusChip
//                                       label={schedule.status}
//                                       size="small"
//                                       status={schedule.status}
//                                       sx={{ marginLeft: '4px' }}
//                                     />
//                                   </Box>
                                  
//                                   <Typography variant="subtitle2" sx={{ 
//                                     color: 'white',
//                                     fontWeight: 700,
//                                     fontSize: '0.85rem',
//                                     marginBottom: '4px',
//                                     lineHeight: 1.2
//                                   }}>
//                                     {classData.name}
//                                   </Typography>
                                  
//                                   <Box sx={{ 
//                                     display: 'flex', 
//                                     alignItems: 'center', 
//                                     marginBottom: '4px' 
//                                   }}>
//                                     <AccessTimeIcon sx={{ 
//                                       fontSize: '0.8rem', 
//                                       marginRight: '4px',
//                                       color: 'rgba(255,255,255,0.8)' 
//                                     }} />
//                                     <Typography variant="caption" sx={{ 
//                                       color: 'rgba(255,255,255,0.9)',
//                                       fontSize: '0.7rem',
//                                       fontWeight: 500
//                                     }}>
//                                       {formatTimeRange(classData.startTime, classData.endTime)}
//                                     </Typography>
//                                   </Box>
                                  
//                                   <Box sx={{ 
//                                     display: 'flex', 
//                                     alignItems: 'center', 
//                                     marginBottom: '6px' 
//                                   }}>
//                                     <PersonIcon sx={{ 
//                                       fontSize: '0.8rem', 
//                                       marginRight: '4px',
//                                       color: 'rgba(255,255,255,0.8)' 
//                                     }} />
//                                     <Typography variant="caption" sx={{ 
//                                       color: 'rgba(255,255,255,0.9)',
//                                       fontSize: '0.7rem',
//                                       fontWeight: 600
//                                     }}>
//                                       {trainerData.name}
//                                     </Typography>
//                                   </Box>
                                  
//                                   <Box sx={{ 
//                                     display: 'flex', 
//                                     alignItems: 'center', 
//                                     justifyContent: 'space-between'
//                                   }}>
//                                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                       <GroupIcon sx={{ 
//                                         fontSize: '0.8rem', 
//                                         marginRight: '4px',
//                                         color: 'rgba(255,255,255,0.8)' 
//                                       }} />
//                                       <Typography variant="caption" sx={{ 
//                                         color: 'rgba(255,255,255,0.8)',
//                                         fontSize: '0.65rem'
//                                       }}>
//                                         {classData.enrolled}/{classData.capacity}
//                                       </Typography>
//                                     </Box>
                                    
//                                     {classData.enrolled === classData.capacity && (
//                                       <Chip
//                                         label="Full"
//                                         size="small"
//                                         sx={{
//                                           backgroundColor: '#ff5722',
//                                           color: 'white',
//                                           fontSize: '0.6rem',
//                                           height: '16px',
//                                           fontWeight: 600
//                                         }}
//                                       />
//                                     )}
//                                   </Box>
//                                 </SessionCard>
//                               </Zoom>
//                             );
//                           })}
//                         </ScheduleCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </StyledTable>
//         </StyledTableContainer>
//       </Fade>
//     </Box>
//   );
// };

// export default WeeklySchedule;


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
  Box,
  Chip,
  Card,
  CardContent,
  Fade,
  Zoom,
  Tooltip,
  Avatar,
  Badge,
  CircularProgress
} from '@mui/material';
import {
  FitnessCenter as FitnessCenterIcon,
  Person as PersonIcon,
  Schedule as ScheduleIcon,
  AccessTime as AccessTimeIcon,
  Group as GroupIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components for premium look
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '20px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
  }
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 1000,
  '& .MuiTableCell-root': {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    fontWeight: 500,
  }
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: 'rgba(255,255,255,0.1)',
  '& .MuiTableCell-head': {
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'white',
    textAlign: 'center',
    padding: '20px 16px',
  }
}));

const TimeSlotCell = styled(TableCell)(({ theme }) => ({
  background: 'rgba(255,255,255,0.08)',
  fontWeight: 600,
  fontSize: '0.85rem',
  width: '140px',
  textAlign: 'center',
  padding: '12px 8px',
}));

const ScheduleCell = styled(TableCell)(({ theme }) => ({
  padding: '8px',
  position: 'relative',
  minHeight: '100px',
  verticalAlign: 'top',
  width: '180px',
  background: 'rgba(255,255,255,0.02)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.08)',
  }
}));

const getClassColors = (className) => {
  const colorMap = {
    'Yoga': {
      background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
    },
    'CrossFit': {
      background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
    },
    'Cardio': {
      background: 'linear-gradient(45deg, #A8EDEA, #FED6E3)',
      color: '#333',
      boxShadow: '0 4px 15px rgba(168, 237, 234, 0.3)'
    },
    'Strength Training': {
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
    },
    'Pilates': {
      background: 'linear-gradient(45deg, #f093fb, #f5576c)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
    },
    'Zumba': {
      background: 'linear-gradient(45deg, #FFA726, #FF7043)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(255, 167, 38, 0.3)'
    },
    'Late Night CrossFit': {
      background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
    },
    'Lunchtime Strength': {
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
    }
  };
  
  return colorMap[className] || {
    background: 'linear-gradient(45deg, #9C27B0, #673AB7)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)'
  };
};

const SessionCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  padding: '12px',
  margin: '4px 0',
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
    background: 'rgba(255,255,255,0.15)',
  }
}));

const StatusChip = styled(Chip)(({ status }) => {
  const statusColors = {
    'Scheduled': { backgroundColor: '#4CAF50', color: 'white' },
    'Completed': { backgroundColor: '#2196F3', color: 'white' },
    'Cancelled': { backgroundColor: '#f44336', color: 'white' }
  };
  
  return {
    fontSize: '0.7rem',
    height: '20px',
    fontWeight: 600,
    ...statusColors[status]
  };
});

const WeeklySchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/schedules/fetchAll');
        const data = await response.json();
        
        if (data.schedules) {
          // Transform API data to match component structure
          const transformedData = data.schedules.map(schedule => ({
            _id: schedule._id,
            gym: { _id: schedule.gym, name: 'Elite Fitness Center' }, // You might want to fetch gym details
            trainer: {
              _id: schedule.trainer._id,
              name: schedule.trainer.name,
              avatar: '/api/placeholder/40/40'
            },
            class: {
              _id: schedule.class._id,
              name: schedule.class.name,
              type: schedule.class.name, // Using name as type for color mapping
              startTime: schedule.class.time_slot.startTime,
              endTime: schedule.class.time_slot.endTime,
              day: getDayFromDate(schedule.class.date),
              capacity: 15, // Default capacity as it's not in API
              enrolled: Math.floor(Math.random() * 15) + 5 // Random enrolled count
            },
            status: schedule.status,
            createdAt: new Date(schedule.createdAt)
          }));
          
          setScheduleData(transformedData);
        }
      } catch (err) {
        setError('Failed to fetch schedules');
        console.error('Error fetching schedules:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  // Helper function to get day name from date
  const getDayFromDate = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  // Generate time slots with 15-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour);
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum;
    return `${displayHour}:${minute} ${period}`;
  };

  const formatTimeRange = (startTime, endTime) => {
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  const getScheduleForSlot = (day, timeSlot) => {
    return scheduleData.filter(schedule => {
      const classData = schedule.class;
      const startTime = classData.startTime;
      const endTime = classData.endTime;
      
      // Check if the class is on this day and overlaps with this time slot
      if (classData.day !== day) return false;
      
      // Convert times to minutes for comparison
      const slotMinutes = parseInt(timeSlot.split(':')[0]) * 60 + parseInt(timeSlot.split(':')[1]);
      const startMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
      const endMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
      
      return slotMinutes >= startMinutes && slotMinutes < endMinutes;
    });
  };

  const isMainSlot = (day, timeSlot, schedule) => {
    const classData = schedule.class;
    return classData.day === day && classData.startTime === timeSlot;
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' 
      }}>
        <CircularProgress size={60} sx={{ color: '#667eea' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' 
      }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      padding: '20px', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' 
    }}>
      <Card sx={{ 
        marginBottom: '30px', 
        borderRadius: '20px', 
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <CardContent sx={{ textAlign: 'center', padding: '30px' }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#333',
            marginBottom: '10px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <ScheduleIcon sx={{ fontSize: '2rem', marginRight: '15px', color: '#667eea' }} />
            Weekly Class Schedule
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#666', fontSize: '1.1rem' }}>
            View all scheduled classes and training sessions ({scheduleData.length} classes)
          </Typography>
        </CardContent>
      </Card>

      <Fade in timeout={800}>
        <StyledTableContainer component={Paper}>
          <StyledTable>
            <StyledTableHead>
              <TableRow>
                <TableCell sx={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AccessTimeIcon sx={{ fontSize: '1.2rem', marginRight: '8px' }} />
                    Time
                  </Box>
                </TableCell>
                {daysOfWeek.map((day) => (
                  <TableCell key={day} align="center">
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {timeSlots.map((timeSlot, index) => {
                // Only show main time intervals (every 4th slot = hourly display)
                if (index % 4 !== 0) return null;
                
                return (
                  <TableRow key={timeSlot} sx={{ '&:hover': { background: 'rgba(255,255,255,0.02)' } }}>
                    <TimeSlotCell>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {formatTime(timeSlot)}
                      </Typography>
                    </TimeSlotCell>
                    {daysOfWeek.map((day) => {
                      const schedulesInSlot = getScheduleForSlot(day, timeSlot);
                      
                      return (
                        <ScheduleCell key={`${day}-${timeSlot}`}>
                          {schedulesInSlot.map((schedule) => {
                            // Only show the card at the start time of the class
                            if (!isMainSlot(day, timeSlot, schedule)) return null;
                            
                            const classData = schedule.class;
                            const trainerData = schedule.trainer;
                            const colors = getClassColors(classData.type);
                            
                            return (
                              <Zoom in timeout={300} key={schedule._id}>
                                <SessionCard>
                                  <Box sx={{ marginBottom: '8px' }}>
                                    <Chip
                                      label={classData.type}
                                      size="small"
                                      sx={{
                                        ...colors,
                                        fontWeight: 600,
                                        fontSize: '0.7rem'
                                      }}
                                    />
                                    <StatusChip
                                      label={schedule.status}
                                      size="small"
                                      status={schedule.status}
                                      sx={{ marginLeft: '4px' }}
                                    />
                                  </Box>
                                  
                                  <Typography variant="subtitle2" sx={{ 
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    marginBottom: '4px',
                                    lineHeight: 1.2
                                  }}>
                                    {classData.name}
                                  </Typography>
                                  
                                  <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    marginBottom: '4px' 
                                  }}>
                                    <AccessTimeIcon sx={{ 
                                      fontSize: '0.8rem', 
                                      marginRight: '4px',
                                      color: 'rgba(255,255,255,0.8)' 
                                    }} />
                                    <Typography variant="caption" sx={{ 
                                      color: 'rgba(255,255,255,0.9)',
                                      fontSize: '0.7rem',
                                      fontWeight: 500
                                    }}>
                                      {formatTimeRange(classData.startTime, classData.endTime)}
                                    </Typography>
                                  </Box>
                                  
                                  <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    marginBottom: '6px' 
                                  }}>
                                    <PersonIcon sx={{ 
                                      fontSize: '0.8rem', 
                                      marginRight: '4px',
                                      color: 'rgba(255,255,255,0.8)' 
                                    }} />
                                    <Typography variant="caption" sx={{ 
                                      color: 'rgba(255,255,255,0.9)',
                                      fontSize: '0.7rem',
                                      fontWeight: 600
                                    }}>
                                      {trainerData.name}
                                    </Typography>
                                  </Box>
                                  
                                  <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between'
                                  }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <GroupIcon sx={{ 
                                        fontSize: '0.8rem', 
                                        marginRight: '4px',
                                        color: 'rgba(255,255,255,0.8)' 
                                      }} />
                                      <Typography variant="caption" sx={{ 
                                        color: 'rgba(255,255,255,0.8)',
                                        fontSize: '0.65rem'
                                      }}>
                                        {/* {classData.enrolled}/{classData.capacity} */}
                                      </Typography>
                                    </Box>
                                    
                                    {classData.enrolled === classData.capacity && (
                                      <Chip
                                        label="Full"
                                        size="small"
                                        sx={{
                                          backgroundColor: '#ff5722',
                                          color: 'white',
                                          fontSize: '0.6rem',
                                          height: '16px',
                                          fontWeight: 600
                                        }}
                                      />
                                    )}
                                  </Box>
                                </SessionCard>
                              </Zoom>
                            );
                          })}
                        </ScheduleCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </Fade>
    </Box>
  );
};

export default WeeklySchedule;