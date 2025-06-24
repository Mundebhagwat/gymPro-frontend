import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Grid,
  TextField,
  InputAdornment,
  Chip,
  Box,
  IconButton,
  Divider,
  Badge
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
  FitnessCenter as GymIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
  Star as StarIcon
} from '@mui/icons-material';

const GymOverview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  // Mock data - replace with actual data from your API
  const gymsData = [
    {
      id: 1,
      name: "PowerFit Gym",
      location: "Downtown Plaza, 123 Main St",
      phone: "+1 (555) 123-4567",
      email: "info@powerfit.com",
      trainersCount: 8,
      rating: 4.8,
      memberCount: 245,
      operatingHours: "5:00 AM - 11:00 PM",
      facilities: ["Cardio Zone", "Weight Training", "Group Classes", "Swimming Pool"],
      trainers: [
        { name: "John Smith", specialization: "Strength Training", avatar: "JS" },
        { name: "Sarah Wilson", specialization: "Yoga & Pilates", avatar: "SW" },
        { name: "Mike Johnson", specialization: "CrossFit", avatar: "MJ" }
      ]
    },
    {
      id: 2,
      name: "Elite Fitness Center",
      location: "Westside Mall, 456 Oak Ave",
      phone: "+1 (555) 987-6543",
      email: "contact@elitefitness.com",
      trainersCount: 12,
      rating: 4.6,
      memberCount: 189,
      operatingHours: "6:00 AM - 10:00 PM",
      facilities: ["Personal Training", "Spin Classes", "Rock Climbing", "Sauna"],
      trainers: [
        { name: "Emma Davis", specialization: "HIIT Training", avatar: "ED" },
        { name: "Alex Rodriguez", specialization: "Boxing", avatar: "AR" },
        { name: "Lisa Chen", specialization: "Dance Fitness", avatar: "LC" }
      ]
    },
    {
      id: 3,
      name: "Zen Wellness Studio",
      location: "Park District, 789 Pine Rd",
      phone: "+1 (555) 456-7890",
      email: "hello@zenwellness.com",
      trainersCount: 5,
      rating: 4.9,
      memberCount: 98,
      operatingHours: "7:00 AM - 9:00 PM",
      facilities: ["Meditation Room", "Hot Yoga", "Massage Therapy", "Nutrition Counseling"],
      trainers: [
        { name: "David Kumar", specialization: "Meditation", avatar: "DK" },
        { name: "Rachel Green", specialization: "Yoga Therapy", avatar: "RG" }
      ]
    },
    {
      id: 4,
      name: "Iron Paradise",
      location: "Industrial Zone, 321 Steel St",
      phone: "+1 (555) 654-3210",
      email: "info@ironparadise.com",
      trainersCount: 0,
      rating: 4.2,
      memberCount: 156,
      operatingHours: "24/7",
      facilities: ["Heavy Lifting", "Powerlifting", "Strongman Equipment"],
      trainers: []
    }
  ];

  const totalGyms = gymsData.length;
  const gymsWithTrainers = gymsData.filter(gym => gym.trainersCount > 0).length;

  const filteredGyms = gymsData.filter(gym =>
    gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gym.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const getAvatarColor = (name) => {
    const colors = ['#1976d2', '#388e3c', '#f57c00', '#d32f2f', '#7b1fa2', '#0288d1'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <Box sx={{ 
      padding: '24px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: '32px' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 700,
            color: '#1a202c',
            marginBottom: '8px'
          }}
        >
          Gym Management Overview
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#64748b',
            fontSize: '16px'
          }}
        >
          Monitor and manage all registered gyms and their trainer assignments
        </Typography>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ marginBottom: '32px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(102, 126, 234, 0.3)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', padding: '24px' }}>
              <GymIcon sx={{ fontSize: 48, marginBottom: '16px', opacity: 0.9 }} />
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, marginBottom: '8px' }}>
                {totalGyms}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Total Registered Gyms
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(245, 87, 108, 0.3)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', padding: '24px' }}>
              <PersonIcon sx={{ fontSize: 48, marginBottom: '16px', opacity: 0.9 }} />
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, marginBottom: '8px' }}>
                {gymsWithTrainers}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Gyms with Trainers
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(79, 172, 254, 0.3)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', padding: '24px' }}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, marginBottom: '8px' }}>
                {Math.round((gymsWithTrainers / totalGyms) * 100)}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Coverage Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(250, 112, 154, 0.3)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', padding: '24px' }}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, marginBottom: '8px' }}>
                {gymsData.reduce((sum, gym) => sum + gym.trainersCount, 0)}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Total Trainers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Search Bar */}
      <Card sx={{ marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <CardContent>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search gyms by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#64748b' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
            }}
          />
        </CardContent>
      </Card>

      {/* Gyms List */}
      <Grid container spacing={3}>
        {filteredGyms.map((gym) => (
          <Grid item xs={12} key={gym.id}>
            <Accordion
              expanded={expandedAccordion === `panel${gym.id}`}
              onChange={handleAccordionChange(`panel${gym.id}`)}
              sx={{
                borderRadius: '12px !important',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                marginBottom: '16px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)'
                },
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  padding: '16px 24px',
                  minHeight: '80px',
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                  },
                }}
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: getAvatarColor(gym.name),
                        width: 56,
                        height: 56,
                        fontSize: '1.5rem',
                        fontWeight: 600
                      }}
                    >
                      {gym.name.substring(0, 2).toUpperCase()}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '4px' }}>
                      {gym.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationIcon sx={{ fontSize: 16, marginRight: '4px' }} />
                        {gym.location}
                      </Typography>
                      <Badge
                        badgeContent={gym.trainersCount}
                        color={gym.trainersCount > 0 ? "primary" : "error"}
                        sx={{ marginLeft: '8px' }}
                      >
                        <Chip
                          icon={<PersonIcon />}
                          label={gym.trainersCount > 0 ? "Has Trainers" : "No Trainers"}
                          color={gym.trainersCount > 0 ? "success" : "error"}
                          size="small"
                        />
                      </Badge>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon sx={{ fontSize: 16, color: '#ffc107', marginRight: '4px' }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {gym.rating}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: '0 24px 24px' }}>
                <Divider sx={{ marginBottom: '20px' }} />
                <Grid container spacing={3}>
                  {/* Contact Information */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px', color: '#1a202c' }}>
                      Contact Information
                    </Typography>
                    <List dense>
                      <ListItem sx={{ paddingLeft: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#e3f2fd', color: '#1976d2', width: 32, height: 32 }}>
                            <PhoneIcon sx={{ fontSize: 18 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={gym.phone} secondary="Phone Number" />
                      </ListItem>
                      <ListItem sx={{ paddingLeft: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#e8f5e8', color: '#388e3c', width: 32, height: 32 }}>
                            <EmailIcon sx={{ fontSize: 18 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={gym.email} secondary="Email Address" />
                      </ListItem>
                      <ListItem sx={{ paddingLeft: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#fff3e0', color: '#f57c00', width: 32, height: 32 }}>
                            <TimeIcon sx={{ fontSize: 18 }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={gym.operatingHours} secondary="Operating Hours" />
                      </ListItem>
                    </List>
                  </Grid>

                  {/* Facilities & Stats */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px', color: '#1a202c' }}>
                      Facilities & Statistics
                    </Typography>
                    <Box sx={{ marginBottom: '16px' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
                        Available Facilities
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {gym.facilities.map((facility, index) => (
                          <Chip
                            key={index}
                            label={facility}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              borderRadius: '16px',
                              '&:hover': { backgroundColor: '#f0f4ff' }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Members:</strong> {gym.memberCount} • <strong>Rating:</strong> {gym.rating}/5.0
                    </Typography>
                  </Grid>

                  {/* Trainers */}
                  {gym.trainers.length > 0 && (
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px', color: '#1a202c' }}>
                        Assigned Trainers ({gym.trainers.length})
                      </Typography>
                      <Grid container spacing={2}>
                        {gym.trainers.map((trainer, index) => (
                          <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                              sx={{
                                padding: '16px',
                                textAlign: 'center',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                  transform: 'translateY(-2px)'
                                }
                              }}
                            >
                              <Avatar
                                sx={{
                                  bgcolor: getAvatarColor(trainer.name),
                                  width: 48,
                                  height: 48,
                                  margin: '0 auto 12px',
                                  fontSize: '1.2rem',
                                  fontWeight: 600
                                }}
                              >
                                {trainer.avatar}
                              </Avatar>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
                                {trainer.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {trainer.specialization}
                              </Typography>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  )}

                  {gym.trainers.length === 0 && (
                    <Grid item xs={12}>
                      <Card
                        sx={{
                          padding: '24px',
                          textAlign: 'center',
                          backgroundColor: '#fef2f2',
                          border: '1px solid #fecaca'
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 48, color: '#dc2626', marginBottom: '12px' }} />
                        <Typography variant="h6" sx={{ color: '#dc2626', marginBottom: '8px' }}>
                          No Trainers Assigned
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This gym currently has no trainers assigned. Consider assigning qualified trainers to improve service quality.
                        </Typography>
                      </Card>
                    </Grid>
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>

      {filteredGyms.length === 0 && (
        <Card sx={{ padding: '48px', textAlign: 'center' }}>
          <SearchIcon sx={{ fontSize: 64, color: '#cbd5e0', marginBottom: '16px' }} />
          <Typography variant="h6" sx={{ marginBottom: '8px', color: '#4a5568' }}>
            No gyms found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search terms or clear the search to see all gyms.
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default GymOverview;