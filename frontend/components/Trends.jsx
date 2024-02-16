import styles from '../styles/Home.module.css';

function Trends() {
    return (
        <div>
            <h2 className={styles.tweetContainerTitle}>Trends</h2>
            <div className={styles.trends}>
                <div className={styles.trendsContent}>
                    <div className={styles.trend}>
                    <h3 className={styles.trendTitle}>#hackatweet</h3>
                    <p className={styles.trendNumber}>2 Tweets</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trends;
