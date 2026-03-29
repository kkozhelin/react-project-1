import styles from './Input.module.css';

import cn from 'classnames';

const PLACEHOLDER = 'Введите название';
function Input({ showIcon, placeholder, onChange, value, name }) {
    return (
        <div className={styles.inputWrapper}>
            <img className={cn([
                styles.icon,
                {[styles['_show']]: showIcon}
            ])} src='/search.svg' alt='search' />
            <input
                value={value}
                className={styles.input}
                placeholder={placeholder}
                onChange={onChange}
                type="text"
                name={name}
            />
        </div>

    )
}

export default Input;