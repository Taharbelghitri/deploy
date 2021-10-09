import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import events from "../events";

const AbouteComponentStyle = styled(motion.div)`
  margin-top: 10vw;
  position: relative;
  width: 90vw;
  height: auto;
  left: 5vw;
  display: flex;
  justify-content: flex-end;
  .text {
    z-index: 1000;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 35vw;
    max-width: 1000px;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    justify-content: flex-end;
    .title {
      font-size: 50px;
      color: ${({ theme }) => theme.sColor};
    }
    .subtitle {
      font-size: 18px;
      color: ${({ theme }) => theme.wColor};
    }
  }
  .cover {
    height: 400px;
    width: 70vw;
    max-width: 1300px;
    background-image: url("${(p) => p.styles.picture}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }

  ${(p) => p.styles.style}

  @media (min-width: 2000px) {
    width: 1800px;
    margin-left: calc(50vw - 1000px);
  }
  @media (max-width: 1100px) {
    margin-top: 13vw;
    display: flex;
    flex-direction: column-reverse;
    .cover {
      width: 100%;
      height: 30vw;
    }
    .text {
      display: flex;
      position: relative;
      top: auto;
      bottom: auto;
      height: auto;
      width: 100%;
      margin-top: 5vw;
      .title {
        font-size: 30px;
      }
    }
  }
`;

const AbouteComponent = ({
  title = "We’re",
  subTitle = "",
  styles = { picture: "", style: "" },
}) => {
  const HightController = useAnimation();

  const animateWidth = () => {
    const width = window.innerWidth;
    console.log(width);
    if (width >= 1000) {
      return "400px";
    } else {
      return "30vw";
    }
  };

  HightController.start({ height: animateWidth(), opacity: 1 });

  events.onWidthChanges(() => {
    HightController.start({ height: animateWidth(), opacity: 1 });
  });

  return (
    <AbouteComponentStyle
      styles={styles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        animate={{ opacity: 1 }}
      >
        <span className="title">{title}</span>
        <span className="subtitle">
          {subTitle === ""
            ? `impartial and independent, and every day we create distinctive,
          world-class programmes and content which inform, educate and entertain
          millions of people in the around the world.`
            : subTitle}
        </span>
      </motion.div>
      <motion.div
        className="cover"
        initial={{ height: 0, opacity: 0 }}
        transition={{
          height: { duration: 0.5, delay: 0.5 },
          opacity: { duration: 0.2, delay: 0.8 },
        }}
        animate={HightController}
      />
    </AbouteComponentStyle>
  );
};

export default AbouteComponent;
