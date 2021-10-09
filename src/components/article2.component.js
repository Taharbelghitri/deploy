import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import AuthorComponent from "./author.component";
import TagSideList from "./tageSideLIst.component";
import SlideAuthors from "./slideAuthors.component";
import { useHistory } from "react-router-dom";
import data from "../authorsData.json";
import events from "../events";

const SecondArticleComponentstyStyle = styled(motion.div)`
  width: 90vw;
  margin-left: 5vw;
  margin-top: 150px;
  background-color: ${(p) => p.theme.wColor};
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
  height: auto;
  position: relative;
  margin-bottom: 20px;
  max-width: 1500px;
  justify-content: center;
  .articels {
    position: relative;
    width: 600px;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-right: 10vw;
    .article {
      display: flex;
      height: auto;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 2vw;
      padding: 2vw;
      cursor: pointer;
      .articleCover {
        height: 150px;
        min-width: 150px;
        max-height: 150px;
        width: 200px;
        min-width: 200px;
        max-width: 200px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-clip: border-box;
      }
      .articleDeatils {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 20px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .mainTitle {
            margin-right: 20px;
            color: ${(p) => p.theme.dColor};
          }
          .articleType {
            color: #679267;
            margin-right: 20px;
          }
        }
        .subTitle {
          color: ${(p) => p.theme.gColor};
          font-size: 16px;
        }
      }

      @media (max-width: 750px) {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        .articleDeatils {
          margin-right: 0;
        }
        .articleCover {
          margin-bottom: 20px;
        }
      }
    }
    .article:last-child {
      margin-bottom: 0;
    }
  }
  .tags {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
  }

  .tagSection:first-child {
    margin-top: 0;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    margin-left: 3vw;
    .articels {
      width: 100%;
      .articleDeatils {
        margin-right: 20px;
      }
    }
    .tags {
      margin-top: 100px;
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const AuthorListElemnt = ({ ArticleTitle, cover, subtitle }) => {
  const title = useAnimation();
  const authorName = useAnimation();
  const history = useHistory();
  return (
    <motion.div
      className="article"
      whileHover={{ backgroundColor: events.theme().dColor }}
      onHoverStart={() => {
        title.start({ color: events.theme().wColor });
        authorName.start({ color: events.theme().wColor });
      }}
      onHoverEnd={() => {
        title.start({ color: events.theme().dColor });
        authorName.start({ color: events.theme().dColor });
      }}
      onClick={() => {
        history.push("article");
      }}
    >
      <div className="articleDeatils">
        <motion.div className="title">
          <motion.span
            className="mainTitle"
            animate={title}
            transition={{ duration: 0.2 }}
          >
            {ArticleTitle}
          </motion.span>
          {/* <span className="articleType"> health </span> */}
        </motion.div>
        <span className="subTitle">{subtitle}</span>
        <AuthorComponent
          controllers={authorName}
          nameColor={events.theme().dColor}
        />
      </div>
      <div
        className="articleCover"
        style={{ backgroundImage: "url('" + cover + "')" }}
      />
    </motion.div>
  );
};

const SecondArticleComponent = () => {
  const articles = data.articles;
  console.log(articles);
  return (
    <SecondArticleComponentstyStyle>
      <div className="articels ">
        {articles.map((e, i) => (
          <AuthorListElemnt
            ArticleTitle={e.title}
            cover={e.cover}
            subtitle={e.subtitle}
            key={i}
          />
        ))}
      </div>
      <div className="tags">
        <TagSideList />
        <SlideAuthors />
        <TagSideList />
        <SlideAuthors />
      </div>
    </SecondArticleComponentstyStyle>
  );
};
export default SecondArticleComponent;
