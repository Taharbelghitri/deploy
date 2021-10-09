import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import scroll from "../events";
import NavbarHome from "./navbar.home.component";
import NavbarFiveCols from "./navbar.fivecols.component";
import NavbarFewerColos from "./navbar.fewerCols.component";
import NavbarTemplates from "./navbar.templates.component";
import NavbarOtherPages from "./navbar.otherPages.component";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import moonIcon from "../icons/moon-icon.png";
import sunIcon from "../icons/sun-icon.png";

const NavbarCompopentsStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 5vw;
  width: 100vw;
  padding: 0 5% 0 5%;
  z-index: 10000;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.bg};
  font-size: 20px;
  opacity: 0;
  max-width: 2000px;
  max-height: 100px;
  span,
  .span {
    color: ${(p) => p.theme.gColor};
    cursor: pointer;
    height: 100%;
  }
  .logo {
    width: 45%;
    font-size: 24px;
    color: ${(p) => p.theme.sColor};
    display: flex;
    align-items: center;
    cursor: default;
  }
  /* .home {
    color: ${(p) => p.theme.wColor};
  } */
  @media (max-width: 1430px) {
    .logo {
      width: 50%;
    }
  }
  .dropDown {
    position: absolute;
    top: 5vw;
    height: auto;
    width: auto;
    display: none;
    flex-direction: column;
    cursor: auto;
    opacity: 0;
    color: ${(p) => p.theme.wColor};
    background-color: ${(p) => p.theme.bg};
    padding: 1vw 40px 2vw 40px;
    margin-left: -45px;
    display: none;
    .dropDownItem {
      margin-top: 3vw;
      color: ${(p) => p.theme.wColor};
      text-decoration: none;
    }
    .dropDownItem:first-child {
      margin: 0;
    }
  }
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .Link {
    text-decoration: none;
  }
  .span {
    color: ${(p) => p.theme.wColor};
  }
  @media (max-width: 1100px) {
    display: none;
  }
  .theme {
    position: relative;
    top: 0;
    height: 70%;
    width: 4%;
    max-height: 50px;
    max-width: 50px;
    .light,
    .dark {
      position: absolute;
      height: 90%;
      width: 90%;
      top: 0;
      left: 0;
      padding: 5%;
      opacity: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-clip: border-box;
      background-size: cover;
    }
    .dark {
      background-image: url(${sunIcon});
      display: block;
      opacity: 1;
      background-repeat: no-repeat;
      background-position: center;
      background-clip: border-box;
      background-size: cover;
    }
    .light {
      background-image: url(${moonIcon});
      display: none;
      opacity: 0;
    }
  }
  @media (min-width: 2000px) {
    width: 1850px;
    left: calc(55vw - 1000px);
  }
