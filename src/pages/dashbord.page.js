import DashbordComponenet from "../components/dashbord.component";
import TitleComponent from "../components/title.component";

const DashbordPage = () => (
  <>
    <TitleComponent
      styles="top : 10vw ; padding-bottom : 5px"
      subTitle="width : 400px"
      text={{
        title: "Dash bord.",
        subTitle:
          "View your dashboard, manage your Posts, Subscription, edit password and profile.",
      }}
      colors={{ title: "#F8F8FF", subTitle: "#8A8888" }}
    />
    <div style={{ height: "10vw" }} />
    <DashbordComponenet />
  </>
);

export default DashbordPage;
