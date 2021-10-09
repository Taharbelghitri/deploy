import { Switch, Route, useLocation } from "react-router-dom";
import FirstStyle from "./pages/home.page";
import NavbarComponent from "./components/navbar.component";
import ContactUsComponent from "./components/contactUs.component";
import { TopicPage } from "./pages/topic.page";
import AuthorPage from "./pages/author.page";
import SearchPage from "./pages/search.page";
import ReadArticlePage from "./pages/read.article.page";
import AboutePage from "./pages/aboute.page";
import ContactUsPage from "./pages/conatactUs.page";
import DashbordPage from "./pages/dashbord.page";
import NavbarHorizontal from "./components/navbar.horizontal.component";
import scrollEvent from "./events";
import { useEffect, useState } from "react";
import SignLayout from "./layout/sign.layout";
import { AnimatePresence } from "framer-motion";
import ForgetPasswordLayout from "./layout/forget.password.layout";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  bg: "#191919",
  wColor: "#f8f8ff",
  dColor: "#191919",
  gColor: "#8a8888",
  sColor: "#F2C14E",
};

const darkTheme = {
  bg: "#ececec",
  wColor: "#191919",
  dColor: "#f8f8ff",
  gColor: "#4F4F4F",
  sColor: "#679267",
};

const AppStyle = styled.div`
  background-color: ${(p) => p.theme.bg};
`;

function App() {
  console.log("rebuild the page");
  let location = useLocation();
  let lastYoffset = 0;
  let timeout;

  const DetectScroll = () => {
    timeout = setTimeout(() => {
      const yOffset = window.pageYOffset;
      if (yOffset > lastYoffset) scrollEvent.ditectScrollDirection("TOP");
      else scrollEvent.ditectScrollDirection("DOWN");
      lastYoffset = yOffset;
    }, 100);
  };

  const handleNavigation = () => {
    clearTimeout(timeout);
    DetectScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleNavigation());
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);

    return window.removeEventListener("scroll", () => handleNavigation());
  }, []);

  const [theme, setTheme] = useState(lightTheme);

  scrollEvent.themeIsChnaging(() => {
    const nextTheme = () => (theme === lightTheme ? darkTheme : lightTheme);
    scrollEvent.setTheme(nextTheme());
    setTheme(nextTheme());
  });

  const Home1 = () => <FirstStyle style={1} />;
  const Home2 = () => <FirstStyle style={2} />;
  const Home3 = () => <FirstStyle style={3} />;
  const Login = () => (
    <SignLayout
      title="Login"
      path="forget-password"
      text=""
      moveTo="forget password ?"
    />
  );
  const SignIn = () => (
    <SignLayout
      title="Sign up"
      path="login"
      text="Already have an account? "
      moveTo="Sign in"
    />
  );
  const Article_1 = () => <ReadArticlePage page={0} />;
  const Article_2 = () => <ReadArticlePage page={1} />;
  const Author_1 = () => <AuthorPage page={0} />;
  const Author_2 = () => <AuthorPage page={1} />;

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <NavbarHorizontal />
        <NavbarComponent />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home1} />
            <Route path="/home2" component={Home2} />
            <Route path="/home3" component={Home3} />
            <Route path="/topics" component={TopicPage} />
            <Route path="/author" component={Author_1} />
            <Route path="/author2" component={Author_2} />
            <Route path="/search" component={SearchPage} />
            <Route path="/article" component={Article_1} />
            <Route path="/article2" component={Article_2} />
            <Route path="/aboute" component={AboutePage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/Dashboard" component={DashbordPage} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forget-password" component={ForgetPasswordLayout} />
          </Switch>
        </AnimatePresence>
        <ContactUsComponent />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
