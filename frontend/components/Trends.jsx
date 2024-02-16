import styles from '../styles/Home.module.css';

function Trends(props) {

    const tweet = props.count <= 1 ? 'Tweet' : 'Tweets';

    return (
        <div className={styles.trendInfo}>                  
            <h3 className={styles.trendTitle}>{props.name}</h3>
            <p className={styles.trendNumber}>{props.count} {tweet}</p>                
        </div>
    );
}

export default Trends;
