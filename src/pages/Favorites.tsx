import React, { useContext } from 'react';
import FilmContext from '../context/FilmsContext';
import Header from '../components/Header';

function Favorites() {
  const filmContext = useContext(FilmContext);

  if (!filmContext) return <div>Loading...</div>;

  const { films, toggleFavorite } = filmContext;

  const favoriteFilms = films.filter((film) => film.isFavorite);

  const backgroundStyle = {
    backgroundImage: "url('src/imagem/home-img.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={ backgroundStyle }>
      <Header />
      <h1 style={ { color: 'white' } }>Favorites</h1>
      <div>
        {favoriteFilms.length > 0 ? (
          favoriteFilms.map((film) => (
            <div key={ film.id }>
              <h2>{film.title}</h2>
              <img src={ film.image } alt={ film.title } />
              <p>{film.description}</p>
              <button onClick={ () => toggleFavorite(film.id) }>
                Remover dos Favoritos
              </button>
            </div>
          ))
        ) : (
          <p style={ { color: 'white' } }>Nenhum filme favorito selecionado.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
