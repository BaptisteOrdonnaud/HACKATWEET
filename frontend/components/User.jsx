import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';

function User() {
  const router = useRouter()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLoginPage = () => {
    dispatch(logout())
    router.push('/')
  }
  return (
    <div className={styles.leftContainer}>
      <img className={styles.logoTwitter} src="Logo_Twitter.png" alt="Logo" />
      <div className={styles.profilContainer}>
        <div className={styles.userInformation}>
          <img className={styles.userAvatar} src="avatar.png" alt="Photo de profil de l'utilisateur" />
          <div>
            <h3 className={styles.userFirstname}>{user.firstname}</h3>
            <h4 className={styles.userUsername}>@{user.username}</h4>
          </div>
        </div>
        <button className={styles.logoutBtn} onClick={() => handleLoginPage()}>Logout</button>
      </div>
    </div>
  );
}

export default User;