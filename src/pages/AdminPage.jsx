
import AdminNavbar from "../components/NavbarAdmin";
import DashboardOverview from "../components/DashboardAdmin";
import TrainersOverview from "../components/AdminTrainersOverview";
import WeeklySchedule from "../components/AdminWeeklySchedule";
import GymOverview from "../components/AdminGymOverview"
import { Box } from '@mui/material';

function AdminPage() {
    return(
        <>
            <AdminNavbar />
            
            {/* Dashboard Section */}
            <Box id="dashboard" sx={{ scrollMarginTop: '80px' }}>
                <DashboardOverview />
            </Box>
            
            {/* Trainers Section */}
            <Box id="trainers" sx={{ scrollMarginTop: '80px' }}>
                <TrainersOverview />
            </Box>
            
            {/* Schedule Section */}
            <Box id="schedule" sx={{ scrollMarginTop: '80px' }}>
                <WeeklySchedule />
            </Box>
            
            {/* Gyms Section */}
            <Box id="gyms" sx={{ scrollMarginTop: '80px' }}>
                <GymOverview />
            </Box>
        </>
    )
}

export default AdminPage