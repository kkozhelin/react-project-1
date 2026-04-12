import styles from './Header.module.css';

import { useLocalstorage } from "../../hooks/use-localstorage.hook.js";
import {useEffect} from "react";

function Header() {
    const [storage, setStorage] = useLocalstorage('users');

    const logOut = () => {
        setStorage({});
    }

    return (
        <header className={styles.Header}>
            <img src='/logo.svg' alt='logo'/>
            <nav className={styles.navbar}>
                <a><span>Поиск фильмов</span></a>
                <a>
                    <span>Мои фильмы</span>
                    <span className={styles.number}>6</span>
                </a>
                {storage?.isLogined && (
                    <>
                        <a>
                            {storage.name}
                        </a>
                        <button onClick={logOut}>
                            <span>выйти</span>
                        </button>
                    </>
                )}

                {!storage?.isLogined && (
                    <button>
                        <span>Войти</span>
                        <img src='./exit.svg'/>
                    </button>
                )}
            </nav>
        </header>
    )
}

export default Header;