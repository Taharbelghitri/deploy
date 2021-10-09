import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleStatistic from "./articleStatisti.component";
import AuthorComponent from "./author.component";
import moreIcon from "../icons/more-icon.png";

const ReadArticleStyle2 = styled(motion.div)`
  width: 90vw;
  .articleCover {
    position: absolute;
    top: 2vw;
    width: 100%;
    height: 40vw;
    background-image: url("https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    max-width: 2000px;
    @media (min-width: 2000px) {
      width: 2000px;
      left: calc(50vw - 1000px);
    }
  }
  .content {
    position: relative;
    margin-top: 30vw;
    background-color: ${(p) => p.theme.bg};
    z-index: 1000;
    height: auto;
    width: 70%;
    margin-left: 20%;
    padding: 50px 50px 0 50px;
    margin-bottom: 150px;
    max-width: 1400px;
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

    .subTitle {
      position: relative;
      color: ${(p) => p.theme.gColor};
      top: 30px;
      margin-bottom: 50px;
      font-size: 18px;
      width: 800px;
    }
    .details {
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      width: 100%;
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
  }
  @media (max-width: 1440px) {
    .content {
      margin-top: 35vw;
      .title {
        width: 50vw;
        font-size: 30px;
      }
      .subTitle {
        height: auto;
        width: 60vw;
      }
    }
  }
  @media (max-width: 600px) {
    .content {
      margin-top: 40vw;
      width: 100vw;
      margin-left: 0;
      .title {
        width: 70vw;
        font-size: 30px;
      }
      .subTitle {
        height: auto;
        width: 90vw;
      }
      .details {
        .more {
          max-height: 30px;
          max-width: 30px;
          min-height: 30px;
          min-width: 30px;
          height: 30px;
          width: 30px;
        }
      }
    }
  }
  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(50vw - 1000px);
  }
`;
const ReadArticle2 = () => {
  return (
    <ReadArticleStyle2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="articleCover" />
      <div className="content">
        <div className="articleTag">
          <span>Travel</span>
        </div>
        <div className="title">
          The bad habits you should avoid in the big cities.
        </div>
        <ArticleStatistic />
        <div className="details">
          <AuthorComponent />
          <div className="more" />
        </div>
        <span className="subTitle">
          We’re an online magazine dedicated to covering the best in
          international product design. We started as a little blog back in 2002
          covering student work and over time
        </span>
      </div>
    </ReadArticleStyle2>
  );
};

export default ReadArticle2;
