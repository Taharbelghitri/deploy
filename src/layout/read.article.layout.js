import { motion } from "framer-motion";
import styled from "styled-components";
import ArticleText from "../components/article.text.component";
import ReadArticle2 from "../components/read.article.2.component";
import ReadArticleComponent from "../components/read.article.component";

const ReadArticleLayoutStyle = styled(motion.div)``;

const ReadArticleLayout = ({ page = 0 }) => {
  return (
    <ReadArticleLayoutStyle>
      {page === 0 ? <ReadArticle2 /> : <ReadArticleComponent />}
      <div style={{ height: "10vw" }} />
      <ArticleText />
    </ReadArticleLayoutStyle>
  );
};
export default ReadArticleLayout;
