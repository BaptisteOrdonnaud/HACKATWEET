import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Trends from './Trends';
import User from './User';
import { useEffect, useState } from 'react';
import Tweet from './Tweet';

function Home() {
  const [allTweets, setAllTweets] = useState([]);
  const [allTrends, setAllTrends] = useState([]);

  //ALL TWEETS

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(tweet => {
        setAllTweets(tweet.tweets);
      });
  }, []);

  const tweets = allTweets.map((data, i) => {
    return <LastTweets key={i} firstname={data.idUser.firstname} username={data.idUser.username} date={data.date} message={data.message} like={data.like} />;
  });


  return (
    <div className={styles.homeContainer}>

      {/* PARTIE GAUCHE */}

      <User />

      {/* PARTIE MILIEU */}


      <div className={styles.middleContainer}>
        <div className={styles.tweetCompoContainer}>
          <h2 className={styles.tweetContainerTitle}>Home</h2>
          <Tweet />

          {tweets}

        </div>
      </div>


      {/* PARTIE DROITE */}

      <div className={styles.rightContainer}>
        <h2 className={styles.tweetContainerTitle}>Trends</h2>
          <div className={styles.trends}>        
            <div className={styles.trendsContent}>
              <Trends />
              <Trends />
              <Trends />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
