import styles from './LoadingSpinner.module.scss';

function LoadingSpinner({
    text = true,
    textMessage = 'Loading Data...',
    customStyles = null,
}) {
    return (
        <div
            className={`${styles.wrapper} ${
                customStyles ? customStyles.customLoadingSpinnerWrapper : null
            }`}
        >
            <div
                className={`${styles.loadingSpinner} ${
                    customStyles ? customStyles.customLoadingSpinner : null
                }`}
            >
                <div
                    className={`${styles.animationWrapper} ${
                        customStyles ? customStyles.customLoadingSpinnerAnimation : null
                    }`}
                >
                    <div className={styles.loader}>
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                    </div>
                </div>
                {text && <div className={styles.text}>{textMessage}</div>}
            </div>
        </div>
    );
}

export default LoadingSpinner;
