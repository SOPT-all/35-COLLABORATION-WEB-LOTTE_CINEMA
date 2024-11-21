import styled from '@emotion/styled';

import { THEATER_DETAIL_REGION, THEATER_REGION } from '@/constants/mocks/theaterRegion';

const List = () => {
	return (
		<S.Wrapper>
			<S.LeftContainer>
				{THEATER_REGION.map(({ id, name, num }) => (
					<S.LeftRegion key={id}>
						<S.LeftText>{name}</S.LeftText>
						<S.LeftNum>{num}</S.LeftNum>
					</S.LeftRegion>
				))}
			</S.LeftContainer>

			<S.RightContainer>
				{THEATER_DETAIL_REGION.map(({ id, name }) => (
					<S.RightRegion key={id}>{name}</S.RightRegion>
				))}
			</S.RightContainer>
		</S.Wrapper>
	);
};

const S = {
	Wrapper: styled.div`
		display: flex;
		background-color: ${({ theme }) => theme.colors.GRAY04};
		width: 100%;
		height: calc(100dvh - 92px); // 화면 전체 높이 - (header + TabBar 높이)
	`,

	LeftContainer: styled.ul`
		width: 40%;
	`,

	RightContainer: styled.ul`
		width: 60%;
		overflow-y: scroll;
		background-color: white;
		/* margin-top: 0.2rem; 디자이너 질문 */
	`,

	LeftRegion: styled.li`
		width: 100%;
		padding: 1.3rem 1.8rem 1.7rem 1.3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY05};
		cursor: pointer;
	`,

	LeftText: styled.p`
		${({ theme }) => theme.typographies.n_body01_reg}
		color: 	${({ theme }) => theme.colors.GRAY08};
		white-space: nowrap;
	`,

	LeftNum: styled.p`
		${({ theme }) => theme.typographies.n_body02_reg}
		color: 	${({ theme }) => theme.colors.GRAY08};
	`,

	RightRegion: styled.li`
		width: 100%;
		padding: 1.4rem 17.2rem 1.4rem 1.8rem;
		${({ theme }) => theme.typographies.n_body01_reg}
		color: 	${({ theme }) => theme.colors.BLACK100};
		border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY03};
		white-space: nowrap;
		cursor: pointer;
	`,
};

export default List;
