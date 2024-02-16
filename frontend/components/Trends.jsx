import styles from '../styles/Home.module.css';

function Trends() {
    return (
        <div className={styles.trendInfo}>                  
            <h3 className={styles.trendTitle}>#hackatweet</h3>
            <p className={styles.trendNumber}>2 Tweets</p>                
        </div>
    );
}

export default Trends;
