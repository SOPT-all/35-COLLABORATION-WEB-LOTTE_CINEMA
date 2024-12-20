const END_POINTS = {
  POPULAR_LIST: (filter: string) => `/api/v1/movie/popular?filter=${filter}`,
  EXLUSIVE_LIST: `/api/v1/movie/only`,
  REGION: `/api/v1/region`,
  REGION_THEATER: (regionId: number) => `/api/v1/theater?regionId=${regionId}`,
  SCREEN_TIME: (theaterCount: number) => `/api/v1/screen/${theaterCount}`,
  SEAT_INFO: (movieId: number) => `/api/v1/seats?movieId=${movieId}`,
  RESERVE: `/api/v1/seats/reserve`,
};

export default END_POINTS;
