import './Input.css';

const PLACEHOLDER = 'Введите название';
function Input({ showIcon, placeholder, onChange }) {
    return (
        <div className='inputWrapper'>
            <img className={showIcon ? 'icon _show' : 'icon'} src='/search.svg' alt='search' />
            <input className='input' placeholder={placeholder} onChange={onChange} type="text"/>
        </div>

    )
}

export default Input;