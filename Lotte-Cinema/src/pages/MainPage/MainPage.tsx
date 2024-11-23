import MainPageHeader from '@/components/mainPage/MainPageHeader';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import PopularMovieChart from '@/components/mainPage/PopularMovieChart';
import MainImage from '@/components/mainPage/MainImage';

const MainPage = () => {

	return (
		<MobileLayout>
			<MainPageHeader />
			<MainImage />
      		<PopularMovieChart/>
		</MobileLayout>
	);

};

export default MainPage;
