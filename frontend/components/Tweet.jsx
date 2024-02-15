import styles from '../styles/Home.module.css';

function Tweet() {
    return (
        <div className={styles.tweetContainer}>
        
                 <input className={styles.tweetInput} type="text" placeholder="What's up?"  maxlength="280" />

            <div className={styles.btnContainer}>
                <span>0/280</span>
                <button className={styles.tweetBtn}>Tweet</button>
            </div>
        </div>
    );
}

export default Tweet;
