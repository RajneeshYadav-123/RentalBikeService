import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}ap1/v1/auth/login`, {
        email,
        password
      });
      console.log("Login successful:", response.data);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-200">
      <div className="bg-blue-200 h-[400px] w-[400px] border-2 border-sky-400 rounded-md flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full px-6">
          <h2 className="text-center text-black text-2xl mb-4">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-green-400 h-10 text-black px-4 rounded-lg"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="bg-red-700 h-10 px-4 rounded-lg text-white"
              placeholder="Password"
              required
            />
            <button type="submit" className="bg-slate-800 text-white rounded-lg h-10">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
