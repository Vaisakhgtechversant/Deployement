import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginWrapper from '../Components/LoginWrapper';

const Login = ({pageTitle, apiurl}) => {console.log(apiurl);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Disable scroll only on this page
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(apiurl, {
        email,
        password
      });

      console.log(response.data);
      alert("Login Successful");
      navigate("/viewdata");
    } catch (error) {
      alert("Server not reachable");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col w-96 shadow-lg p-6 rounded-2xl bg-blue-400">
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block mb-3 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 rounded mb-4 bg-gray-700 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-3 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 rounded mb-4 bg-gray-700 text-white"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <Link
              to="/Register"
              className="text-white underline hover:opacity-80"
            >
              Need to Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
