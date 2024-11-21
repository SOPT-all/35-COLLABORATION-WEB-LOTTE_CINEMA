import styled from '@emotion/styled';

import { IcTicketBlack32, ImgLogo } from '@/assets/svg';

const MainPageHeader = () => {
	const handleRefresh = () => {
		window.location.reload();
	};
	return (
		<S.Header>
			<S.LeftContainer>
				<S.MenuBox onClick={() => handleRefresh()}>
					<ImgLogo width="11.2rem" />
				</S.MenuBox>
			</S.LeftContainer>
			<S.RightContainer>
				<S.MenuBox onClick={() => handleRefresh()}>
					<IcTicketBlack32 width="3.2rem" />
				</S.MenuBox>
			</S.RightContainer>
		</S.Header>
	);
};

export default MainPageHeader;

const S = {
	Header: styled.header`
		background-color: ${({ theme }) => theme.colors.WHITE60};
		padding: 1rem 1.8rem;
		display: flex;
		justify-content: space-between;
		position: sticky;
		width: 100%;
	`,
	LeftContainer: styled.nav``,
	RightContainer: styled.nav``,

	LotteCinemaLogo: styled.span``,
	MenuBox: styled.li`
		height: 3.2rem;
		list-style: none;
		display: flex;
		align-items: center;
	`,
};
