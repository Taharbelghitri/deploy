import styled from "styled-components";
import { motion } from "framer-motion";
import TitleComponent from "../components/title.component";
import Topics from "../components/topics.component";

const TopicsLayoutStyle = styled(motion.div)``;

const TopicsLayout = () => {
  return (
    <>
      <TitleComponent
        styles={` margin-top: 200px;`}
        text={{
          title: "Top 10 trending topics",
          subTitle:
            "Discover the most outstanding articles in all topics of life.",
        }}
        colors={{ title: "#F8F8FF", subTitle: "#F2C14E" }}
      />
      <TopicsLayoutStyle>
        <Topics />
      </TopicsLayoutStyle>
    </>
  );
};

export default TopicsLayout;
