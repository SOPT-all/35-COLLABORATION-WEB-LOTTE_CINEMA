import MainPageHeader from '@/components/mainPage/MainPageHeader';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import PopularMovieChart from '@/components/mainPage/PopularMovieChart';

const MainPage = () => {

	return (
		<MobileLayout>
			<MainPageHeader />
      <PopularMovieChart/>
		</MobileLayout>
	);

};

export default MainPage;
