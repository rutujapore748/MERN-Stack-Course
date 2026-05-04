import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route , Link } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Item from './screens/Item';
import Dashboard from './screens/Dashboard';

import AuthNavBar from './components/AuthNavBar';
import { ToastContainer } from "react-toastify";
import { ProtectedRoute , PublicRoute } from "./components/ProtectedRoute";


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

       {/* AuthNavBar is shown on all pages except login and register */}
       <AuthNavBar/>

        {/* Routes holds all the page paths of our app */}
        <Routes>

            {/* "/" is the login page
              Wrapped in PublicRoute so logged in users go to dashboard instead */}
        <Route path="/" element={<PublicRoute> <Login /> </PublicRoute>} />

               {/* "/register" is the register page
              Wrapped in PublicRoute so logged in users go to dashboard instead */}
          <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />

          {/* "/item" is protected - only logged in users can see it
              If no token, ProtectedRoute sends user back to login */}
          <Route
            path="/item"
            element={
              <ProtectedRoute>
                <Item />
              </ProtectedRoute>
            }
          />

           {/* "/dashboard" is protected - only logged in users can see it
              If no token, ProtectedRoute sends user back to login */}
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
