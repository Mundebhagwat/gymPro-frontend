import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SignIn from './pages/LoginPage';
import SignUp from './pages/RegisterPage';
import Admin from './pages/AdminPage'
import Trainer from './pages/TrainersPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </Router>
  );
}

export default App;
