export interface MovieInfoBarProps {
  locs: string[];
  onDelete: (loc: string) => void;
  setSelectTitle: (value: string) => void;
  selectTitle: string;
}

export interface CalendarTileProperties {
  date: Date;
  view: 'month' | 'year' | 'decade' | 'century';
}

export interface CalendarPropType {
  handleBtnClick: (date: Date) => void;
  selectDate: Date;
}

export interface TimeInfoPropType {
  locs: string[];
  selectTitle: string;
  selectDate: Date;
}

export type TimeTablePropType = TimeInfoPropType & {
  num: number;
  info: {
    name: string;
    subname: string;
    description: string;
    timesList: {
      beginTime: string;
      endTime: string;
    }[];
  };
};

export type TimeCardPropType = {
  timesList: {
    beginTime: string;
    endTime: string;
  };
  theater: string;
  subTheaterInfo: string;
  selectTitle: string;
  selectDate: Date;
};
