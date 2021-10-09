import AbouteComponent from "../components/aboute.component";
import BoostComponent from "../components/boost.component";
import TitleComponent from "../components/title.component";
import abouteUsImage1 from "../images/team 1.png";
import abouteUsImage2 from "../images/founder 1.png";

const AboutePage = () => (
  <>
    <TitleComponent
      titleSize="margin-top : 12vw "
      colors={{ title: "#F8F8FF", subTitle: "#8A8888" }}
      text={{
        title: "About us.",
        subTitle:
          "We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.",
      }}
    />
    <AbouteComponent styles={{ picture: abouteUsImage1, style: "" }} />
    <AbouteComponent
      styles={{ picture: abouteUsImage2, style: " margin-top: 10vw ; " }}
      title="Founder"
      subTitle="We’re impartial and independent, and every day we create distinctive, world-class programmes and content"
    />
    <BoostComponent />
  </>
);

export default AboutePage;
