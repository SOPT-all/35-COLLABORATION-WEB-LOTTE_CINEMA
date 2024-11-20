import PopularMovieChart from "@/components/MainPageComponents/PopularMovieChart";
import MobileLayout from "@/components/mobileLayout/MobileLayout";

const MainPage = () => {
  return (
    <MobileLayout>
      <main>
        <PopularMovieChart />
      </main>
    </MobileLayout>
  );
};

export default MainPage;
