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
		height: 5.2rem;
		display: flex;
		justify-content: space-between;
		position: fixed;
		z-index: 1;
	`,
	LeftContainer: styled.nav`
		margin-left: 1.8rem;
		padding: 1rem 0;
	`,
	RightContainer: styled.nav`
		margin-right: 1rem;
		padding: 1rem 0;
	`,

	LotteCinemaLogo: styled.span``,
	MenuBox: styled.li`
		height: 3.2rem;
		list-style: none;
		display: flex;
		align-items: center;
	`,
};
