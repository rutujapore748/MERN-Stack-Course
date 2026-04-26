import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route , Link } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Item from './screens/Item';
import Dashboard from './screens/Dashboard';

import AuthNavBar from './components/AuthNavBar';
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {

  console.log(import.meta.env.VITE_API_URL_BACKEND , "====>");

  return (
    <BrowserRouter>
     <div>
       {/* ToastContainer renders the toast notification popup on the screen */}
        <ToastContainer
          // Setting the default position of all toasts to top-right
          position="top-right"
          // Auto closing toast after 5000 milliseconds
          autoClose={5000}
        />


       <AuthNavBar/>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/item"
            element={
              <ProtectedRoute>
                <Item />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
      </Routes>
     </div>
      
    </BrowserRouter>
  );
};

export default App;
