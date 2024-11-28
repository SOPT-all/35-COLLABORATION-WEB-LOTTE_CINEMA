import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getRegions } from '@/apis/movie/getRegions';

import { RegionResponse } from '@/types/data';

export const useGetRegionsQuery = (): UseQueryResult<RegionResponse, AxiosError> => {
  return useQuery({
    queryKey: ['region'],
    queryFn: getRegions,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
