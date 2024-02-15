import styles from '../styles/Home.module.css';

function User() {
    return (
        <div className={styles.leftContainer}>
          <img className={styles.logoTwitter} src="Logo_Twitter.png" alt="Logo" />
      <div className={styles.profilContainer}>
          <div className={styles.userInformation}>
              <img className={styles.userAvatar} src="avatar.png" alt="Photo de profil de l'utilisateur" />
            <div>
              <h3 className={styles.userFirstname}>John</h3>
              <h4 className={styles.userUsername}>@JohnCena</h4>
            </div>
          </div>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </div>
    );
}

export default User;