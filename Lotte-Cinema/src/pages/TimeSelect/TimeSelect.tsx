import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import MovieInfoBar from '@/components/timeSelect/MovieInfoBar';

const TimeSelect = () => {
	return (
		<MobileLayout>
			<Header title="영화별 예매" />
			<main>
				<MovieInfoBar></MovieInfoBar>
			</main>
		</MobileLayout>
	);
};

export default TimeSelect;
