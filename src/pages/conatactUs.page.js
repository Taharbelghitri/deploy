import TitleComponent from "../components/title.component";
import ContactUsLayout from "../layout/contactUs.layout";

const ContactUsPage = () => (
  <>
    <TitleComponent
      styles="top : 10vw ;  padding-bottom : 5px"
      subTitle="width : 200px "
      titleSize="font-size : 80px"
      text={{
        title: "Contact us.",
        subTitle: "Drop us message and we will get back for you.",
      }}
      colors={{ title: "#F8F8FF", subTitle: "#8A8888" }}
    />
    <div style={{ height: "10vw" }} />
    <ContactUsLayout />
  </>
);

export default ContactUsPage;
