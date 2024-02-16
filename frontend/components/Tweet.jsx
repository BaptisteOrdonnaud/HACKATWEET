import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';


function Tweet() {
    const [newTweet, setNewTweet] = useState();

    //NEW TWEET
    const handleTweet = () => {
        // useEffect(() => {
        //     fetch('http://localhost:3000/tweets', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ message: newTweet }),
        //     }).then(response => response.json())
        //         .then(data => {
        //             console.log('post nex tweet', data)
        //             if (data) {
        //                 setNewTweet('newTweet');
        //             }
        //         });
        // }, []);
    }

    return (
        <div className={styles.tweetContainer}>

            <input className={styles.tweetInput} type="text" placeholder="What's up?" maxLength="280" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />

            <div className={styles.btnContainer}>
                <span>0/280</span>
                <button className={styles.tweetBtn} onClick={() => handleTweet()}>Tweet</button>
            </div>
        </div>
    );
}

export default Tweet;
