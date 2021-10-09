import SignComponent from "../components/sign.component";
import TitleComponent from "../components/title.component";

const SignLayout = ({ title, text, moveTo, path }) => {
  return (
    <>
      <TitleComponent
        text={{
          title: title,
          subTitle: "Welcome to our blog magazine Community",
        }}
        colors={{ title: "#f8f8ff", subTitle: "#8a8888" }}
        styles="top : 10vw"
        subTitle="width: 200px"
      />
      <div style={{ height: "10vw" }} />
      <SignComponent text={text} moveTo={moveTo} path={path} />
    </>
  );
};

export default SignLayout;
