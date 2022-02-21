import './Signup.css';
import GoogleLogin from 'react-google-login'

function Signup() {
  return (
    <div className="signup">
     <div className="sub-main">
       <div>
         <div>
           <h1>Signup</h1>
          <div>
          <GoogleLogin theme="dark"> 
          </GoogleLogin><p>
          Don't worry, you can anonymize yourself in the next step.</p>
          </div>
          <div className="or">
          OR
          </div>
            <h2 className="link">
            <a href="#">Login now</a>
            </h2>
            </div>
         </div>
       </div>
    </div>
  );
}

export default Signup;