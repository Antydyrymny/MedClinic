import styles from './Loader.module.scss';

function Loader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.animationWrapper}>
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
            <div className={styles.text}>Loading Data</div>
        </div>
    );
}

export default Loader;
