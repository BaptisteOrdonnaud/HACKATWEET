import styles from '../styles/Login.module.css';

function Login() {
    return (
        <div>
            <main className={styles.main}>
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
