import styled from "styled-components";
import { motion } from "framer-motion";
import TitleComponent from "../components/title.component";
import SecondArticleComponent from "../components/article2.component";

const SecondArticleLayoutstyle = styled(motion.div)``;

const SecondArticleLayout = () => {
  return (
    <>
      <TitleComponent
        styles=" margin-top : 150px"
        text={{
          title: "Latest articels",
          subTitle:
            "Discover the most outstanding articles in all topics of life.",
        }}
        colors={{ subTitle: "#8A8888", title: "#F8F8FF" }}
      />
      <SecondArticleLayoutstyle>
        <SecondArticleComponent />
      </SecondArticleLayoutstyle>
    </>
  );
};

export default SecondArticleLayout;
