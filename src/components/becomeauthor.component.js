import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const BecomeAuthorStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin-left: 5vw;
  margin-top: 150px;
  margin-bottom: 100px;
  max-width: 1800px;
  .topTitle {
    font-size: 16px;
    color: ${(p) => p.theme.gColor};
    margin-bottom: 30px;
  }
  .botton {
    position: relative;
    padding: 10px;
    background-color: ${(p) => p.theme.sColor};
    width: 200px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-size: 20px;
    margin-top: 5vw;
    span {
      cursor: pointer;
    }
  }
  .title {
    display: flex;
    align-items: flex-end;
    position: relative;
    height: auto;
    .mainTitle {
      font-size: 50px;
      color: ${(p) => p.theme.wColor};
      width: 90%;
      bottom: 0;
    }
    .subTitle {
      width: 100%;
      color: ${(p) => p.theme.gColor};
    }
  }
  @media (max-width: 1150px) {
    height: auto;
    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      * {
        left: 0;
        width: 90vw;
        margin-bottom: 50px;
      }
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;
const BecomeAuthor = () => {
  const history = useHistory();
  return (
    <BecomeAuthorStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <span className="topTitle">super change you plannig power</span>
      <div className="title">
        <span className="mainTitle">
          Become an author <br></br> and share your great stories
        </span>
        <span className="subTitle">
          Become an author you can earn extra income by writing articles. Read
          and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
      </div>
      <div className="botton">
        <span onClick={() => history.push("/signin")}> Become an author</span>
      </div>
    </BecomeAuthorStyle>
  );
};

export default BecomeAuthor;
