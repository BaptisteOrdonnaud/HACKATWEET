// import { set } from 'mongoose';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Tweet(props) {
    const [newTweet, setNewTweet] = useState('');
    const user = useSelector((state) => state.user.value);

    const addTweet = () => {
        props.addTweet(newTweet, user.idUser, user.firstname, user.username);
        setNewTweet("");
    }
    return (
        <div className={styles.tweetContainer}>

            <input className={styles.tweetInput} type="text" placeholder="What's up?" maxLength="280" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />

            <div className={styles.btnContainer}>
                <span>{newTweet.length}/280</span>
                <button className={styles.tweetBtn} onClick={() => addTweet()}>Tweet</button>
            </div>
        </div>
    );
}

export default Tweet;
