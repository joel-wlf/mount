import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Car from './pages/Car';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/home" element={<Home />} />
          <Route path="/car" element={<Car />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
