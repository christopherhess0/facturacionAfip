import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import AdministrarConsorcios from './pages/administrarConsorcios/AdministrarConsorcios';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Navigate to="/administraciones" replace />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/administraciones"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdministrarConsorcios />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App; 