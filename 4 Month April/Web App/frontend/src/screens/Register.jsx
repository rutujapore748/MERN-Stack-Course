import { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();


  const submitRegisterForm = async () => {
    const paylode = {
      name: name,
      email: email,
      pass: pass
    }
    const apiResponse = await axios.post('${import.meta.env.VITE_API_URL } / register', paylode).then((response) => navigate("/dashboard")).catch((error)) => console.log((error))
      console.log(apiResponse, "api response ==>");
  }


return (
  <div className="m-5">
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Register</Card.Title>

        <form>
          <input type ="text" placeholder="Enter your name" name="name" value= {name}
          onChange={(e)=> setName(e.target.value)}/>
          <br />
          <br />

           <input type ="text" placeholder="Enter your email" name="email" value= {email}
          onChange={(e)=> setEmail(e.target.value)}/>
          <br />
          <br />

          <input type ="password" placeholder="Enter your password" name="pass" value= {pass}
          onChange={(e)=> setPass(e.target.value)}/>
          <br />
          <br />

          <button className="btn btn-success" onClick={submitRegisterForm}> Register </button>
          <br />
          <br />
          <p className="text-danger">Don't have an account?{""}
            <a href ="/register">Register</a>
          </p>      
        </form>
      </Card.Body>
    </Card>
    
  </div>
);

};

export default Register






export default Register
