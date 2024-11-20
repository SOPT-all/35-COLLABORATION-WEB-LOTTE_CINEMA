import TheaterTypeSelector from '@/components/TheaterList/TheaterTypeSelector';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const TheaterList = () => {
	return (
		<MobileLayout>
			<Header title="영화관 선택" />
			<TheaterTypeSelector />
		</MobileLayout>
	);
};

export default TheaterList;
