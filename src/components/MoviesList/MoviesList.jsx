import styles from './MoviesList.module.css';

import { MOVIES } from "../../constants/movies.js";

import CardMovie from "../CardMovie/CardMovie.jsx";

function MoviesList() {
    const moviesList = MOVIES.map((movie, idx) => {
        return <CardMovie movie={movie} key={`${idx}-${movie.name}`}/>
    });

    return (
        <div className={styles.MoviesList}>
            {moviesList}
        </div>
    )
}

export default MoviesList;