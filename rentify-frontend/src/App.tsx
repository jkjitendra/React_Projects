import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Auth/register';
import Login from './components/Auth/login';
import AddProperty from './components/Properties/addProperty';
import { AuthProvider, useAuth } from './utils/context/AuthContext';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Login />;
};

const App: React.FC = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/add-property">Add Property</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-property" element={<ProtectedRoute element={<AddProperty />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
