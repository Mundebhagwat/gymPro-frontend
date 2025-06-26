import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SignIn from './pages/LoginPage';
import SignUp from './pages/RegisterPage';
import Admin from './pages/AdminPage';
import Trainer from './pages/TrainersPage';
import GymPage from './pages/GymPage';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Admin />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/trainer" 
          element={
            <ProtectedRoute allowedRoles={['trainer']}>
              <Trainer />
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/gym" 
          element={
            <ProtectedRoute allowedRoles={['gym']}>
              <GymPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

