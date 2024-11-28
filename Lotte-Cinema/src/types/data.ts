interface Region {
  id: number;
  name: string;
  theaterCount: number;
}

export interface RegionResponse {
  data: {
    regionList: Region[];
  };
}
