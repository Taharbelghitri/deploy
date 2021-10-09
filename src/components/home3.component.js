import { motion } from "framer-motion";
import styled from "styled-components";

const HomeComponentStyle = styled(motion.div)`
  position: relative;
  left: 5vw;
  padding-top: 7vw;
  padding-bottom: 7vw;
  display: flex;
  flex-direction: row;
  height: 1100px;
  width: 90vw;
  font-size: 18px;
  .introBg {
    position: absolute;
    margin-top: 500px;
    background-image: url("https://images.pexels.com/photos/3304170/pexels-photo-3304170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-position: 0 -1000px;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    width: 90vw;
    height: 600px;
    max-width: 1440px;
    @media (max-width: 1350px) {
      background-position: 0 -800px;
    }

    @media (max-width: 1150px) {
      background-position: center;
      margin-top: 550px;
    }
  }

  .intro {
    display: flex;
    flex-direction: column;
    height: 600px;
  }
  .logo {
    margin-top: 30px;
    font-size: 100px;
    margin-bottom: 30px;
    color: ${(p) => p.theme.wColor};
  }
  .welcome {
    color: ${(p) => p.theme.gColor};
    width: 300px;
  }

  .aboutUs {
    height: auto;
    width: 330px;
    position: absolute;
    bottom: 0;
    margin-top: 00px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${(p) => p.theme.gColor};
  }

  .text {
    color: ${(p) => p.theme.gColor};
    width: 100%;
  }
  .styled {
    margin-left: 10vw;
    margin-top: 100px;
    position: relative;
    height: 300px;
    display: flex;
    flex-direction: column;
    width: auto;
  }
  @media (max-width: 1200px) {
    top: 10vw;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    top: 20vw;
    .intro {
      height: 200px;
      .logo {
        font-size: 50px;
      }
    }
    .styled {
      margin-top: 0;
      margin-bottom: 5vw;
      * {
        position: relative;
        margin-top: 0;
      }
      .text {
        width: auto;
        margin-bottom: 10vw;
      }
      margin-top: 0;
      margin-left: 0;
      height: auto;
      top: 0;
      .introBg {
        margin-top: 550px;
      }
      .aboutUs {
        position: relative;
        width: 250px;
        span {
          white-space: pre-wrap;
        }
      }
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    max-width: calc(2000px - 5vw);
    margin-left: calc(50vw - 1000px);
    * {
      max-width: calc(2000px - 5vw);
    }
  }
`;

const HomeComponent3 = () => {
  return (
    <HomeComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.div
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <span className="welcome"> welcome to </span>
        <span className="logo"> deepend </span>
      </motion.div>
      <motion.div
        className="styled"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="text">
          “We Become What We Think About.” <br /> -Earl Nightingale
        </span>

        <div className="aboutUs">
          <span>_ we gave our visitor what they exactly want to read </span>
          <span>
            _ simple title with deep content could make them read the articles
            three times or more
          </span>
          <span>
            _ many articles type because of the good trafic we have and our
            newest authors ebery day
          </span>
        </div>
      </motion.div>
      <motion.div
        className="introBg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </HomeComponentStyle>
  );
};
export default HomeComponent3;
