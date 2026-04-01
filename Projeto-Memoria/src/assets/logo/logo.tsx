import styles from './Logo.module.css'

export const Logo = () => {
    return (
        <>
            <div className={styles.widthLogo}>
                <div className={styles.boxLogo}>
                    <div className={styles.logo}>
                        <div className={styles.a1}></div>
                        <div className={styles.a2}></div>
                        <div className={styles.a3}></div>
                        <div className={styles.a4}></div>
                        <div className={styles.a5}></div>
                    </div>
                    <div className={styles.nameLogo}>
                        DevMemory
                    </div>
                </div>
                <div className={styles.descriptionLogo}>
                    powered by B7Web
                </div>
            </div>
        </>
    )
} 