import styled from '@emotion/styled';

import Img4m44s from '@/assets/img/Img4m44s.png';
import ImgAmazonhms from '@/assets/img/ImgAmazonhms.png';
import ImgDeadline from '@/assets/img/ImgDeadline.png';
import ImgGladiator from '@/assets/img/ImgGladiator.png';
import ImgHoshimachi from '@/assets/img/ImgHoshimachi.png';
import ImgKiminonamaewa from '@/assets/img/ImgKiminonamaewa.png';
import ImgSummerwars from '@/assets/img/ImgSummerwars.png';
import { IcAge1216, IcAge1916, IcAgeAll16 } from '@/assets/svg';

import ViewAllBtn from '../commons/ViewAllBtn';
import TheaterLabel from './atom/theaterLabel';

const MovieInfoBar = () => {
	const posters = [ImgAmazonhms, Img4m44s, ImgDeadline, ImgGladiator, ImgHoshimachi, ImgKiminonamaewa, ImgSummerwars];
	const locs = ['건대입구', '강동', '청량리'];
	return (
		<>
			<S.Wrapper>
				<S.Layout>
					<S.MovieInfoContainer>
						<S.MovieTextBox>
							<h1>아마존 활명수</h1>
							<IcAge1216 width="1.6rem" />
							<p>122분 (2시간 2분)</p>
						</S.MovieTextBox>
						<ViewAllBtn label="전체보기" />
					</S.MovieInfoContainer>
					<S.PosterContainer>
						{posters.map((poster, i) => (
							<li key={`poster-${i}`}>
								<img src={poster}></img>
							</li>
						))}
					</S.PosterContainer>
					<S.TheaterContainer>
						{locs.map((loc, i) => (
							<li key={`chip-${i}`}>
								<TheaterLabel label={loc} />
							</li>
						))}
					</S.TheaterContainer>
				</S.Layout>
			</S.Wrapper>
		</>
	);
};

export default MovieInfoBar;

const S = {
	Wrapper: styled.section`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 21.2rem;
		padding: 1.6rem 0 1.6rem 1.8rem;
		gap: 1rem;
		background: ${({ theme }) => theme.colors.GRAY14};
	`,

	Layout: styled.div`
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.2rem;
	`,

	MovieInfoContainer: styled.header`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,

	MovieTextBox: styled.div`
		display: flex;
		align-items: center;
		gap: 0.8rem;
		justify-content: space-between;

		& h1 {
			${({ theme }) => theme.typographies.n_head02_bold}
			color: ${({ theme }) => theme.colors.WHITE100}
		}

		& p {
			${({ theme }) => theme.typographies.r_body03_reg}
			color: ${({ theme }) => theme.colors.GRAY08};
		}
	`,

	PosterContainer: styled.ul`
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		align-self: stretch;
		overflow-x: auto;

		& img {
			width: 8rem;
			height: 11rem;
		}

		& li:not(:first-child) {
			filter: brightness(0.5);
		}
	`,

	TheaterContainer: styled.ul`
		display: flex;
		gap: 0.6rem;
	`,
};
