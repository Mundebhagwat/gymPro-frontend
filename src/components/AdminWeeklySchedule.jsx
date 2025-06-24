import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Popover,
  Typography,
  Box,
  Chip,
  Button,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  Zoom,
  Card,
  CardContent,
  Tooltip
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  FitnessCenter as FitnessCenterIcon,
  Person as PersonIcon,
  Schedule as ScheduleIcon
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
  minWidth: 800,
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
  fontSize: '0.9rem',
  width: '120px',
  textAlign: 'center',
}));

const ScheduleCell = styled(TableCell)(({ theme }) => ({
  padding: '8px',
  position: 'relative',
  height: '80px',
  verticalAlign: 'top',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.05)',
    transform: 'scale(1.02)',
  }
}));

const getSessionColors = (type) => {
  switch (type) {
    case 'Personal Training':
      return {
        background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
        color: 'white',
        boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
      };
    case 'Group Class':
      return {
        background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
        color: 'white',
        boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
      };
    case 'Cardio Session':
      return {
        background: 'linear-gradient(45deg, #A8EDEA, #FED6E3)',
        color: '#333',
        boxShadow: '0 4px 15px rgba(168, 237, 234, 0.3)'
      };
    case 'Strength Training':
      return {
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        color: 'white',
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
      };
    default:
      return {
        background: 'linear-gradient(45deg, #f093fb, #f5576c)',
        color: 'white',
        boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
      };
  }
};

const SessionChip = styled(Chip)(({ theme }) => ({
  borderRadius: '12px',
  fontSize: '0.75rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  margin: '2px',
  '&:hover': {
    transform: 'translateY(-2px)',
  }
}));

const AddSessionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea, #764ba2)',
  color: 'white',
  borderRadius: '12px',
  padding: '8px 16px',
  fontSize: '0.8rem',
  fontWeight: 600,
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #764ba2, #667eea)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
  }
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    minWidth: '400px',
  }
}));

