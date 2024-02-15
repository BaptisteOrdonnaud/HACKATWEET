import styles from '../styles/Login.module.css';
import { useDispatch } from 'react-redux';
import { login, logout } from '../reducers/user';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Modal from 'react-modal';
import React from 'react';


function Login() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [isClickSignUp, setIsClickSignUp] = useState(false);
    const [isClickSignIn, setIsClickSignIn] = useState(false);

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpFirstName, setSignUpFirstName] = useState('');

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

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
                    setSignUpFirstName('');
                    setIsModalVisible(false)
                    setIsClickSignUp(false)
                }
            });
    };

    const handleConnection = () => {

        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setIsModalVisible(false)
                }
            });
    };
    let contentView = '';
    if (isClickSignUp) {
        contentView =
            <div className={styles.sign}>
                <FontAwesomeIcon onClick={() => closeModal()} icon={faX} style={{ color: "#ffffff", }} />
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
    }
    if (isClickSignIn) {
        contentView =
            <div className={styles.sign}>
                <FontAwesomeIcon onClick={() => closeModal()} icon={faX} style={{ color: "#ffffff", }} />
                <img className={styles.logoRight} src="Logo_Twitter.png" alt="Logo" />
                <div>
                    <h2>Create your Hackatweet account</h2>
                </div>
                <div>
                    <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                    <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                    <button id="signUp" onClick={() => handleConnection()}>Sign in</button>
                </div>
            </div>
    }


    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false)
    }

    const handleLoginUp = () => {
        setIsClickSignUp(true)
        setIsModalVisible(true)

    }
    const handleLoginIn = () => {
        setIsClickSignIn(true)
        setIsModalVisible(true)
    }
    return (
        <div>
            <main className={styles.main}>
                <Modal
                    isOpen={isModalVisible}
                    className={styles.modalSignUp}
                >
                    {contentView}
                </Modal>

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
                        <button onClick={() => handleLoginUp()} className={styles.btnSignUp}>Sign up</button>
                        <p>Already have an account?</p>
                        <button onClick={() => handleLoginIn()} className={styles.btnSignIn}>Sign in</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
