import { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const submitRegisterForm = async () => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };

    const apiResponse = await axios
    .post(`${import.meta.env.VITE_API_URL_BACKEND } / register`, paylode) //Loging success message when request is successful
    
      console.log("User Registered Successfully", apiResponse.data.token);

      localStorage.setItem("token",apiResponse.data.token); // Store the token in local storage

       navigate("/dashboard");
      console.log(apiResponse, "apiResponse ==>");
  };


return (
  <div className="m-5 text-center">
    <Card>
      <Card.Body>
        <Card.Title>Register</Card.Title>

        <form>
          <input type ="text" 
          placeholder="Enter name" 
          name="name" 
          value= {name}
          onChange={(e)=> setName(e.target.value)}
          />
          <br />
          <br />

           <input 
           type ="text" 
           placeholder="Enter email" 
           name="email" 
           value= {email}
          onChange={(e)=> setEmail(e.target.value)}
          />
          <br />
          <br />

          <input 
          type ="text" 
          placeholder="Enter password" 
          name="password" 
          //value= {password}
          onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
          <br />

          <button className="btn btn-success" onClick={submitRegisterForm}> 
            Register 
          </button>
          <br />
          <br />
          <p className="text-danger">Already have an account?
            <a href ="/">Login</a>
          </p>      
        </form>
      </Card.Body>
    </Card>
    
  </div>
);
};

export default Register;







