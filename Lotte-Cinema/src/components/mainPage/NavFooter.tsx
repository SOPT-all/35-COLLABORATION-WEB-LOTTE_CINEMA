import styled from '@emotion/styled';

import { IcEventBlack24, IcMenuBlack24, IcMyBlack24, IcTicketWhite24, IcTimeBlack24, ImgCircle56 } from '@/assets/svg';

// FooterNav 부분에서 바로 예매 파트 수정하기, -> 아이콘과 텍스트 원 위에서 세로축, 가로축 정렬되게 하기
// -> margin-bottom: 0.8rem 적용 안되는 문제 해결하기

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
					<S.ImgCircleContainer>
						<ImgCircle56 />
					</S.ImgCircleContainer>
					<S.MenuCenterContentContainer>
						<S.IconAndTextContainer>
							<IcTicketWhite24 height="3.4rem" />
							<S.MenuCenterText>바로예매</S.MenuCenterText>
						</S.IconAndTextContainer>
					</S.MenuCenterContentContainer>
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
		position: relative;
	`,

	MenuText: styled.li`
		list-style: none;
	`,

	ImgCircleContainer: styled.div``,
	MenuCenterContentContainer: styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: ${({ theme }) => theme.colors.WHITE100};
	`,
	IconAndTextContainer: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 1rem;
	`,
	StyledImgCircle56: styled(ImgCircle56)`
		width: 100%;
		position: absolute;
		z-index: -1;
	`,
	StyledIcTicketWhite24: styled(IcTicketWhite24)`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	`,
	MenuCenterText: styled.span`
		position: absolute;
	`,
};
