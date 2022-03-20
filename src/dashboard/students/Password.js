import './Password.css';

function Password() {
  return (
    <div className="password">
      <div className="password-change">
        <div className="pc">
          <div>
            <h1>Change Password</h1>
            <div>
              <input
                type="text"
                placeholder="Current Password"
                className="change"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="New Password"
                className="change"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Confirm Password"
                className="change"
              />
            </div>
            <div className="submit">
              <a className="button">Submit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
