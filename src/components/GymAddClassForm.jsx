import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Alert,
  Grid,
  Divider,
  Container,
  Paper,
  Fade,
  Zoom
} from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  Add as AddIcon,
  FitnessCenter as FitnessCenterIcon,
  Schedule as ScheduleIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';

const AddClassForm = () => {
  const [formData, setFormData] = useState({
    className: '',
    requiredSkills: [],
    date: null,
    timeFrom: null,
    timeTo: null
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  // Available skills for selection
  const availableSkills = [
    'Beginner Friendly',
    'Intermediate',
    'Advanced',
    'Cardio',
    'Strength Training',
    'Flexibility',
    'Yoga Experience',
    'HIIT Training',
    'Pilates',
    'CrossFit',
    'Boxing',
    'Swimming',
    'Cycling',
    'Dance'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.className.trim()) {
      newErrors.className = 'Class name is required';
    }
    
    if (formData.requiredSkills.length === 0) {
      newErrors.requiredSkills = 'At least one skill level is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.timeFrom) {
      newErrors.timeFrom = 'Start time is required';
    }
    
    if (!formData.timeTo) {
      newErrors.timeTo = 'End time is required';
    }
    
    if (formData.timeFrom && formData.timeTo && formData.timeFrom >= formData.timeTo) {
      newErrors.timeTo = 'End time must be after start time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage({ type: 'error', text: 'Please fix the errors above' });
      return;
    }

    setLoading(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      // Get auth token (using in-memory storage for this example)
      const authToken = localStorage.getItem("authToken"); // In real app, get from secure storage
      
      if (!authToken) {
        throw new Error('Authentication required');
      }

      const classData = {
        gym: localStorage.getItem("userId"),
        name: formData.className.trim(),
        skill_required: formData.requiredSkills,
        date: formData.date.toISOString().split('T')[0],
        time_slot: {
            startTime: formData.timeFrom.toTimeString().slice(0, 5),
            endTime: formData.timeTo.toTimeString().slice(0, 5)
        }, // Format as YYYY-MM-DD
        // timeFrom: formData.timeFrom.toTimeString().slice(0, 5), // Format as HH:MM
        // timeTo: formData.timeTo.toTimeString().slice(0, 5) // Format as HH:MM
      };

      const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/classes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(classData)
      });


      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add class');
      }

      const result = await response.json();
      
      setSubmitMessage({ 
        type: 'success', 
        text: 'Class added successfully to the schedule!' 
      });
      
      // Reset form
      setFormData({
        className: '',
        requiredSkills: [],
        date: null,
        timeFrom: null,
        timeTo: null
      });
      setErrors({});

    } catch (error) {
    //   console.error('Error adding class:', error.error.message);
      setSubmitMessage({ 
        type: 'error', 
        text: error.message || 'Failed to add class. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSkillsChange = (event) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      requiredSkills: typeof value === 'string' ? value.split(',') : value
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          minHeight: '100vh',
          background: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)
          `,
          py: 6,
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            opacity: 0.4,
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Floating Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff6b6b, #ffd93d)',
              opacity: 0.1,
              zIndex: 0,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
              opacity: 0.1,
              zIndex: 0,
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          />

          {/* Header */}
          <Fade in timeout={1000}>
            <Box textAlign="center" mb={6}>
              <Zoom in timeout={1200}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    mb: 3,
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -2,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
                      zIndex: -1,
                      opacity: 0.8
                    }
                  }}
                >
                  <StarIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
              </Zoom>
              
              <Typography
                variant="h2"
                sx={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 800,
                  mb: 2,
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.02em'
                }}
              >
                Create Class
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Design extraordinary fitness experiences that inspire and transform your members
              </Typography>
            </Box>
          </Fade>

          {/* Main Form Card */}
          <Fade in timeout={1500}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 32px 64px rgba(0, 0, 0, 0.15),
                  0 0 0 1px rgba(255, 255, 255, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c)',
                  backgroundSize: '300% 100%',
                  animation: 'gradientShift 3s ease infinite'
                }
              }}
            >
              <CardContent sx={{ p: 6 }}>
                {submitMessage.text && (
                  <Zoom in>
                    <Alert 
                      severity={submitMessage.type} 
                      sx={{ 
                        mb: 4, 
                        borderRadius: 3,
                        backgroundColor: submitMessage.type === 'success' ? 'rgba(46, 125, 50, 0.1)' : 'rgba(211, 47, 47, 0.1)',
                        border: `1px solid ${submitMessage.type === 'success' ? 'rgba(46, 125, 50, 0.2)' : 'rgba(211, 47, 47, 0.2)'}`,
                        '& .MuiAlert-icon': {
                          fontSize: 28
                        }
                      }}
                    >
                      {submitMessage.text}
                    </Alert>
                  </Zoom>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                    {/* Class Details Section */}
                    <Grid item xs={12}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                          border: '1px solid rgba(102, 126, 234, 0.1)',
                          position: 'relative'
                        }}
                      >
                        <Box display="flex" alignItems="center" mb={3}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 48,
                              height: 48,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              mr: 2,
                              boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)'
                            }}
                          >
                            <FitnessCenterIcon sx={{ color: 'white', fontSize: 24 }} />
                          </Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 700,
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              color: 'transparent'
                            }}
                          >
                            Class Details
                          </Typography>
                        </Box>

                        <TextField
                          fullWidth
                          label="Class Name"
                          value={formData.className}
                          onChange={(e) => setFormData(prev => ({ ...prev, className: e.target.value }))}
                          error={!!errors.className}
                          helperText={errors.className}
                          placeholder="e.g., Elite Morning Yoga, Advanced HIIT Fusion"
                          sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(102, 126, 234, 0.2)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                borderColor: 'rgba(102, 126, 234, 0.4)',
                                background: 'rgba(255, 255, 255, 0.9)'
                              },
                              '&.Mui-focused': {
                                borderColor: '#667eea',
                                boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontWeight: 600
                            }
                          }}
                        />

                        <FormControl 
                          fullWidth 
                          error={!!errors.requiredSkills}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(102, 126, 234, 0.2)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                borderColor: 'rgba(102, 126, 234, 0.4)',
                                background: 'rgba(255, 255, 255, 0.9)'
                              },
                              '&.Mui-focused': {
                                borderColor: '#667eea',
                                boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontWeight: 600
                            }
                          }}
                        >
                          <InputLabel>Required Skills & Levels</InputLabel>
                          <Select
                            multiple
                            value={formData.requiredSkills}
                            onChange={handleSkillsChange}
                            renderValue={(selected) => (
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                  <Chip 
                                    key={value} 
                                    label={value} 
                                    size="small"
                                    sx={{
                                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                      color: 'white',
                                      fontWeight: 600,
                                      borderRadius: 2,
                                      '& .MuiChip-deleteIcon': {
                                        color: 'rgba(255,255,255,0.8)'
                                      }
                                    }}
                                  />
                                ))}
                              </Box>
                            )}
                          >
                            {availableSkills.map((skill) => (
                              <MenuItem key={skill} value={skill}>
                                {skill}
                              </MenuItem>
                            ))}
                          </Select>
                          {errors.requiredSkills && (
                            <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                              {errors.requiredSkills}
                            </Typography>
                          )}
                        </FormControl>
                      </Paper>
                    </Grid>

                    {/* Schedule Section */}
                    <Grid item xs={12}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)',
                          border: '1px solid rgba(240, 147, 251, 0.1)'
                        }}
                      >
                        <Box display="flex" alignItems="center" mb={3}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 48,
                              height: 48,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                              mr: 2,
                              boxShadow: '0 8px 16px rgba(240, 147, 251, 0.3)'
                            }}
                          >
                            <ScheduleIcon sx={{ color: 'white', fontSize: 24 }} />
                          </Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 700,
                              background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              color: 'transparent'
                            }}
                          >
                            Schedule
                          </Typography>
                        </Box>

                        <Grid container spacing={3}>
                          <Grid item xs={12} md={4}>
                            <DatePicker
                              label="Class Date"
                              value={formData.date}
                              onChange={(newValue) => setFormData(prev => ({ ...prev, date: newValue }))}
                              minDate={new Date()}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.date,
                                  helperText: errors.date,
                                  sx: {
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: 3,
                                      background: 'rgba(255, 255, 255, 0.8)',
                                      backdropFilter: 'blur(10px)',
                                      border: '1px solid rgba(240, 147, 251, 0.2)',
                                      transition: 'all 0.3s ease',
                                      '&:hover': {
                                        borderColor: 'rgba(240, 147, 251, 0.4)',
                                        background: 'rgba(255, 255, 255, 0.9)'
                                      },
                                      '&.Mui-focused': {
                                        borderColor: '#f093fb',
                                        boxShadow: '0 0 0 3px rgba(240, 147, 251, 0.1)'
                                      }
                                    },
                                    '& .MuiInputLabel-root': {
                                      fontWeight: 600
                                    }
                                  }
                                }
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} md={4}>
                            <TimePicker
                              label="Start Time"
                              value={formData.timeFrom}
                              onChange={(newValue) => setFormData(prev => ({ ...prev, timeFrom: newValue }))}
                              ampm={false}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.timeFrom,
                                  helperText: errors.timeFrom,
                                  sx: {
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: 3,
                                      background: 'rgba(255, 255, 255, 0.8)',
                                      backdropFilter: 'blur(10px)',
                                      border: '1px solid rgba(240, 147, 251, 0.2)',
                                      transition: 'all 0.3s ease',
                                      '&:hover': {
                                        borderColor: 'rgba(240, 147, 251, 0.4)',
                                        background: 'rgba(255, 255, 255, 0.9)'
                                      },
                                      '&.Mui-focused': {
                                        borderColor: '#f093fb',
                                        boxShadow: '0 0 0 3px rgba(240, 147, 251, 0.1)'
                                      }
                                    },
                                    '& .MuiInputLabel-root': {
                                      fontWeight: 600
                                    }
                                  }
                                }
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} md={4}>
                            <TimePicker
                              label="End Time"
                              value={formData.timeTo}
                              onChange={(newValue) => setFormData(prev => ({ ...prev, timeTo: newValue }))}
                              ampm={false}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.timeTo,
                                  helperText: errors.timeTo,
                                  sx: {
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: 3,
                                      background: 'rgba(255, 255, 255, 0.8)',
                                      backdropFilter: 'blur(10px)',
                                      border: '1px solid rgba(240, 147, 251, 0.2)',
                                      transition: 'all 0.3s ease',
                                      '&:hover': {
                                        borderColor: 'rgba(240, 147, 251, 0.4)',
                                        background: 'rgba(255, 255, 255, 0.9)'
                                      },
                                      '&.Mui-focused': {
                                        borderColor: '#f093fb',
                                        boxShadow: '0 0 0 3px rgba(240, 147, 251, 0.1)'
                                      }
                                    },
                                    '& .MuiInputLabel-root': {
                                      fontWeight: 600
                                    }
                                  }
                                }
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                      <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<AddIcon />}
                          disabled={loading}
                          sx={{
                            py: 2.5,
                            px: 6,
                            borderRadius: 4,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                            backgroundSize: '200% 100%',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            color: 'white',
                            border: 'none',
                            boxShadow: '0 12px 24px rgba(102, 126, 234, 0.4)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                              transition: 'left 0.5s ease'
                            },
                            '&:hover': {
                              backgroundPosition: '100% 0',
                              boxShadow: '0 16px 32px rgba(102, 126, 234, 0.6)',
                              transform: 'translateY(-3px)',
                              '&::before': {
                                left: '100%'
                              }
                            },
                            '&:active': {
                              transform: 'translateY(-1px)'
                            },
                            '&:disabled': {
                              background: 'rgba(102, 126, 234, 0.5)',
                              transform: 'none',
                              boxShadow: 'none'
                            },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            animation: loading ? 'pulse 2s infinite' : 'none'
                          }}
                        >
                          {loading ? (
                            <>
                              <TrendingUpIcon sx={{ mr: 1, animation: 'spin 1s linear infinite' }} />
                              Creating Class...
                            </>
                          ) : (
                            'Add Class'
                          )}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Fade>
        </Container>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </Box>
    </LocalizationProvider>
  );
};

export default AddClassForm;