import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.Header}>
            <img src='/logo.svg' alt='logo'/>
            <nav className={styles.navbar}>
                <a><span>Поиск фильмов</span></a>
                <a>
                    <span>Мои фильмы</span>
                    <span className={styles.number}>6</span>
                </a>
                <a>
                    <span>Войти</span>
                    <img src='./exit.svg'/>
                </a>
            </nav>
        </header>
    )
}

export default Header;