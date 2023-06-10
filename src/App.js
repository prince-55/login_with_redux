import './App.css';
import Login from './pages/Login';
import SignUp from'./pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element= {<Login/>} />
      <Route path='/register' element= {<SignUp/>} />
      <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
              />
      </Routes>
    </div>
  );
}

export default App;
