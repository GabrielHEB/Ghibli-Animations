import React, { useContext } from 'react';
import FilmContext from '../context/FilmsContext';
import Header from '../components/Header';

function Home() {
  const filmContext = useContext(FilmContext);

  if (!filmContext) return <div>Loading...</div>;

  const { films, toggleFavorite } = filmContext;

  return (
    <div className="home-container">
      <Header />
      <h1>Films</h1>
      <div className="films-list">
        {films.map((film) => (
          <div key={ film.id } className="film-item">
            <h2>{film.title}</h2>
            <img src={ film.image } alt={ film.title } />
            <p>{film.description}</p>
            <button onClick={ () => toggleFavorite(film.id) }>
              {film.isFavorite ? 'Desfavoritar' : 'Favoritar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
