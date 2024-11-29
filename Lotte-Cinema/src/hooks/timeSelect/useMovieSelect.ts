import { useEffect, useState } from 'react';

import { useMovieListQuery } from '../query';

const useMovieSelect = (selectTitle: string) => {
  const [selectedMovie, setSelectedMovie] = useState({ title: '', rating: '', showtime: 0 });

  const { data } = useMovieListQuery();

  useEffect(() => {
    if (data) {
      const movieInfo = data.find((e) => e.title === selectTitle);
      if (movieInfo) {
        setSelectedMovie(movieInfo);
      }
    }
  }, [data, selectTitle]);

  return { selectedMovie, data };
};

export default useMovieSelect;
