import styles from './Description.module.css'

function Description({ children }) {
    return (
        <p className={styles.paragraph}>{children}</p>
    )
}

export default Description;