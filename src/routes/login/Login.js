import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";
import { login } from '../../api/Axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      if (response.data.token) {
        // 토큰 저장
        localStorage.setItem('accessToken', response.data.token);
        // 사용자 정보 저장 (필요한 경우)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        // 메인 페이지로 이동
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = () => {
    navigate('/register');
  };

  return (
    <div className={styles.loginBox}>
      <div className={styles.logo}>
        <div>SETD : SET THE DAY</div>
      </div>
      <form onSubmit={handleLogin} className={styles.input_container}>
        <div className={styles.input}>
          <div className={styles.input_title}>ID</div>
          <input 
            type="text" 
            className={styles.username} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <div className={styles.input_title}>PW</div>
          <input 
            type="password" 
            className={styles.password} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttonbox}>
          <button type="button" className={styles.signup_btn} onClick={handleSignup}>Sign Up</button>   
          <button type="submit" className={styles.login_btn}>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
