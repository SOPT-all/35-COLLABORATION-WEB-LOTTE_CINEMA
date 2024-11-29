export type MovieInfoBarProps = {
  locs: string[];
  onDelete: (loc: string) => void;
  setSelectTitle: (value: string) => void;
  selectTitle: string;
};
