import styled from "styled-components";
import { motion } from "framer-motion";
import AuthorComponent from "./author.component";
import ArticleStatistic from "./articleStatisti.component";
import moreIcon from "../icons/more-icon.png";

const ReadArticleComponentStyle = styled(motion.div)`
  position: relative;
  top: 10vw;
  width: 90vw;
  left: 5vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  .articleTag {
    margin-bottom: 50px;
    span {
      padding: 10px;
      background-color: ${(p) => p.theme.sColor};
      color: ${(p) => p.theme.dColor};
    }
  }
  .title {
    font-size: 50px;
    color: ${(p) => p.theme.wColor};
    width: 800px;
    margin-bottom: 50px;
  }
  .articleCover {
    margin-top: 100px;
    height: 50vw;
    max-height: 500px;
    width: 88vw;
    max-width: 1500px;
    background-image: url("https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }
  .subTitle {
    color: ${(p) => p.theme.gColor};
    margin-bottom: 50px;
    font-size: 18px;
    width: 800px;
  }
  .details {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    width: 825px;
    justify-content: space-between;
    .more {
      height: 20px;
      width: 20px;
      padding: 1vw;
      cursor: pointer;
      background-image: url(${moreIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
    }
  }
  @media (max-width: 1100px) {
    .title {
      font-size: 30px;
      width: 90vw;
    }
    .subTitle {
      font-size: 16px;
      width: 90vw;
    }
    .details {
      width: 90vw;
    }
  }
  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(50vw - 1000px);
    .articleCover {
      width: 1500px;
    }
  }
`;
const ReadArticleComponent = () => {
  return (
    <ReadArticleComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {window.scrollTo(0, 0)}
      <div className="articleTag">
        <span>travel</span>
      </div>
      <div className="title">
        The bad habits you should avoid in the big cities.
      </div>
      <span className="subTitle">
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time
      </span>
      <ArticleStatistic />
      <div className="details">
        <AuthorComponent />
        <div className="more" />
      </div>
      <div className="articleCover" />
    </ReadArticleComponentStyle>
  );
};
export default ReadArticleComponent;
