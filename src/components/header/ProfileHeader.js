import { useState } from 'react';
import styles from "./ProfileHeader.module.css";
import { updateUserNickname } from '../../api/Axios';

const ProfileHeader = ({ initialNickname }) => {
  const [nickname, setNickname] = useState(initialNickname);

  const handleNickname = async () => {
    const newNickname = prompt("Enter your new nickname:");
    if (newNickname) {
      try {
        await updateUserNickname(newNickname);
        setNickname(newNickname);
        alert('Nickname updated successfully!');
      } catch (error) {
        console.error('Error updating nickname:', error);
        alert('Failed to update nickname. Please try again.');
      }
    }
  };
  
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>SETD : SET THE DAY</div>
        </div>
        <div className={styles.description}>
          <div className={styles.text}>SET YOUR DAY RIGHT NOW AND BE FREE</div>
          <div className={styles.nicknamebox} onClick={handleNickname}>{nickname}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
