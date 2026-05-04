import { useNavigate } from "react-router-dom"


export const ProtectedRoute = ({children}) => {
      const navigate = useNavigate();
    
    const token = localStorage.getItem("token")

    if(!token){
        return <Navigate to= "/" />
    }

        return children
  }

export const PublicRoute = ({children}) => {
          
    const token = localStorage.getItem("token")

    if(token){
        return <Navigate to= "/dashboard" />
    }

        return children
  }

