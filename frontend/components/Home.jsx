import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Trends from './Trends';
import Tweet from './Tweet'
import User from './User';

function Home() {
  return (
    <div className={styles.homeContainer}>

    {/* PARTIE GAUCHE */}

    <User/>

    {/* PARTIE MILIEU */}


      <div className={styles.middleContainer}>
          <div className={styles.tweetCompoContainer}>
            <h2 className={styles.tweetContainerTitle}>Home</h2>
          <Tweet />
         <LastTweets />

          </div>
      </div>
      


        {/* PARTIE DROITE */}
      
      <div className={styles.rightContainer}>
       <Trends />
      </div>
    </div>
  );
}

export default Home;
