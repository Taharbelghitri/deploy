import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import TopicsData from "../authorsData.json";
import events from "../events";

const TopicsStyle = styled(motion.div)`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  margin-left: 5vw;
  justify-content: space-between;
  .topic {
    height: 240px;
    width: 200px;
    margin-right: 40px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    .details {
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        font-size: 24px;
        color: ${(p) => p.theme.wColor};
        cursor: pointer;
      }
      .postsNUmber {
        font-size: 16px;
        color: ${(p) => p.theme.gColor};
        cursor: pointer;
      }
    }
    .topicCover {
      width: 180px;
      height: 150px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
      cursor: pointer;
    }
  }
  /* @media (max-width: 1200px) {
    flex-direction: column;
    background-color: #f8f8ff;
    .topic {
      width: 90vw;
      .topicCover {
        width: 40vw;
      }
    }
  } */
  /* @media (max-width: 800px) {
    .topic {
      width: 140px;
      margin-right: 20px;
      .topicCover {
        width: 150px;
      }
    }
  } */
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const Topics = () => {
  const history = useHistory();
  return (
    <TopicsStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onClick={() => history.push("/topics")}
    >
      {TopicsData.topics.map((e, i) => {
        return (
          <motion.div
            className="topic"
            key={i}
            whileHover={{ scale: 1.1, backgroundColor: events.theme().sColor }}
          >
            <div className="details">
              <span className="title">{e.topic}</span>
              <span className="postsNUmber">
                {" "}
                {Math.floor(Math.random() * 1000)} post{" "}
              </span>
            </div>
            <div
              className="topicCover"
              style={{ backgroundImage: "url('" + e.topicCver + "')" }}
            />
          </motion.div>
        );
      })}
    </TopicsStyle>
  );
};

export default Topics;
