import styles from '../styles/Login.module.css';
import { useDispatch } from 'react-redux';
import { login, logout } from '../reducers/user';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'

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
    const [signInFirstName, setSignInFirstName] = useState('');


    const dispatch = useDispatch();
    const router = useRouter()


    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstName, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ firstname: signUpFirstName, username: signUpUsername, token: data.token }));
                    setSignUpUsername('');
                    setSignUpPassword('');
                    setSignUpFirstName('');
                    setIsModalVisible(false)
                    setIsClickSignUp(false)
                    router.push('home')
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
                console.log('token', data)
                if (data.result) {
                    dispatch(login({ firstname: data.user.firstname, username: signInUsername, token: data.user.token, idUser: data.user._id }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setIsModalVisible(false)
                    router.push('home')
                }
            });
    };
    let contentView = '';
    if (isClickSignUp) {
        contentView =
            <div className={styles.sign}>
                <div className={styles.containerLogo}>
                    <FontAwesomeIcon onClick={() => closeModal()} icon={faX} style={{ color: "#ffffff", cursor: 'pointer' }} />
                </div>
                <div className={styles.containerIcon}>
                    <img className={styles.logoRightModal} src="Logo_Twitter.png" alt="Logo" />
                </div>
                <div>
                    <h2 className={styles.loginTitle}>Create your Hackatweet account</h2>
                </div>
                <div className={styles.containerInput}>
                    <input className={styles.input} type="text" placeholder="FirstName" id="signUpFirstName" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} />
                    <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                    <input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                    <button className={styles.btnModalSignIn} id="signUp" onClick={() => handleRegister()}>Sign up</button>
                </div>
            </div>
    }
    if (isClickSignIn) {
        contentView =
            <div className={styles.sign}>
                <div className={styles.containerLogo}>
                    <FontAwesomeIcon onClick={() => closeModal()} icon={faX} style={{ color: "#ffffff", }} />
                </div>
                <div className={styles.containerIcon}>
                    <img className={styles.logoRightModal} src="Logo_Twitter.png" alt="Logo" />
                </div>
                <div>
                    <h2 className={styles.loginTitle}>Create your Hackatweet account</h2>
                </div>
                <div className={styles.containerInput}>
                    <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                    <input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                    <button className={styles.btnModalSignIn} id="signUp" onClick={() => handleConnection()}>Sign in</button>
                </div>
            </div>
    }


    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false)
        setIsClickSignIn(false)
        setIsClickSignUp(false)
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
