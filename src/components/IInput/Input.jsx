import './Input.css';

const PLACEHOLDER = 'Введите название';
function Input({ showIcon, placeholder, onChange, value, name }) {
    return (
        <div className='inputWrapper'>
            <img className={showIcon ? 'icon _show' : 'icon'} src='/search.svg' alt='search' />
            <input
                value={value}
                className='input'
                placeholder={placeholder}
                onChange={onChange}
                type="text"
                name={name}
            />
        </div>

    )
}

export default Input;