import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img src='/logo.svg' alt='logo'/>
            <nav className='navbar'>
                <a><span>Поиск фильмов</span></a>
                <a>
                    <span>Мои фильмы</span>
                    <span className='number'>6</span>
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