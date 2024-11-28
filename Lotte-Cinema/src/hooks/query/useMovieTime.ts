import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import getMovieTime from '@/apis/movie/getMovieTime';

type MovieTimeType = {
  name: string;
  subname: string;
  description: string;
  timesList: {
    beginTime: string;
    endTime: string;
  }[];
};

export const useMovieTimeQuery = (theaterCount: number): UseQueryResult<MovieTimeType[], AxiosError> => {
  return useQuery({
    queryKey: ['movieTime', theaterCount],
    queryFn: async () => {
      const data = await getMovieTime({ theaterCount });

      console.log('Movie Time Data:', data);

      return data;
    },
  });
};
