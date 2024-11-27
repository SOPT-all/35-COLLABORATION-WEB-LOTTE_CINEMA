import {
  IcAge1216,
  IcAge1916,
  IcAgeAll16,
  ImgPosterLargeAmazon,
  ImgPosterLargeDeadline,
  ImgPosterLargeEvent,
  ImgPosterLargeGladiator,
} from '@/assets/svg';

export const items = [
  {
    image: ImgPosterLargeAmazon,
    ranking: 1,
    title: '데드라인',
    reservationRate: 18.7,
    starReview: 4.3,
    decisionDay: undefined,
    ageLimit: IcAge1216,
  },
  {
    image: ImgPosterLargeDeadline,
    ranking: 2,
    title: '글래디에이터',
    reservationRate: 18.7,
    starReview: 4.3,
    decisionDay: undefined,
    ageLimit: IcAge1916,
  },
  {
    image: ImgPosterLargeEvent,
    ranking: undefined,
    title: '헥토이노베이션',
    description: 'AD',
    ageLimit: undefined,
    decisionDay: undefined,
    starReview: undefined,
  },
  {
    image: ImgPosterLargeGladiator,
    ranking: 3,
    title: '아마존 활명수',
    reservationRate: 18.7,
    starReview: undefined,
    decisionDay: 13,
    ageLimit: IcAgeAll16,
  },
];
