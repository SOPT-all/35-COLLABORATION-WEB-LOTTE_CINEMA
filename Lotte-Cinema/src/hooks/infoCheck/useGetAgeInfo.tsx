import { IcAge1216, IcAge1916, IcAgeAll16 } from '@/assets/svg';

export const useGetAgeInfo = (age: string) => {
  switch (age) {
    case '12':
      return {
        icon: <IcAge1216 width="1.6rem" />,
        text: '만 12세 이상',
        color: '#E9B630',
        description: (
          <>
            만 12세 미만의 고객님 (영, 유아 포함)은 반드시 부모님 또는 성인 보호자의
            <br /> 동반시 관람이 가능합니다.연령 확인 불가 시 입장이 제한될 수 있습니다.
          </>
        ),
      };
    case '청불':
      return {
        icon: <IcAge1916 width="1.6rem" />,
        text: '만 19세 이상',
        color: '#D41017',
        description: (
          <>
            만 19세 미만의 고객님 (영, 유아 포함)은 반드시 부모님 또는 성인 보호자의
            <br /> 동반시 관람이 가능합니다.연령 확인 불가 시 입장이 제한될 수 있습니다.
          </>
        ),
      };
    case 'ALL':
      return {
        icon: <IcAgeAll16 width="1.6rem" />,
        text: '전체',
        color: '#229C56',
        description: (
          <>
            ALL 관람가: 본 콘텐츠는 연령에 관계없이 모든 고객님께서 자유롭게 관람하실
            <br /> 수 있습니다. 특별한 연령 제한은 없으며, 누구나 편안하게 즐기실 수 있습니다.
          </>
        ),
      };
    default:
      return {
        icon: <></>,
        text: '알 수 없음',
        color: '#999999',
      };
  }
};
