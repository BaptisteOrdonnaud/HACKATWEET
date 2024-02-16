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
                    <div className={styles.trend}>
                    <h3 className={styles.trendTitle}>#first</h3>
                    <p className={styles.trendNumber}>2 Tweet</p>
                    </div>
                    <div className={styles.trend}>
                    <h3 className={styles.trendTitle}>#prout</h3>
                    <p className={styles.trendNumber}>100 tweets</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trends;
