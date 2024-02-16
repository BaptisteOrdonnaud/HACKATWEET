import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';




function LastTweets() {

    const [nbLike, setNbLike] = useState(0);

    const handleClick = () => {
        setNbLike(nbLike + 1);
      };

    return (
        <div className={styles.lastTweets}>
            <div className={styles.infoUserTweet}>
                <img className={styles.userAvatarTweet} src="avatar.png" alt="Photo de profil de l'utilisateur" />
                <h3 className={styles.userFirstnameTweet}>John</h3>
                <h4 className={styles.userUsernameTweet}>@JohnCena</h4>
                <span className={styles.timeTweet}>a few seconds</span>
            </div>
            <p className={styles.tweetContent}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un <span className={styles.hashtag}>#imprimeur</span> anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>    
            <div>
                <FontAwesomeIcon onClick={() => handleClick()} icon={faHeart} className={styles.iconHeart}/> <span>{nbLike}</span>
                <FontAwesomeIcon icon={faTrashCan} className={styles.iconTrash} />
            </div>
        </div>
    );
}

export default LastTweets;
