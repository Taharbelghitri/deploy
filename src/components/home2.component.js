import { motion } from "framer-motion";
import styled from "styled-components";

const Home2Style = styled(motion.div)`
  position: relative;
  top: 8vw;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 40px;
  font-size: 16px;
  background-image: url("https://images.pexels.com/photos/3304170/pexels-photo-3304170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-attachment: fixed;
  background-position: 0 -50vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  height: calc(45vw);
  max-height: 800px;
  .aboutUs {
    height: 100px;
    width: 500px;
    position: absolute;
    bottom: 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #f8f8ff;
  }
  .intro {
    display: flex;
    flex-direction: column;
    height: auto;
    .logo {
      margin-top: 30px;
      font-size: 100px;
      margin-bottom: 30px;
      color: #f8f8ff;
    }
    .welcome,
    .text {
      color: #f8f8ff;
      width: 300px;
    }
  }
  @media (max-width: 1450px) {
    background-position: 0 -60vw;
  }
  @media (max-width: 1800px) {
    background-position: 0 -60vw;
  }
  @media (max-width: 1500px) {
    background-position: 0 -60vw;
  }
  @media (max-width: 1000px) {
    background-position: 0 -20vw;
    height: 80vw;
  }
  @media (max-width: 750px) {
    padding: 10px;
    width: 100%;
    background-position: 0 -50vw;
    margin: 0;
    top: 10vw;
    padding-top: 10vw;
    height: 100vw;
    .intro {
      .welcome {
        width: 100%;
        width: auto;
        white-space: pre-wrap;
      }
      .logo {
        font-size: 20vw;
      }
      .text {
        width: auto;
        white-space: pre-wrap;
      }
    }

    .aboutUs {
      white-space: pre-wrap;
    }
  }
  @media (max-width: 520px) {
    margin: 0;
    top: 15vw;
    padding-left: 5vw;
    background-position: top;
    width: 90vw;
    height: 120vw;
    .aboutUs {
      * {
        margin-bottom: 2vw;
      }
      width: 80%;
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
    background-position: 0px -1800px;
  }
`;

// const AnimateHeight = () => {
//   const i = window.innerWidth;
//   console.log(i);
//   const sizes = [
//     [2000, "800px"],
//     [1500, "45vw"],
//     [1000, "100vw"],
//     [520, "120vw"],
//   ];

//   let height;
//   if (i > 2000) height = "800px";
//   else if (i < 2000 && i > 1000) height = "45vw";
//   else if (i < 1000 && i > 520) height = "100vw";
//   else if (i < 520) height = "120vw";
//   console.log(height);
//   return height;
// };

const Home2 = () => {
  return (
    <Home2Style
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="welcome"> welcome to </span>
        <span className="logo"> deepend </span>
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
    </Home2Style>
  );
};
export default Home2;
