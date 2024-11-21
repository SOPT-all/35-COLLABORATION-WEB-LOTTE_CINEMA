import styled from '@emotion/styled';

import { useState } from 'react';

import { IcArrowDown20, IcArrowUnderGray1410, IcHorizontalbar10, ImgBannerFullKblivevent } from '@/assets/svg';

const Footer = () => {
	const [isClicked, setIsClicked] = useState(true);
	return (
		<>
			<S.Footer>
				<S.TopContainer>
					<S.Noticement>
						<p>
							<span>공지사항</span>
							<IcHorizontalbar10 height="1rem" />
							<span>롯데시네마 영상정보처리기기 운영 및 관리방침 개정 안내</span>
						</p>
						<S.EntireNoticement>전체 보기</S.EntireNoticement>
					</S.Noticement>
				</S.TopContainer>
				<S.Advertisement>
					<ImgBannerFullKblivevent />
				</S.Advertisement>
				<S.LastContainer>
					<S.CompanyRegulation onClick={() => setIsClicked((event) => !event)}>
						<span>롯데컬처윅스&#40;주&#41;</span>
						{isClicked ? <IcArrowDown20 width="1rem" /> : <IcArrowUnderGray1410 width="1rem" />}
					</S.CompanyRegulation>
					{/* 토글하면 아래에 정보가 나오도록 하기 잠깐 이따가 하기 ㅠ.ㅠ*/}
					{isClicked && (
						<S.ToggleContainer>
							<S.EachRegulation>이용약관</S.EachRegulation>
							<S.SeperateLine>|</S.SeperateLine>
							<S.EachRegulation>개인정보처리방침</S.EachRegulation>
							<p>|</p>
							<S.SeperateLine>고객센터</S.SeperateLine>
						</S.ToggleContainer>
					)}
				</S.LastContainer>
			</S.Footer>
		</>
	);
};

export default Footer;

const S = {
	Footer: styled.footer`
		width: 100%;
	`,
	TopContainer: styled.div`
		margin-top: 1rem; /* Test 위해서 잠시 만들어 놓음 */
		border-top: 1px solid ${({ theme }) => theme.colors.GRAY05};
		padding: 1.6rem 1.4rem;
	`,
	Noticement: styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		${({ theme }) => theme.typographies.n_caption02_med}

		& > p {
			display: flex;
			align-items: center;
		}
	`,
	EntireNoticement: styled.p`
		list-style: none;
		text-align: right;
		${({ theme }) => theme.typographies.n_caption02_reg};
		color: ${({ theme }) => theme.colors.GRAY09};
	`,
	Advertisement: styled.div``,

	LastContainer: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 16.7rem + 2.8rem; //gap 크기만큼 더하기
		height: 3.3rem;
		margin: 2.4rem 17.5rem 2.2rem 1.8rem;
	`,
	CompanyRegulation: styled.div`
		${({ theme }) => theme.typographies.n_caption01_bold};
		display: flex;
		align-items: center;
		gap: 0.3rem;
	`,
	ToggleContainer: styled.div`
		display: flex;
		gap: 0.7rem;
		${({ theme }) => theme.typographies.n_caption02_med};
		color: ${({ theme }) => theme.colors.GRAY07};
	`,
	EachRegulation: styled.li`
		list-style: none;
	`,
	SeperateLine: styled.div``,
};
