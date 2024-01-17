import './App.css'
import Dashboard from './pages/Dashboard'
import News from './pages/News'
import Home from './pages/Home'
import Car from './pages/Car'
import { BrowserRouter, Routes, Route} from "react-router-dom";


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
  )
}

export default App
