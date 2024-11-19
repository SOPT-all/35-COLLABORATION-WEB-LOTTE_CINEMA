import { useNavigate } from 'react-router-dom';

import { IcArrowLeftBlack24 } from '@/assets/svg';
import { IcHomeBlack24 } from '@/assets/svg';

import S from './Hedaer.style';

interface HeaderProps {
	title: string;
}

const Header = ({ title }: HeaderProps) => {
	const navigate = useNavigate();
	return (
		<S.Header>
			<S.LeftContainer>
				<S.MenuBox onClick={() => navigate(-1)}>
					<IcArrowLeftBlack24 width="24px" height="24px" />
				</S.MenuBox>
				<S.MenuBox onClick={() => navigate('/')}>
					<IcHomeBlack24 width="24px" height="24px" />
				</S.MenuBox>
			</S.LeftContainer>
			<S.CenterContainer>
				<h1>{title}</h1>
			</S.CenterContainer>
		</S.Header>
	);
};

export default Header;
