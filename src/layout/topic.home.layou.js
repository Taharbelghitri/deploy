import styled from "styled-components";
import { motion } from "framer-motion";
import TopicHomeComponents from "../components/topic.home.component";

const TopicHomeLayoutStyle = styled(motion.div)``;
const TopicHomeLayout = () => {
  return (
    <TopicHomeLayoutStyle>
      <TopicHomeComponents />
    </TopicHomeLayoutStyle>
  );
};

export default TopicHomeLayout;
