import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Trends from './Trends';
import Tweet from './Tweet'

function Home() {
  return (
    <div className={styles.homeContainer}>

    {/* PARTIE GAUCHE */}

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


  {/* PARTIE MILIEU */}


      <div className={styles.middleContainer}>
          <div className={styles.tweetCompoContainer}>
            <h2 className={styles.tweetContainerTitle}>Home</h2>
          <Tweet />

          </div>
        {/* <LastTweets /> */}
      </div>
      


        {/* PARTIE DROITE */}
      
      <div className={styles.rightContainer}>
       <Trends />
      </div>
    </div>
  );
}

export default Home;
