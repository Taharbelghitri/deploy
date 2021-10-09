import HomeComponent1 from "../components/home.component";
import HomeComponent2 from "../components/home2.component";
import HomeComponent3 from "../components/home3.component";

const HomeLayout = ({ style }) => {
  return (
    <>
      {style === 1 ? (
        <HomeComponent1 />
      ) : style === 2 ? (
        <HomeComponent2 />
      ) : (
        <HomeComponent3 />
      )}
    </>
  );
};

export default HomeLayout;
