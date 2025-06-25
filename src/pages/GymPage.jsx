import NavBar from "../components/GymNavBar"
import WeeklySchedule from "../components/GymWeeklySchedule"
import AddClassForm from "../components/GymAddClassForm"

import {
    Box,
} from '@mui/material';

function GymPage() {

    return (
        <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh', pb: 5 }}>
            <NavBar />
            <Box sx={{ maxWidth: '1300px', mx: 'auto', mt: 4, px: 3 }}>
            <WeeklySchedule />
            <AddClassForm />
            </Box>
        </Box>

    )
}

export default GymPage;