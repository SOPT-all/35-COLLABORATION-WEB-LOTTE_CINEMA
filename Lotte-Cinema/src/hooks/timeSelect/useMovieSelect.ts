import { useEffect } from 'react';

import { MovieListType } from '@/types/data';

type HandleMovieSelect = (movie: MovieListType) => void;

const useMovieSelect = (
  selectTitle: string | undefined,
  data: MovieListType[] | undefined,
  handleMovieSelect: HandleMovieSelect,
) => {
  useEffect(() => {
    if (data) {
      const movieInfo = data.find((e) => e.title === selectTitle);
      if (movieInfo) {
        handleMovieSelect(movieInfo);
      }
    }
  }, [data, selectTitle]);

  return { data };
};

export default useMovieSelect;
