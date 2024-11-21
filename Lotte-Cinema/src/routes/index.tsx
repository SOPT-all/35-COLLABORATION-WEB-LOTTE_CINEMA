import { InfoCheck, MainPage, SeatReservation, TheaterList, TimeSelect } from '@/pages/index';

import { RouteType } from '@/types/routeType';

const router: RouteType[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/theaters', // 상영관 선택
    element: <TheaterList />,
  },
  {
    path: '/tickets', // 시간 선택
    element: <TimeSelect />,
  },
  {
    path: '/tickets/info', // 정보 확인
    element: <InfoCheck />,
  },
  {
    path: '/tickets/seats', // 좌석예매
    element: <SeatReservation />,
  },
];

export default router;
