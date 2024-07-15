import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogInPage from "./pages/LogIn";
import RegisterPage from './pages/Register';
import EditTask from './components/TaskForm/EditTask';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

