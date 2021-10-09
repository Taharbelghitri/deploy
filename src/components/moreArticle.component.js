import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleListComponent from "./articeList.component";

const MoreArticlesStyle = styled(motion.div)``;

const MoreArticles = () => {
  return (
    <MoreArticlesStyle>
      <ArticleListComponent />
      <ArticleListComponent />
      <ArticleListComponent />
    </MoreArticlesStyle>
  );
};

export default MoreArticles;
