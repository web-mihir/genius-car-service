import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();
   const goLogin = () => {
      navigate('/login');
   }
   return (
      <div>
         <div className="container">
            <h2 className='py-5 text-center'>Register Here</h2>
            <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                     </Form.Group>

                     <Form.Group className="text-center mb-4">
                        <Button variant="primary" type="submit">
                           Register
                        </Button>
                     </Form.Group>
                     
                  </Form>

                  <p className="text-center">
                        Already Logged In ? 
                        <span style={{ cursor: "pointer" }} className='text-danger ms-2' onClick={goLogin}>Go to Login</span>
                     </p>

                  <div className="third_party_auth p-4 mt-4">
                     <h4 className="py-3">Sign Up with</h4>
                     <div className="third_party_auth_btn d-flex align-items-center justify-content-evenly">
                        <Button>Google</Button>
                        <Button>facebook</Button>
                        <Button>Github</Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;