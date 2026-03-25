import './App.css'

import Button from './components/Button/Button.jsx';
import Title from './components/Title/Title.jsx';
import Description from "./components/Description/Description.jsx";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import MoviesList from "./components/MoviesList/MoviesList.jsx";

function App() {
  return (
    <>
        <Header/>
        <Title>Поиск</Title>
        <Description>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Description>
        <Search/>
        <MoviesList/>
    </>
  )
}

export default App
