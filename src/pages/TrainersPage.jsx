import TrainerGreeting from "../components/TrainerGreeting"
import TrainerSchedule from "../components/TrainerSchedule"
import NavBarTrainer from "../components/NavBarTrainer"
import TrainerStatsCard from "../components/TrainerStatsCard"
import WeeklyScheduleSection from "../components/WeeklyScheduleSection"
import AvailabilitySection from "../components/AvailabilitySection"
import {
  Box,
} from '@mui/material';

function TrainersPage() {

    return (
        <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh', pb: 5 }}>
      <NavBarTrainer />
      <Box sx={{ maxWidth: '1300px', mx: 'auto', mt: 4, px: 3 }}>
        <TrainerStatsCard />
        <WeeklyScheduleSection />
        <AvailabilitySection />
      </Box>
    </Box>

    )
}

export default TrainersPage;