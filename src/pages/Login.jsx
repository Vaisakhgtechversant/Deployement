import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginWrapper from '../Components/LoginWrapper';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const Login = ({ pageTitle, apiurl }) => {
  console.log(apiurl);

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

  const handleGoogleLogin = async () => {
    try {
      // Trigger Firebase Google Sign-In popup
      const result = await signInWithPopup(auth, googleProvider);
      // Get the ID token from Firebase
      const token = await result.user.getIdToken();

      // Send token to our Node.js backend to verify and create session
      const response = await axios.post('http://localhost:8000/api/google-login', {
        idToken: token
      });

      console.log(response.data);
      alert("Google SSO Successful");
      navigate("/viewdata");
    } catch (error) {
      console.error("Google SSO Error:", error);
      alert("Google Sign-In failed or server not reachable");
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
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-white text-gray-800 font-semibold py-2 px-4 shadow rounded hover:bg-gray-100 transition-colors w-full flex items-center justify-center gap-2"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="w-5 h-5" />
              Sign in with Google
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
