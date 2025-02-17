import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './routes/main/Main';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import { createCSSVariables } from '../src/styles/color';

createCSSVariables();

const PrivateRoute = ({ children }) => {
  const hasAccessToken = localStorage.getItem('accessToken') !== null;
  return hasAccessToken ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
