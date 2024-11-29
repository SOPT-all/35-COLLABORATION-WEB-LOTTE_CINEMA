export interface SeatListType {
  data: number[];
}

export interface Region {
  id: number;
  name: string;
  theaterCount: number;
}

export interface RegionResponse {
  data: {
    regionList: Region[];
  };
}

export interface DetailRegionResponse {
  data: {
    theaterList: string[];
  };
}

export interface MovieTimeType {
  name: string;
  subname: string;
  description: string;
  timesList: {
    beginTime: string;
    endTime: string;
  }[];
}

export interface MovieListType {
  movieId: string;
  title: string;
  showtime: number;
  rating: string;
  releasedDate: string;
  imageUrl: string;
  reservedRate: string;
}
