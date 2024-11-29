import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getExclusiveList, getPopularList } from '@/apis/movie';

import { MovieListType } from '@/types/data';

// 인기 상영작과 단독 상영작을 모두 포함한 전체 영화 리스트를 반환하는 쿼리
export const useMovieListQuery = (): UseQueryResult<MovieListType[], AxiosError> => {
  return useQuery({
    queryKey: ['movieList'],
    queryFn: async () => {
      const [popularList, exclusiveList] = await Promise.all([getPopularList({ filter: '전체' }), getExclusiveList()]);
      const allList = Array.from(
        new Map([...popularList, ...exclusiveList].map((movie) => [movie.title, movie])).values(),
      );
      return allList;
    },
  });
};
