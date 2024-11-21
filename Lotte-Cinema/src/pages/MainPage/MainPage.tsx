import Footer from '@/components/mainPage/Footer';
import NavFooter from '@/components/mainPage/NavFooter';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const MainPage = () => {
	return (
		<MobileLayout>
			<Footer />
			<NavFooter />
		</MobileLayout>
	);
};

export default MainPage;
