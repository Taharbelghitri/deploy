import styled from "styled-components";
import { motion } from "framer-motion";
import TitleComponent from "../components/title.component";
import ArticleComponent from "../components/article.component";

const MoreArticlesLayoutStyle = styled(motion.div)`
  position: relative;
  width: 90vw;
  margin-top: 150px;
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .ArticleTitle {
    font-size: 1;
  }
  @media (max-width: 1100px) {
    display: flex;
    /* flex-direction: column; */
    .ArticleCover {
      width: 90vw;
    }
  }
  /* @media (max-width: 700px) {
    width: 100%;
  } */
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const MoreArticlesLayout = ({ length = 6, title }) => {
  const articles = [];
  for (let index = 0; index < length; index++) {
    articles.push(
      <ArticleComponent key={index} styles="margin-top : 30px ; " />
    );
  }

  return (
    <>
      <TitleComponent
        styles="margin-top : 200px"
        colors={{ title: "#F8F8FF", subTitle: "#8A8888" }}
        text={{
          title: title || "More travel articles",
          subTitle:
            "More than 250 articles talked just about health and gave many new views for the readers, and we are sure that it’s can change your life ",
        }}
      />
      <MoreArticlesLayoutStyle>{articles}</MoreArticlesLayoutStyle>
    </>
  );
};
export default MoreArticlesLayout;
