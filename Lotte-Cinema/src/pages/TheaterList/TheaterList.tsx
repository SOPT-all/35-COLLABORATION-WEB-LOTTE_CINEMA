import List from '@/components/TheaterList/List';
import TabBar from '@/components/TheaterList/TabBar';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const TheaterList = () => {
	return (
		<MobileLayout>
			<Header title="영화관 선택" />
			<TabBar />
			<List />
		</MobileLayout>
	);
};

export default TheaterList;
