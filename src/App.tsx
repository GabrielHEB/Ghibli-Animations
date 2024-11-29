// Importando React, useEffect e useState do pacote 'react'
import React, { useEffect, useState } from 'react';

// Importando Route e Routes do pacote 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

// Importando os componentes 'Home' e 'Favorites' das respectivas páginas
import Home from './pages/Home';
import Favorites from './pages/Favorites';

// Importando o contexto 'FilmContext' do arquivo './context/FilmsContext'
import FilmContext from './context/FilmsContext';

// Definindo a interface para os filmes
interface Film {
  id: string;
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

// Definindo o componente principal 'App'
function App() {
  // Definindo o estado para os filmes com a interface Film
  const [films, setFilms] = useState<Film[]>([]);

  // Efeito para carregar os dados dos filmes ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      // Fazendo requisição para obter os dados dos filmes
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');

      // Convertendo a resposta para o formato JSON e tipando-a como um array de filmes
      const movies: Film[] = await response.json();

      // Adicionando a propriedade 'isFavorite' a cada filme obtido
      const moviesWithFavorite = movies.map((movie: Film) => ({
        ...movie, isFavorite: false,
      }));

      // Atualizando o estado dos filmes com os dados obtidos
      setFilms(moviesWithFavorite);
    };

    // Chamando a função fetchData para carregar os dados dos filmes
    fetchData();
  }, []); // O segundo argumento do useEffect é um array vazio, garantindo que este efeito só seja executado uma vez

  // Função para alternar o estado de favorito de um filme, recebendo o 'id' do filme como parâmetro
  const toggleFavorite = (id: string) => {
    // Atualizando o estado dos filmes, mapeando todos os filmes e alternando o estado de favorito do filme com o 'id' correspondente
    const updatedFilms = films.map((film: Film) => (
      film.id === id ? { ...film, isFavorite: !film.isFavorite } : film
    ));

    // Atualizando o estado dos filmes com os filmes atualizados
    setFilms(updatedFilms);
  };

  // Renderização do componente 'App'
  return (
    // Utilizando o contexto 'FilmContext' para fornecer os dados dos filmes e a função para alternar o estado de favorito
    <FilmContext.Provider value={ { films, toggleFavorite } }>
      {/* Utilizando o componente Routes para gerenciar as rotas */}
      <Routes>
        {/* Rota para a página inicial, utilizando o componente 'Home' */}
        <Route path="/" element={ <Home /> } />

        {/* Rota para a página de favoritos, utilizando o componente 'Favorites' */}
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </FilmContext.Provider>
  );
}

// Exportando o componente 'App' como padrão
export default App;
