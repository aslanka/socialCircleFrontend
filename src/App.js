import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/register/register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
