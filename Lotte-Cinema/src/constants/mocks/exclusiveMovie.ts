import {
  IcAge1216,
  IcAge1916,
  IcAgeAll16,
  ImgPosterLargeAmazon,
  ImgPosterLargeDeadline,
  ImgPosterLargeEvent,
  ImgPosterLargeGladiator,
} from '@/assets/svg';

// items 배열 선언 및 타입 지정
export const exclusiveItems = [
  {
    image: ImgPosterLargeAmazon,
    title: '데드라인',
    ageLimit: IcAge1216,
  },
  {
    image: ImgPosterLargeDeadline,
    title: '글래디에이터',
    ageLimit: IcAge1916,
  },
  {
    image: ImgPosterLargeEvent,
    title: '글래디에이터',
    ageLimit: IcAge1916,
  },
  {
    image: ImgPosterLargeGladiator,
    title: '아마존 활명수',
    ageLimit: IcAgeAll16,
  },
];
