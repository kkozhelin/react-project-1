import './App.css'

import Button from './components/Button/Button.jsx';
import Title from './components/Title/Title.jsx';
import Description from "./components/Description/Description.jsx";

function App() {

  return (
    <>
        <Title>Поиск</Title>
        <Button>Искать</Button>
        <Description>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Description>
    </>
  )
}

export default App
