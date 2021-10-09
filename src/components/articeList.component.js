import styled from "styled-components";
import { motion } from "framer-motion";
import SlideComponent from "./slideArticle.component";

const ArticleListComponentStyle = styled(motion.div)``;

const ArticleListComponent = ({ articlesNumber }) => {
  if (!articlesNumber) articlesNumber = 3;
  let articleArray = [];
  articleArray.length = articlesNumber;
  return (
    <ArticleListComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {[1, 1, 1].map((e, i) => {
        return <SlideComponent key={i} />;
      })}
    </ArticleListComponentStyle>
  );
};

export default ArticleListComponent;
