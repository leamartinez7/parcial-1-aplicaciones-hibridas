// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import ItemsList from './pages/ItemsList';
import ItemDetail from './pages/ItemDetail';
import CreateItem from './pages/CreateItem';
import TradesList from './pages/TradesList';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/items"
          element={
            <PrivateRoute>
              <ItemsList />
            </PrivateRoute>
          }
        />
        <Route
          path="/items/new"
          element={
            <PrivateRoute>
              <CreateItem />
            </PrivateRoute>
          }
        />
        <Route
          path="/items/:id"
          element={
            <PrivateRoute>
              <ItemDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/trades"
          element={
            <PrivateRoute>
              <TradesList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/items" />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