`;

const NavbarContent = [
  "home",
  "Five cols",
  "Fewer cols",
  "Templates",
  "Other pages",
];

const HomeDropDown = ({ item, controller }) => {
  const items = {
    home: <NavbarHome controller={controller} key={item} />,
    Five_cols: <NavbarFiveCols controller={controller} />,
    Fewer_cols: <NavbarFewerColos controller={controller} />,
    Templates: <NavbarTemplates controller={controller} />,
    Other_pages: <NavbarOtherPages controller={controller} />,
  };
  return items[item.replace(" ", "_")];
};

const NavbarComponent = () => {
  const NavbarShow = useAnimation();
  scroll.isScrollingToBottom(() => {
    NavbarShow.start({ y: "-5vw" });
  });
  scroll.isScrollToTop(() => {
    NavbarShow.start({ y: "0vw" });
  });

  const NavbarMotionController = {
    home: useAnimation(),
    Five_cols: useAnimation(),
    Fewer_cols: useAnimation(),
    Templates: useAnimation(),
    Other_pages: useAnimation(),
  };
  const NavbarDropDown = {
    home: useAnimation(),
    Five_cols: useAnimation(),
    Fewer_cols: useAnimation(),
    Templates: useAnimation(),
    Other_pages: useAnimation(),
  };

  let selectedItem = 0;

  // NavbarMotionController[Object.keys(NavbarMotionController)[0]].start({
  //   color: "#f8f8ff",
  // });

  NavbarShow.start({ opacity: 1 });

  const HomePaths = ["/", "/home2", "/home3"];
  const OtherPagesPaths = [
    "/aboute",
    "/contactus",
    "/login",
    "/signin",
    "/forget-password",
    "/dashboard",
  ];
  const TemplatesPaths = [
    "/topics",
    "/author",
    "/author2",
    "/search",
    "/article",
    "/article2",
  ];

  const location = useLocation().pathname;
  const isInHome = HomePaths.find((e) => e === location);
  const isInOtherPages = OtherPagesPaths.find((e) => e === location);
  const isInTemplates = TemplatesPaths.find((e) => e === location);

  const checkRoute = (elmnt) => {
    if (elmnt === "home") {
      return isInHome;
    } else if (elmnt === "Templates") {
      return isInTemplates;
    } else if (elmnt === "Other pages") {
      return isInOtherPages;
    }
  };

  scroll.themeIsChnaging(() => {
    if (checkRoute("home")) {
      NavbarMotionController.home.start({
        color: scroll.theme().wColor,
      });
      NavbarMotionController.Templates.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController["Other_pages"].start({
        color: scroll.theme().gColor,
      });
      selectedItem = 0;
    } else if (checkRoute("Templates")) {
      NavbarMotionController.Templates.start({
        color: scroll.theme().wColor,
      });
      NavbarMotionController.home.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController["Other_pages"].start({
        color: scroll.theme().gColor,
      });
      selectedItem = 3;
    } else if (checkRoute("Other pages")) {
      NavbarMotionController.Templates.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController.home.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController["Other_pages"].start({
        color: scroll.theme().wColor,
      });
      selectedItem = 4;
    }
  });

  useEffect(() => {
    if (checkRoute("home")) {
      NavbarMotionController.home.start({
        color: scroll.theme().wColor,
      });
      NavbarMotionController.Templates.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController["Other_pages"].start({
        color: scroll.theme().gColor,
      });
      selectedItem = 0;
    } else if (checkRoute("Templates")) {
      NavbarMotionController.Templates.start({
        color: scroll.theme().wColor,
      });
      NavbarMotionController.home.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController["Other_pages"].start({
        color: scroll.theme().gColor,
      });
      selectedItem = 3;
    } else if (checkRoute("Other pages")) {
      NavbarMotionController.Templates.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController.home.start({
        color: scroll.theme().gColor,
      });
      NavbarMotionController["Other_pages"].start({
        color: scroll.theme().wColor,
      });
      selectedItem = 4;
    }
  }, [location]);
  const history = useHistory();
  const darkThemeController = useAnimation(0);
  const lightThemeController = useAnimation(1);

  return (
    <>
      <NavbarCompopentsStyle
        animate={NavbarShow}
        transition={{ opacity: { duration: 0.5, delay: 1.2 }, duration: 0.2 }}
      >
        <span
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          DeepEnd
        </span>
        <div className="theme">
          <motion.div
            animate={lightThemeController}
            className="light"
            onClick={async () => {
              scroll.chnageTheme();
              await lightThemeController.start({ opacity: 0 });
              await lightThemeController.start({ display: "none" });
              darkThemeController.start({ display: "block" });
              darkThemeController.start({ opacity: 1 });
            }}
          />
          <motion.div
            animate={darkThemeController}
            className="dark"
            onClick={async () => {
              scroll.chnageTheme();
              await darkThemeController.start({ opacity: 0 });
              await darkThemeController.start({ display: "none" });
              lightThemeController.start({ display: "block" });
              lightThemeController.start({ opacity: 1 });
            }}
          />
        </div>

        {NavbarContent.map((e, i) => {
          return (
            <motion.span
              key={i}
              onHoverStart={() => {
                if (selectedItem !== i)
                  NavbarMotionController[
                    Object.keys(NavbarMotionController)[i]
                  ].start({
                    color: scroll.theme().sColor,
                  });
                NavbarDropDown[Object.keys(NavbarMotionController)[i]].start({
                  opacity: 1,
                  display: "flex",
                });
              }}
              onHoverEnd={async () => {
                if (selectedItem !== i)
                  NavbarMotionController[
                    Object.keys(NavbarMotionController)[i]
                  ].start({
                    color: scroll.theme().gColor,
                  });
                await NavbarDropDown[
                  Object.keys(NavbarMotionController)[i]
                ].start({
                  opacity: 0,
                });
                NavbarDropDown[Object.keys(NavbarMotionController)[i]].start({
                  display: "none",
                });
              }}
              onClick={() => {
                console.log("i :" + i);
                if (selectedItem !== i) {
                  NavbarMotionController[
                    Object.keys(NavbarMotionController)[i]
                  ].start({
                    color: scroll.theme().wColor,
                  });
                  NavbarMotionController[
                    Object.keys(NavbarMotionController)[selectedItem]
                  ].start({ color: scroll.theme().gColor });
                  selectedItem = i;
                }
              }}
            >
              <motion.span
                className="name"
                animate={
                  NavbarMotionController[Object.keys(NavbarMotionController)[i]]
                }
                onClick={() => {
                  history.push("/");
                }}
              >
                {e}
              </motion.span>
              <HomeDropDown
                item={e}
                DropDown
                controller={
                  NavbarDropDown[Object.keys(NavbarMotionController)[i]]
                }
              />
            </motion.span>
          );
        })}
      </NavbarCompopentsStyle>
    </>
  );
};

export default NavbarComponent;
