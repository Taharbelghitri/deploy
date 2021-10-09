import styled from "styled-components";
import { motion } from "framer-motion";

const TopicHomeComponentsStyle = styled(motion.div)`
  position: relative;
  top: 10vw;
  margin-left: 5vw;
  margin-bottom: 10vw;
  width: 90vw;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  .title {
    padding: 40px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: rgba(31, 31, 31, 0.7);
    backdrop-filter: blur(5px);
    .mainTitle {
      font-size: 50px;
      color: #f1f1f1;
    }
    .posts {
      font-size: 18px;
      color: #f1f1f199;
      margin-top: 20px;
      margin-left: 10px;
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const TopicHomeComponents = () => {
  return (
    <TopicHomeComponentsStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.span
          className="mainTitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Travel category
        </motion.span>
        <motion.span
          className="posts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          240 article
        </motion.span>
      </motion.div>
    </TopicHomeComponentsStyle>
  );
};

export default TopicHomeComponents;
