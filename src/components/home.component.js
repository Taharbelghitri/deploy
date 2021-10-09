import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import events from "../events";

const HomeComponentStyle = styled(motion.div)`
  position: relative;
  left: 5%;
  top: 10vw;
  margin-bottom: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 700px;
  width: 90%;
  font-size: 18px;
  height: auto;
  .introBg {
    background-image: url("https://images.pexels.com/photos/3304170/pexels-photo-3304170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    width: 40%;
    height: 45vw;
    max-height: 80vh;
  }
  .aboutUs {
    height: auto;
    width: 500px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    line-height: 20px;
    color: ${(p) => p.theme.gColor};
  }
  .intro {
    display: flex;
    flex-direction: column;
    height: auto;
    .logo {
      margin-top: 30px;
      font-size: 5vw;
      margin-bottom: 30px;
      color: ${(p) => p.theme.wColor};
      @media (min-width: 2000px) {
        font-size: 100px;
      }
    }
    .welcome,
    .text {
      color: ${(p) => p.theme.gColor};
      width: auto;
    }
  }
  @media (max-width: 1000px) {
    font-size: 18px;
    height: 700px;
    .aboutUs {
      position: absolute;
      left: 0;
      bottom: 0;
      width: auto;
      z-index: 100;
      color: ${(p) => p.theme.wColor};
    }
    .introBg {
      position: absolute;
      height: 700px;
      right: 0;
      width: 50vw;
    }
  }
  @media (max-width: 750px) {
    font-size: 16px;
    flex-direction: column;
    top: 20vw;
    .intro {
      .logo {
        font-size: 50px;
      }
    }
    .aboutUs {
      position: relative;
      top: 0;
      margin-top: 50px;
      line-height: 20px;
      width: 100%;
      font-size: 16px;
    }
    .introBg {
      position: relative;
      margin-top: 50px;
      width: 90vw;
      background-position: 0 -50vw;
    }
  }
  /* @media (min-width: 2200px) {
    margin-top: 300px;
  } */

  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(50vw - 1000px);
  }
`;

const animateWidth = () => {
  const width = window.innerWidth;

  if (width >= 2000) {
    return "800px";
  } else if (width >= 1000) {
    return "700px";
  } else {
    return "700px";
  }
};

const useAnimateHome = () => {
  const HightController = useAnimation();
  return HightController;
};

const HomeComponent = () => {
  const HightController = useAnimateHome();
  HightController.start({ height: animateWidth() });

  events.onWidthChanges(() => {
    console.log(window.innerWidth);
    HightController.start({ height: animateWidth() });
  });

  return (
    <HomeComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        exit: { duration: 0.3, delay: 0 },
        animate: { duration: 0.5, delay: 0.3 },
      }}
    >
      <motion.div
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="welcome">welcome to</span>
        <span
          className="logo"
          onClick={() => {
            HightController.start({ opacity: 0 });
          }}
        >
          deepend
        </span>
        <span className="text">
          “We Become What We Think About.” <br /> -Earl Nightingale
        </span>
      </motion.div>
      <motion.div
        className="aboutUs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <span> we gave our visitor what they exactly want to read </span>
        <span>
          simple title with deep content could make them read the articles three
          times or more
        </span>
        <span>
          many articles type because of the good trafic we have and our newest
          authors ebery day
        </span>
      </motion.div>
      <motion.div
        className="introBg"
        initial={{ height: 0 }}
        animate={HightController}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
      />
    </HomeComponentStyle>
  );
};

export default HomeComponent;
