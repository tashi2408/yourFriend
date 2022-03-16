

import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/users/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };
  return (
    <div className="login">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login</h1>
            <div>
              {loginData ? (
                // <div>
                //   <h3>You logged in as {loginData.email}</h3>
                //   <button onClick={handleLogout}>Logout</button>
                // </div>
                <Redirect to='/dashboard' />
              ) : (
                <div>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                  ></GoogleLogin>
                  <p>Don't worry, you stay anonymous even with social login.</p>
                  <div className="or">OR</div>
                  <h2 className="link">
                    <a href="#">
                      <Link to="/Signup">Signup now</Link>
                    </a>
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;