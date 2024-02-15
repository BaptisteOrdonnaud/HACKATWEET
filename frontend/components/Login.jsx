import styles from '../styles/Login.module.css';
import { useDispatch } from 'react-redux';
import { login, logout } from '../reducers/user';

import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setLoginElement('#yourAppElement');

function Login() {

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpFirstName, setSignUpFirstName] = useState('');

    const dispatch = useDispatch();

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstName, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signUpUsername, token: data.token }));
                    setSignUpUsername('');
                    setSignUpPassword('');
                    setIsModalVisible(false)
                }
            });
    };


    return (
        <div>
            <main className={styles.main}>
                <div>
                    <img className={styles.logoRight} src="Logo_Twitter.png" alt="Logo" />
                    <div>
                        <h2>Create your Hackatweet account</h2>
                    </div>
                    <div>
                        <input type="text" placeholder="FirstName" id="signUpFirstName" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} />
                        <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                        <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                        <button id="signUp" onClick={() => handleRegister()}>Sign up</button>
                    </div>
                </div>
                <div className={styles.leftContainer}>
                    <img className={styles.logoLeft} src="Logo_Twitter.png" alt="Logo" />
                </div>
                <div className={styles.rightContainer}>
                    <div>
                        <img className={styles.logoRight} src="Logo_Twitter.png" alt="Logo" />
                    </div>
                    <div>
                        <h1 className={styles.title}>
                            See what's <br />happening
                        </h1>
                        <h2 className={styles.join}>Join Hackatweet today</h2>
                    </div>
                    <div className={styles.containerButton}>
                        <button className={styles.btnSignUp}>Sign up</button>
                        <p>Already have an account?</p>
                        <button className={styles.btnSignIn}>Sign in</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
