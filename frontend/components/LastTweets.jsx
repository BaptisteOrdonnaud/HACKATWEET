import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import moment from 'moment';


function LastTweets(props) {

    const [nbLike, setNbLike] = useState(0);

    const handleClick = () => {
        setNbLike(nbLike + 1);
    };
    const date = moment(props.date).fromNow();

    const hashtagBleu = (content) => {
        return content.split(' ').map((word, index) => {
            if (word.startsWith('#')) {
                return <span key={index} className={styles.hashtagColor}>{word} </span>;
            } else {
                return word + ' ';
            }
        });
    };

    const handleDelete = () => {

    }

    return (
        <div className={styles.lastTweets}>
            <div className={styles.infoUserTweet}>
                <img className={styles.userAvatarTweet} src="avatar.png" alt="Photo de profil de l'utilisateur" />
                <h3 className={styles.userFirstnameTweet}>{props.firstname}</h3>
                <h4 className={styles.userUsernameTweet}>{props.username}</h4>
                <span className={styles.timeTweet}>{date}</span>
            </div>
            <p className={styles.tweetContent}>{hashtagBleu(props.message)} </p>
            <div>
                <FontAwesomeIcon onClick={() => handleClick()} icon={faHeart} className={styles.iconHeart} /> <span>{nbLike}</span>
                <FontAwesomeIcon icon={faTrashCan} className={styles.iconTrash} onClick={() => handleDelete()} />
            </div>
        </div>
    );
}

export default LastTweets;
