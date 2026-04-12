import Input from "../IInput/Input.jsx";
import Button from "../Button/Button.jsx";
import {useRef, useState} from "react";
import styles from "../LoginForm/LoginForm.module.css";
import { useLocalstorage } from "../../hooks/use-localstorage.hook.js";

function LoginForm() {
    const inputRef = useRef();
    const [value, setValue] = useState("");
    const [storage, setStorage] = useLocalstorage('users');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const login = (e) => {
        e.preventDefault();

        setStorage({
            name: value,
            isLogined: true,
        })
    }

    return (
        <>
            <h2 className={styles.title}>Вход</h2>
            <form onSubmit={login} className={styles.form}>
                <Input
                    ref={inputRef}
                    value={value}
                    onChange={onChange}
                    placeholder='Введите название'
                    showIcon={true}
                    name='search'
                />
                <Button>Войти в профиль</Button>
            </form>
        </>
    )
}

export default LoginForm;