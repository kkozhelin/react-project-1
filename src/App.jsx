import './App.css'

import Button from './components/Button/Button.jsx';
import Title from './components/Title/Title.jsx';
import Description from "./components/Description/Description.jsx";
import Input from "./components/input/Input.jsx";

function App() {
    const saveChange = () => {
        console.log("saveChange");
    }

  return (
    <>
        <Title>Поиск</Title>
        <Button onClick={ saveChange }>Искать</Button>
        <Description>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Description>
        <Input placeholder='Введите название' showIcon={true}/>
    </>
  )
}

export default App
