import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import getMovieTime from '@/apis/movie/getMovieTime';

import { MovieTimeType } from '@/types/data';

// theater의 갯수에 따라서, 상영관의 종류와 시간을 반환하는 쿼리
export const useMovieTimeQuery = (theaterCount: number): UseQueryResult<MovieTimeType[], AxiosError> => {
  return useQuery({
    queryKey: ['movieTime', theaterCount],
    queryFn: () => getMovieTime({ theaterCount }),
  });
};
