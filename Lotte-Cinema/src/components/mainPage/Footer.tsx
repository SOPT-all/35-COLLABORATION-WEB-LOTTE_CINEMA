import styled from '@emotion/styled';

import { ImgBannerFullKblivevent } from '@/assets/svg';

type Props = {};

const Footer = (props: Props) => {
	return (
		<>
			<S.Footer>
				<S.TopContainer>
					<S.Noticement>
						<p>공지사항</p>
						<p>롯데시네마 영상정보처리기기 운영 및 관리방침 개정 안내</p>
						<p>전체 보기</p>
					</S.Noticement>
				</S.TopContainer>
				<S.Advertisement>
					<ImgBannerFullKblivevent />
				</S.Advertisement>
				<S.CompanyRegulation>롯데컬처윅스</S.CompanyRegulation>
				<S.Nav>바로예매</S.Nav>
			</S.Footer>
		</>
	);
};

export default Footer;

const S = {
	Footer: styled.footer``,
	TopContainer: styled.div`
		margin-top: 1rem; /* Test 위해서 잠시 만들어 놓음 */
		border-top: 1px solid ${({ theme }) => theme.colors.GRAY05};
		display: flex;
		height: 4.2rem;
		align-items: center;
	`,
	Noticement: styled.div`
		display: flex;
		justify-content: space-around;
	`,
	Advertisement: styled.div``,
	CompanyRegulation: styled.div``,
	Nav: styled.div``,
};
