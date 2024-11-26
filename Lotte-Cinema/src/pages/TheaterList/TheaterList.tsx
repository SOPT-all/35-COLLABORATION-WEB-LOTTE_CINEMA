import styled from '@emotion/styled';

import List from '@/components/TheaterList/List';
import SelectActions from '@/components/TheaterList/SelectActions';
import TabBar from '@/components/TheaterList/TabBar';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const TheaterList = () => {
	return (
		<MobileLayout>
			<Header title="영화관 선택" />
			<S.Wrapper>
				<TabBar />
				<List />
				<SelectActions />
			</S.Wrapper>
		</MobileLayout>
	);
};

const S = {
	Wrapper: styled.div`
		position: relative;
		width: 100%;
		height: 100%;
	`,
};

export default TheaterList;
