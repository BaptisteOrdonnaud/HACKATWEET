import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Trends from './Trends';
import Tweet from './Tweet'

function Home() {
  return (
    <div>
      <LastTweets />
      <Tweet />
      <Trends />
    </div>
  );
}

export default Home;
