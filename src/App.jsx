import './App.css'
import './pages/Dashboard'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
