import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getDetailRegions } from '@/apis/movie/getDetailRegions';

import { DetailRegionResponse } from '@/types/data';

export const useGetDetailRegionsQuery = (regionId: number): UseQueryResult<DetailRegionResponse, AxiosError> => {
  return useQuery({
    queryKey: ['detailRegion', regionId],
    queryFn: () => getDetailRegions(regionId),
  });
};
