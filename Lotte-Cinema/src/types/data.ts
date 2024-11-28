
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
