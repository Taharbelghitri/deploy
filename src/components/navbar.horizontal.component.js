import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { Link, useHistory, useLocation } from "react-router-dom";
import downIcon from "../icons/down-icon.png";
import menuIcon from "../icons/menu-icon.svg";
import cancelIcon from "../icons/cancel-icon.svg";
import { useEffect, useState } from "react";
import scroll from "../events";
import moonIcon from "../icons/moon-icon.png";
import sunIcon from "../icons/sun-icon.png";

const NavbarHorizontalStyle = styled(motion.div)`
  width: 100vw;
  height: 10vw;
  min-height: 50px;
  z-index: 20000;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  background-color: ${(p) => p.theme.bg};
  opacity: 0;
  display: none;
  padding-left: 5%;
  padding-right: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .icon {
    position: relative;
    height: 5vw;
    width: 5vw;
    /* right: 5vw; */
    z-index: 10001;
    cursor: pointer;
    background-image: url(${(p) => p.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    background-color: "#191919";
  }
  .logo {
    position: relative;
    /* display: flex; */
    /* left: 5vw; */
    /* justify-content: center;
    align-items: center; */
    height: auto;
    color: ${(p) => p.theme.wColor};
    cursor: pointer;
    /* display: flex; */
    font-size: 20px;
    width: 50%;
  }
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 0vw;
    padding-left: 5vw;
    height: 110vh;
    padding-bottom: 20vw;
    background-color: ${(p) => p.theme.bg};
    z-index: -100000;
    display: flex;
    flex-direction: column;
    color: ${(p) => p.theme.wColor};
    opacity: 0;
    display: none;
    .elmnt {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      .content {
        display: flex;
        .mainLinks {
          text-decoration: none;
          cursor: pointer;
          color: ${(p) => p.theme.sColor};
          font-size: 30px;
        }
      }
      .downItem {
        height: auto;
        width: auto;
        margin-left: 5vw;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        height: auto;
        display: none;
        opacity: 0;
        div {
          margin-top: 20px;
        }
        .dropDownTitle {
          margin-top: 20px;
          color: ${(p) => p.theme.gColor};
          font-size: 30px;
          text-decoration: none;
        }
      }
      .downIcon {
        cursor: pointer;
        margin-left: 50px;
        height: 20px;
        width: 20px;
        transform: rotate(-90deg);
        max-height: 20px;
        max-width: 20px;
        padding: 10px;
        border-radius: 20%;
        background-color: #191919;
        cursor: pointer;
        background-image: url(${downIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-clip: border-box;
      }
      .name {
        cursor: pointer;
        color: ${(p) => p.theme.sColor};
        font-size: 30px;
      }
    }
  }
  .theme {
    position: relative;
    /* top: 1.5vw;
    right: 15vw; */
    height: 7vw;
    width: 5%;
    .light,
    .dark {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      padding: 5%;
      opacity: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-clip: border-box;
      background-size: cover;
      position: absolute;
      /* height: 5vw;
      width: 5vw;
      right: 5vw; */
      z-index: 10001;
      cursor: pointer;
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
  @media (max-width: 1100px) {
    height: 7vw;
    display: flex;
    .icon,
    .theme {
      height: 3vw;
      width: 3vw;
      /* top: 2vw; */
    }
    .logo {
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    height: 7vw;
    .icon,
    .theme {
      height: 4vw;
      width: 4vw;
      /* top: 1.5vw; */
    }
    .logo {
      font-size: 20px;
    }
  }
`;

const Home = ["demo style 1", "demo style 2", "demo style 3"];
const HomePaths = ["/", "home2", "home3"];
const Templates = [
  "About",
  "Contact us",
  "Login",
  "Signup",
  "Forgot Password",
  "Dashboard",
];
const TemplatePaths = [
  "/aboute",
  "/contactus",
  "/login",
  "/singin",
  "/forget-password",
  "/dashboard",
];

const OtherPages = [
  "Archive Page",
  "Author Page",
  "Search Page",
  "articles Template",
];
const OtherPagesPaths = ["/topics", "/author", "/search", "/article"];

