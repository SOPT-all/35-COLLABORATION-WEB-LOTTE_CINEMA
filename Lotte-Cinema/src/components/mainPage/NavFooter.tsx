import styled from '@emotion/styled';

import { BtnCircle, IcEventBlack24, IcMenuBlack24, IcMyBlack24, IcTimeBlack24 } from '@/assets/svg';

// Menu 순서 IcEventBlack24 / IcTimeBlack24 / BtnCircle / IcMyBlack24 / IcMenuBlack24
const NavFooter = () => {
	return (
		<S.NavContainer>
			<S.MenuBox>
				<IcEventBlack24 width="2.4rem" height="2.4rem" />
				<S.MenuText>이벤트</S.MenuText>
			</S.MenuBox>
			<S.MenuBox>
				<IcTimeBlack24 width="2.4rem" height="2.4rem" />
				<S.MenuText>상영시간표</S.MenuText>
			</S.MenuBox>
			<S.MenuBox>
				<S.MenuCenter>
					{/* 그냥 이것도 텍스트 + 아이콘 + 원 조합으로 바꾸기 */}
					<BtnCircle />
				</S.MenuCenter>
			</S.MenuBox>
			<S.MenuBox>
				<IcMyBlack24 width="2.4rem" height="2.4rem" />
				<S.MenuText>마이</S.MenuText>
			</S.MenuBox>
			<S.MenuBox>
				<IcMenuBlack24 width="2.4rem" height="2.4rem" />
				<S.MenuText>메뉴</S.MenuText>
			</S.MenuBox>
		</S.NavContainer>
	);
};

export default NavFooter;

const S = {
	NavContainer: styled.div`
		width: 100%;
		height: 5.4rem;
		display: flex;
		justify-content: space-around;
	`,
	MenuBox: styled.div`
		width: 6.4rem;
		height: 6.4rem; // height도 지정해주기
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		${({ theme }) => theme.typographies.n_caption02_med};
	`,
	MenuCenter: styled.div`
		width: 100%;
		height: 100%;
	`,

	MenuText: styled.li`
		list-style: none;
	`,
};
