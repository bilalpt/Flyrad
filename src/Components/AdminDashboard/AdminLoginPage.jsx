import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to check if token has expired
  const isTokenExpired = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return true; // No token, considered expired
    }

    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload (Base64 decoding)
    const currentTime = Date.now() / 1000; // Current time in seconds
    const tokenExpirationTime = payload.exp; // Expiration time from the JWT token payload

    return tokenExpirationTime < currentTime;
  };

  // Check if the token has expired on page load
  useEffect(() => {
    if (isTokenExpired()) {
      localStorage.removeItem('authToken'); // Remove expired token
      navigate('/AdminLoginPage'); // Redirect to login page
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('https://flyrad-be.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, navigate to the dashboard page
        console.log('Login successful', data.token);
        localStorage.setItem('authToken', data.token); // Store token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Flyrad Admin Login</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-black rounded-md"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-black rounded-md"
              required
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
