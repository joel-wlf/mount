import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Car from './pages/Car';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import News from './pages/News';
import ServiceMenu from './pages/services/ServiceMenu';
import ShareRide from './pages/services/ShareRide';
import ShareYourRide from './pages/services/ShareYourRide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="news" element={<News />} />
          <Route path="home" element={<Home />} />
          <Route path="car" element={<Car />} />
          <Route path="services">
            <Route index element={<ServiceMenu />} />
            <Route path="share-ride" element={<ShareRide />} />
            <Route path="share-your-ride" element={<ShareYourRide />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
