import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/home';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
