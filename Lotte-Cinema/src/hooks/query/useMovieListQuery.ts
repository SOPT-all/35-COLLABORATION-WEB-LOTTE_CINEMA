import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getExclusiveList, getPopularList } from '@/apis/movie';

type MovieListType = {
  movieId: string;
  title: string;
  showtime: number;
  rating: string;
  releasedDate: string;
  imageUrl: string;
  reservedRate: string;
};

export const useMovieListQuery = (): UseQueryResult<MovieListType[], AxiosError> => {
  return useQuery({
    queryKey: ['movieList'],
    queryFn: async () => {
      const [res1, res2] = await Promise.all([getPopularList({ filter: '전체' }), getExclusiveList()]);
      const allList = [...res1, ...res2];
      const uniqueList = Array.from(new Map(allList.map((movie) => [movie.title, movie])).values());
      return uniqueList;
    },
  });
};
