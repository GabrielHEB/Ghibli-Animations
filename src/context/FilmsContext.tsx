import React, { createContext } from 'react';

type Film = {
  id: string;
  title: string;
  description: string;
  image: string;
  isFavorite?: boolean;
};

type FilmContextType = {
  films: Film[];
  toggleFavorite: (id: string) => void;
};

const FilmContext = createContext<FilmContextType | undefined>(undefined);

export default FilmContext;
