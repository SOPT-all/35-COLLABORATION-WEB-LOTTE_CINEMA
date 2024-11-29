import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MovieListType } from '@/types/data';

import { useMovieListQuery } from '../query';
import useCalendar from './useCalendar';

const useDateLocSelect = (today: Date) => {
  const [selectedMovie, setSelectedMovie] = useState({ title: '', rating: '', showtime: 0 });
  const [selectTitle, setSelectTitle] = useState('청설');

  const { data } = useMovieListQuery();
  const location = useLocation();
  const [locs, setLocs] = useState<string[]>(location.state || []);

  const { selectDate, handleBtnClick } = useCalendar(today);

  const handleRemoveLoc = (loctoDelete: string) => {
    if (locs.length > 1) {
      setLocs((prev) => prev.filter((loc) => loc !== loctoDelete));
    } else {
      alert('하나 이상의 상영권을 선택해주세요!');
    }
  };

  const handleMovieSelect = (movieInfo: MovieListType) => {
    setSelectedMovie(movieInfo);
  };
  return {
    selectDate,
    handleBtnClick,
    selectTitle,
    setSelectTitle,
    locs,
    setLocs,
    handleRemoveLoc,
    data,
    selectedMovie,
    setSelectedMovie,
    handleMovieSelect,
  };
};

export default useDateLocSelect;