const WeeklySchedule = () => {
  // Time slots from 6 AM to 10 PM
  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const sessionTypes = ['Personal Training', 'Group Class', 'Cardio Session', 'Strength Training', 'Yoga Class'];
  const trainers = ['John Smith', 'Sarah Johnson', 'Mike Wilson', 'Emma Davis', 'Alex Brown'];

  // Sample schedule data
  const [schedule, setSchedule] = useState({
    'Monday-09:00': { trainer: 'John Smith', type: 'Personal Training', client: 'Client A', id: 1 },
    'Monday-10:00': { trainer: 'Sarah Johnson', type: 'Group Class', client: 'Yoga Group', id: 2 },
    'Tuesday-08:00': { trainer: 'Mike Wilson', type: 'Strength Training', client: 'Client B', id: 3 },
    'Wednesday-15:00': { trainer: 'Emma Davis', type: 'Cardio Session', client: 'Client C', id: 4 },
    'Thursday-09:00': { trainer: 'Alex Brown', type: 'Personal Training', client: 'Client D', id: 5 },
    'Friday-17:00': { trainer: 'John Smith', type: 'Group Class', client: 'Evening Class', id: 6 },
  });

  const [editDialog, setEditDialog] = useState({ open: false, slot: null, session: null });
  const [newSession, setNewSession] = useState({
    trainer: '',
    type: '',
    client: ''
  });

  const handleCellClick = (day, time) => {
    const slotKey = `${day}-${time}`;
    const existingSession = schedule[slotKey];
    
    setNewSession(existingSession || { trainer: '', type: '', client: '' });
    setEditDialog({ open: true, slot: slotKey, session: existingSession });
  };

  const handleSaveSession = () => {
    if (newSession.trainer && newSession.type && newSession.client) {
      const updatedSchedule = { ...schedule };
      updatedSchedule[editDialog.slot] = {
        ...newSession,
        id: editDialog.session?.id || Date.now()
      };
      setSchedule(updatedSchedule);
    }
    setEditDialog({ open: false, slot: null, session: null });
    setNewSession({ trainer: '', type: '', client: '' });
  };

  const handleDeleteSession = () => {
    const updatedSchedule = { ...schedule };
    delete updatedSchedule[editDialog.slot];
    setSchedule(updatedSchedule);
    setEditDialog({ open: false, slot: null, session: null });
  };

  const handleCloseDialog = () => {
    setEditDialog({ open: false, slot: null, session: null });
    setNewSession({ trainer: '', type: '', client: '' });
  };

  const formatTime = (time) => {
    const hour = parseInt(time.split(':')[0]);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <Box sx={{ padding: '20px', minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
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
            Weekly Training Schedule
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#666', fontSize: '1.1rem' }}>
            Manage trainer schedules and client sessions
          </Typography>
        </CardContent>
      </Card>

      <Fade in timeout={800}>
        <StyledTableContainer component={Paper}>
          <StyledTable>
            <StyledTableHead>
              <TableRow>
                <TableCell sx={{ width: '120px' }}>Time</TableCell>
                {daysOfWeek.map((day) => (
                  <TableCell key={day} align="center">
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {timeSlots.map((time) => (
                <TableRow key={time} sx={{ '&:hover': { background: 'rgba(255,255,255,0.02)' } }}>
                  <TimeSlotCell>
                    {formatTime(time)}
                  </TimeSlotCell>
                  {daysOfWeek.map((day) => {
                    const slotKey = `${day}-${time}`;
                    const session = schedule[slotKey];
                    
                    return (
                      <ScheduleCell 
                        key={slotKey} 
                        onClick={() => handleCellClick(day, time)}
                      >
                        {session ? (
                          <Zoom in timeout={300}>
                            <Box>
                              <SessionChip
                                label={session.type}
                                size="small"
                                sx={{
                                  display: 'block',
                                  marginBottom: '4px',
                                  ...getSessionColors(session.type)
                                }}
                              />
                              <Typography variant="caption" sx={{ 
                                display: 'block', 
                                color: 'rgba(255,255,255,0.9)',
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }}>
                                <PersonIcon sx={{ fontSize: '0.8rem', marginRight: '2px' }} />
                                {session.trainer}
                              </Typography>
                              <Typography variant="caption" sx={{ 
                                display: 'block', 
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '0.65rem'
                              }}>
                                {session.client}
                              </Typography>
                            </Box>
                          </Zoom>
                        ) : (
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            height: '100%',
                            opacity: 0.3,
                            transition: 'opacity 0.3s ease',
                            '&:hover': { opacity: 0.8 }
                          }}>
                            <AddIcon sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)' }} />
                          </Box>
                        )}
                      </ScheduleCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </Fade>

      <StyledDialog 
        open={editDialog.open} 
        onClose={handleCloseDialog}
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 300 }}
      >
        <DialogTitle sx={{ 
          textAlign: 'center', 
          fontSize: '1.5rem', 
          fontWeight: 700,
          paddingBottom: '10px'
        }}>
          <FitnessCenterIcon sx={{ fontSize: '2rem', marginRight: '10px' }} />
          {editDialog.session ? 'Edit Session' : 'Add New Session'}
        </DialogTitle>
        <DialogContent sx={{ padding: '20px 30px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Trainer</InputLabel>
              <Select
                value={newSession.trainer}
                onChange={(e) => setNewSession({ ...newSession, trainer: e.target.value })}
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                }}
              >
                {trainers.map((trainer) => (
                  <MenuItem key={trainer} value={trainer}>{trainer}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Session Type</InputLabel>
              <Select
                value={newSession.type}
                onChange={(e) => setNewSession({ ...newSession, type: e.target.value })}
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                }}
              >
                {sessionTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Client/Group Name"
              value={newSession.client}
              onChange={(e) => setNewSession({ ...newSession, client: e.target.value })}
              sx={{
                '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                '& .MuiOutlinedInput-root': { 
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                  '&.Mui-focused fieldset': { borderColor: 'white' }
                }
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: '20px 30px', justifyContent: 'space-between' }}>
          <Box>
            {editDialog.session && (
              <Button
                onClick={handleDeleteSession}
                startIcon={<DeleteIcon />}
                sx={{
                  color: '#ff6b6b',
                  borderColor: '#ff6b6b',
                  '&:hover': { 
                    background: 'rgba(255, 107, 107, 0.1)',
                    borderColor: '#ff5252'
                  }
                }}
                variant="outlined"
              >
                Delete
              </Button>
            )}
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button 
              onClick={handleCloseDialog}
              startIcon={<CancelIcon />}
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                '&:hover': { color: 'white' }
              }}
            >
              Cancel
            </Button>
            <AddSessionButton
              onClick={handleSaveSession}
              startIcon={<SaveIcon />}
              disabled={!newSession.trainer || !newSession.type || !newSession.client}
            >
              {editDialog.session ? 'Update' : 'Add'} Session
            </AddSessionButton>
          </Box>
        </DialogActions>
      </StyledDialog>
    </Box>
  );
};

export default WeeklySchedule;