import styles from './Input.module.css';

import cn from 'classnames';

const PLACEHOLDER = 'Введите название';
export function Input({ showIcon, onChange, value, ...props }, ref) {
    return (
    <div className={styles.inputWrapper}>
        <img className={cn([
            styles.icon,
            {[styles['_show']]: showIcon}
        ])} src='/search.svg' alt='search' />
        <input
            value={value}
            ref={ref}
            className={styles.input}
            onChange={onChange}
            type="text"
            {...props}
        />
    </div>)
}

export default Input;