import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function Login() {
  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform authentication logic, such as validating username and password
    // For simplicity, I'll just check if the username and password match a predefined value
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true);
      // Redirect to the dashboard
      // history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  // Rest of the component code...


  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
