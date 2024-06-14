// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app">
      <div className="auth-container">
        {isLogin ? <Login /> : <SignUp />}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default App;
