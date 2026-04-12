import styles from './CardMovie.module.css';

function CardMovie({ movie }) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imgContainer} style={{ backgroundImage: `url(${movie.img})` }}>
                <div className={styles.likeWrapper}>
                    <img src='./star.svg' alt='like' />
                    <span> { movie.like}</span>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.name}>{movie.name}</p>
                <button className={styles.likeBtn}>
                    <img src='./like.svg' alt='like' />
                    В избранное
                </button>
            </div>
        </div>
    )
}

export default CardMovie;