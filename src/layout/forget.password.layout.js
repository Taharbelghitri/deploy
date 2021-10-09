import ForgetPAssword from "../components/forget.password.component";
import TitleComponent from "../components/title.component";

const ForgetPasswordLayout = () => {
  return (
    <>
      <TitleComponent
        text={{
          title: "Forget password",
          subTitle: "Welcome to our blog magazine Community",
        }}
        colors={{ title: "#f8f8ff", subTitle: "#8a8888" }}
        styles="top : 12vw"
        subTitle="width: 200px"
      />
      <div style={{ height: "18vw" }} />
      <ForgetPAssword />
    </>
  );
};

export default ForgetPasswordLayout;
