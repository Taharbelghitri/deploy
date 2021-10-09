import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleListComponent from "../components/articeList.component";
import TitleComponent from "../components/title.component";
import ArticleComponent from "../components/article.component";
import TagLIstComponent from "../components/tagList.component";

const LatestArticlesLayoutStyle = styled(motion.div)`
  position: relative;
  height: auto;
  width: 70vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
  @media (max-width: 1100px) {
    width: 90%;
    flex-direction: column;
  }
  @media (min-width: 1100px) {
    width: 90%;
    justify-content: space-between;
    max-width: 1500px;
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const LatestArticlesLayout = () => {
  return (
    <>
      <TitleComponent
        styles={`  margin-top : 100px`}
        text={{
          title: "Latest articles",
          subTitle:
            "Discover the most outstanding articles in all topics of life.",
        }}
        colors={{ title: "#F8F8FF", subTitle: "#8A8888" }}
      />
      <TagLIstComponent
        list={false}
        styles={"margin-left : 5vw ; margin-top : 100px"}
      />
      <LatestArticlesLayoutStyle>
        <ArticleComponent />
        <ArticleListComponent />
      </LatestArticlesLayoutStyle>
    </>
  );
};
export default LatestArticlesLayout;
