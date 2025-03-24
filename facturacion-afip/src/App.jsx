import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdministrarConsorcios from './pages/administrarConsorcios/AdministrarConsorcios';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="administraciones" element={<AdministrarConsorcios />} />
            {/* Aquí irán las demás rutas */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App; 