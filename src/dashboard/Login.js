import React from 'react';
import './Login.css';
import GoogleSignup from 'react-google-login'

function Login() {
  return (
    <div className="login">
     <div className="sub-main">
       <div>
         <div>
           <h1>Login</h1>
          <div>
          <GoogleSignup theme="dark">
          </GoogleSignup><p>
          Don't worry, you stay anonymous even with social login.
          </p>
          </div>
          <div className="or">
          OR
          </div>
            <h2 className="link">
              <a href="#">Signup now</a>
            </h2>
            </div>
         </div>
       </div>
    </div>
  );
}

export default Login;