const DownElmnts = {
  home: [Home, HomePaths],
  "Five cols": [Home],
  "Fewer cols": [Home],
  "Other pages": [Templates, TemplatePaths],
  Templates: [OtherPages, OtherPagesPaths],
};

const MainPaths = ["/", "/", "/", "/aboute", "/topics"];

const DropDownComponent = (name, controller) => {
  const elemnt = DownElmnts[name];
  if (elemnt.length > 1) {
    return elemnt[0].map((e, i) => {
      return (
        <div key={i}>
          <Link
            to={elemnt[1][i]}
            className="dropDownTitle"
            key={i}
            onClick={async () => {
              await controller.start({ opacity: 0, zIndex: -100000 });
              controller.start({ display: "none" });
            }}
          >
            {e}
          </Link>
        </div>
      );
    });
  }
};

const NavbarHorizontal = () => {
  const ShowNavbar = useAnimation();
  const controllers = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
    3: useAnimation(),
    4: useAnimation(),
  };
  const controllers2 = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
    3: useAnimation(),
    4: useAnimation(),
  };
  let isShowed = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  };
  const history = useHistory();
  const location = useLocation();
  const [icon, setIcon] = useState(menuIcon);
  const [isVisible, setVIsibile] = useState("true");

  useEffect(() => {
    console.log("use effect");
    if (isVisible === "false") {
      console.log("cancel icon ");
      setIcon(cancelIcon);
      setVIsibile("true");
    } else {
      console.log("menu icon ");
      setIcon(menuIcon);
      setVIsibile("false");
    }
  }, [location]);

  const darkThemeController = useAnimation(0);
  const lightThemeController = useAnimation(1);

  return (
    <NavbarHorizontalStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.5, delay: 1.2 } }}
      icon={icon}
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
      <motion.div
        className="icon"
        transition={{
          duration: 0.01,
        }}
        onClick={async () => {
          if (isVisible === "true") {
            console.log("false");
            ShowNavbar.start({ opacity: 0, zIndex: -1000, display: "none" });
            setIcon(menuIcon);
            setVIsibile("false");
          } else {
            console.log("true");
            await ShowNavbar.start({ display: "flex" });
            ShowNavbar.start({
              opacity: 1,
              zIndex: 10000,
            });
            setIcon(cancelIcon);
            setVIsibile("true");
          }
        }}
      />

      <motion.div className="navbar" animate={ShowNavbar}>
        {Object.keys(DownElmnts).map((e, i) => {
          return (
            <div className="elmnt" key={i}>
              <div className="content">
                <span className="name">
                  <Link
                    to={MainPaths[i]}
                    className="mainLinks"
                    onClick={async () => {
                      ShowNavbar.start({ opacity: 0, zIndex: -1000 });
                    }}
                  >
                    {e}
                  </Link>
                </span>
                <motion.div
                  animate={controllers2[i]}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  onClick={async () => {
                    if (isShowed[i] === false) {
                      isShowed[i] = true;
                      controllers2[i].start({ rotate: "90deg" });
                      await controllers[i].start({
                        height: "auto",
                        opacity: 1,
                      });
                      await controllers[i].start({
                        display: "block",
                      });
                      Object.keys(controllers).forEach(async (e) => {
                        if (parseInt(e) !== i) {
                          controllers2[e].start({ rotate: "-90deg" });
                          await controllers[e].start({
                            opacity: 0,
                          });
                          await controllers[e].start({
                            height: "0px",
                          });
                          await controllers[e].start({
                            display: "none",
                          });
                        }
                      });
                    } else {
                      isShowed[i] = false;
                      controllers2[i].start({ rotate: "-90deg" });
                      await controllers[i].start({
                        opacity: 0,
                      });
                      await controllers[i].start({
                        height: "0px",
                      });
                      await controllers[i].start({
                        display: "none",
                      });
                    }
                  }}
                  className={DownElmnts[e].length > 1 ? "downIcon" : ""}
                />
              </div>
              <motion.div className="downItem" animate={controllers[i]}>
                {DropDownComponent(e, ShowNavbar)}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </NavbarHorizontalStyle>
  );
};

export default NavbarHorizontal;
