import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleStatistic from "./articleStatisti.component";
import AuthorComponent from "./author.component";
import { useHistory } from "react-router";
import data from "../authorsData.json";

const ArticleComponentStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  width: auto;
  max-width: 400px;
  .articleType {
    position: absolute;
    top: 0;
    padding: 10px;
    background-color: #53504d;
    color: #f8f8ff;
    cursor: pointer;
    max-width: 400px;
  }
  .ArticleCover {
    width: 40vw;
    max-width: 400px;
    height: 20vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .ArticleTitle {
    font-size: 24px;
    color: ${(p) => p.theme.wColor};
    margin-bottom: 10px;
    cursor: pointer;
    width: 30vw;
    max-width: 400px;
  }
  .subTitle {
    font-size: 16px;
    max-width: 400px;
    color: ${(p) => p.theme.gColor};
    margin-bottom: 20px;
    cursor: pointer;
  }
  ${(p) => p.styles}
  max-height: 400px;
  @media (max-width: 1000px) {
    margin-right: 5vw;
    width: 90vw;
    .ArticleTitle {
      width: 90vw;
      max-width: none;
    }
    .ArticleCover {
      width: 90vw;
      height: 30vw;
      max-width: none;
    }
  }
`;

const ArticleComponent = ({ styles = "" }) => {
  const history = useHistory();
  const { title, subTitle, cover } =
    data.articles[Math.floor(Math.random() * data.articles.length)];

  return (
    <ArticleComponentStyle
      styles={styles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onClick={() => history.push("/article")}
    >
      <div
        className="ArticleCover"
        style={{ backgroundImage: "url('" + cover + "')" }}
      />
      <span className="ArticleTitle">{title}</span>
      <span className="subTitle">{subTitle}</span>
      <ArticleStatistic />
      <AuthorComponent />
    </ArticleComponentStyle>
  );

  return <div></div>;
};
export default ArticleComponent;
