import styles from './Search.module.css';

import { useState} from "react";

import Input from "../IInput/Input.jsx";
import Button from "../Button/Button.jsx";

function Search() {
    const [value, setValue] = useState("");

    const saveChange = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("value", value);
    }

    const inputChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <form onSubmit={saveChange} className={styles.Search}>
            <Input
                placeholder='Введите название'
                value={value}
                onChange={inputChange}
                showIcon={true}
                name='search'
            />
            <Button>Искать</Button>
        </form>
    )
}

export default Search;