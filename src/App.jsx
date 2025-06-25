import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SignIn from './pages/LoginPage';
import SignUp from './pages/RegisterPage';
import Admin from './pages/AdminPage';
import Trainer from './pages/TrainersPage';
import ProtectedRoute from './components/ProtectedRoute'; // ⬅️ Import the wrapper

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
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/trainer" 
          element={
            <ProtectedRoute>
              <Trainer />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

