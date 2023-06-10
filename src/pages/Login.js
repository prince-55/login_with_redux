import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../features/userSlice";
import store from './../features/store';
import FormInput from "../components/FormInput";


const Login = () => {
//   const [values, setValues] = useState({
//     email:"",
//     password:""
//   })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  store.subscribe(()=> {
    const storeData = store.getState();
    console.log(storeData, " Jai bhole ki")
    if(storeData.user.authenticate)
       return navigate("/home");
});
  const authenticate = useSelector(state=> state.user.authenticate)
  console.log(authenticate);    

//   const inputs = [
//     {
//         id: 1,
//         name: "email",
//         type: "email",
//         placeholder: "Email",
//         errorMessage: "It should be a valid email address!",
//         label: "Email",
//         required: true,
//       },
//       {
//         id: 2,
//         name: "password",
//         type: "password",
//         placeholder: "Password",
//         errorMessage:
//           "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//         label: "Password",
//         pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//         required: true,
//       },
      
//   ]

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
        // dispatch(login({(values?.email),(values?.password)}))
        dispatch(login({email,password}))
        
    } catch (err) {
      setError(err.message);
    }
  };


    return (
      <div className="h-100">
        <div className="p-4 box h-75 my-5">
          <h2 className="mb-3 text-center my-5">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {/* {inputs.map((input) => (
            <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
            ))} */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="">
              <Button variant="primary" type="Submit" className="w-100">
                Log In
              </Button>
            </div>
          </Form>
          
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    );
  };

  export default Login;















// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Login() {
//     const [values, setValues] = useState({
//         email: "",
//         password: ""
//     })
//     const navigate = useNavigate();

//     return (
//         <>
//             <section class="" style={{ backgroundColor: "#323155" }}>
//                 <div class="container py-5 h-100">
//                     <div class="row d-flex justify-content-center align-items-center h-100">
//                         <div class="col col-xl-10">
//                             <div class="card" style={{ borderRradius: "1rem" }}>
//                                 <div class="row g-0">
//                                     <div class="col-md-6 col-lg-5 d-none d-md-block">
//                                         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                                             alt="login form" class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" , height:"100% !important"}} />
//                                     </div>
//                                     <div class="col-md-6 col-lg-7 d-flex align-items-center h-100 overflow-scroll">
//                                         <div class="card-body p-4 p-lg-5 text-black">

//                                             <form>

//                                                 <div class="d-flex align-items-center mb-3 pb-1">
//                                                     <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
//                                                     <span class="h1 fw-bold mb-0">Logo</span>
//                                                 </div>

//                                                 <h5 class="fw-normal mt-4 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

//                                                 <div class="form-outline mb-4">
//                                                     <input 
//                                                         type="email" id="form2Example17" 
//                                                         class="form-control form-control-lg"
//                                                         // errorMessage: "It should be a valid email address!",
//                                                         label= "Email"
//                                                         required
                                                        
//                                                     />
//                                                     <label class="form-label" for="form2Example17">Email address</label>
//                                                 </div>

//                                                 <div class="form-outline mb-4">
//                                                     <input type="password" id="form2Example27" class="form-control form-control-lg" />
//                                                     <label class="form-label" for="form2Example27">Password</label>
//                                                 </div>

//                                                 <div class="pt-1 mb-4">
//                                                     <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
//                                                 </div>

//                                                 <a class="small text-muted" href="#!">Forgot password?</a>
//                                                 <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a
//                                                     style={{ color: "#393f81" }} onClick={()=> navigate('/register')}>Register here</a></p>
//                                                 <a href="#!" class="small text-muted">Terms of use.</a>
//                                                 <a href="#!" class="small text-muted">Privacy policy</a>
//                                             </form>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Login