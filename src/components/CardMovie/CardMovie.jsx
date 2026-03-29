import './CardMovie.css';

function CardMovie({ movie }) {
    return (
        <div className='cardWrapper'>
            <div className='imgContainer' style={{ backgroundImage: `url(${movie.img})` }}>
                <div className='likeWrapper'>
                    <img src='./star.svg' alt='like' />
                    <span> { movie.like}</span>
                </div>
            </div>
            <div className='contentWrapper'>
                <p className='name'>{movie.name}</p>
                <button className='likeBtn'>
                    <img src='./like.svg' alt='like' />
                    В избранное
                </button>
            </div>
        </div>
    )
}

export default CardMovie;