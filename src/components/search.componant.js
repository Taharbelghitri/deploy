import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import searchIcon from "../icons/search-icon.png";

const SearchComponentStyle = styled(motion.div)`
  margin-top: 10vw;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  width: 90vw;
  .searchBar {
    display: flex;
    padding: 2vw;
    width: 50vw;
    background-color: ${(p) => p.theme.wColor};
    input {
      outline: none;
      width: 100%;
      font-size: 20px;
      color: ${(p) => p.theme.dColor};
      padding-left: 1vw;
      border: none;
      background-color: ${(p) => p.theme.wColor};
      border-bottom: 2px solid #191919;
    }
    input::placeholder {
      outline: none;
      font-size: 20px;
      color: ${(p) => p.theme.dColor};
    }
    input:focus {
      outline: none;
      border: none;
      border-bottom: 2px solid red;
    }
    .icon {
      height: 30px;
      width: 30px;
      min-height: 30px;
      min-width: 30px;
      margin-right: 3vw;
      background-image: url(${searchIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
    }
  }
  .suggest {
    height: auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0;
    .title {
      padding: 1vw;
      font-size: 24px;
      color: ${(p) => p.theme.gColor};
      opacity: 0;
      background-color: ${(p) => p.theme.wColor};
      padding-left: 2vw;
    }
    .result {
      background-color: aqua;
      font-size: 24px;
      opacity: 0;
      max-height: 10vw;
      color: ${(p) => p.theme.gColor};
      background-color: ${(p) => p.theme.wColor};
      height: calc(24px + 2vw);
      display: flex;
      align-items: center;
      div {
        padding: 0.5vw;
        margin-left: 1vw;
      }
      span {
        cursor: pointer;
        padding: 0.5vw;
      }
      .span {
        padding: 0.5vw;
        cursor: pointer;
        color: #8a8888;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 800px) {
    .searchBar {
      width: 100%;
    }
    .suggest {
      * {
        width: 90vw;
      }
    }
  }
  @media (max-width: 400px) {
    margin-left: 2vw;
    width: 95vw;
    .suggest {
      * {
        width: 95vw;
      }
    }
  }
`;

const SearchComponent = () => {
  const controller = useAnimation();

  return (
    <SearchComponentStyle
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="searchBar">
        <div className="icon" />
        <input
          placeholder={"react"}
          onClick={() => {
            controller.start({ opacity: 1 });
          }}
        />
      </div>
      <motion.div
        className="suggest"
        animate={controller}
        transition={{
          duration: 0.3,
        }}
      >
        <motion.span
          className="title"
          animate={controller}
          transition={{
            duration: 0.3,
          }}
        >
          suggestion <span className="searchData"> "react" </span>
        </motion.span>
        <motion.span
          className="result"
          animate={controller}
          transition={{
            height: { delay: 0.2, duration: 0.5 },
            opacity: { delay: 0.25, duration: 0.5 },
          }}
        >
          <motion.div>
            <span>top technologie</span>
            <span className="span"> 201 article </span>
          </motion.div>
        </motion.span>
        <motion.span
          className="result"
          animate={controller}
          transition={{
            height: { delay: 0.5, duration: 0.5 },
            opacity: { delay: 0.6, duration: 0.5 },
          }}
        >
          <div>
            <span>modern design</span> <span className="span">21 article </span>
          </div>
        </motion.span>

        <motion.span
          className="result"
          animate={controller}
          transition={{
            height: { delay: 0.8, duration: 0.5 },
            opacity: { delay: 0.95, duration: 0.5 },
          }}
        >
          <div>
            <span>responsive websites</span>
            <span className="span"> 150 article </span>
          </div>
        </motion.span>
      </motion.div>
    </SearchComponentStyle>
  );
};
export default SearchComponent;
