import styles from '../styles/Home.module.css';

function Trends(props) {

    return (
        <div className={styles.trendInfo}>                  
            <h3 className={styles.trendTitle}>{props.name}</h3>
            <p className={styles.trendNumber}>{props.count} Tweets</p>                
        </div>
    );
}

export default Trends;
