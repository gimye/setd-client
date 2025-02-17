import styles from "./Register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/Axios";

const Register = () => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
   e.preventDefault();

   if (password !== pwcheck) {
     alert("비밀번호가 일치하지 않습니다.");
     return;
   }

   try {
     const response = await signup({
       username,
       password,
       nickname
     });
     alert("회원가입에 성공했습니다!");
     navigate('/login');
   } catch (error) {
     alert(`회원가입에 실패했습니다: ${error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'}`);
   }
 };

  return (
    <div className={styles.registerBox}>
      <div className={styles.logo}>
        <div>SETD : SET THE DAY</div>
      </div>
      <form className={styles.input_container} onSubmit={handleSignup}>
        <div className={styles.input}>
          <div className={styles.input_title}>ID</div>
          <input 
            type="text" 
            className={styles.username} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.input_title}>Nickname</div>
          <input 
            type="text" 
            className={styles.username} 
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.input_title}>PW</div>
          <input 
            type="password" 
            className={styles.password} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.input_title}>PW Check</div>
          <input 
            type="password" 
            className={styles.password} 
            value={pwcheck}
            onChange={(e) => setPwcheck(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttonbox}>
          <button type="submit" className={styles.signup_btn}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
