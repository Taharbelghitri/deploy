import styled from "styled-components";
import { motion } from "framer-motion";
import likeIcons from "../icons/like-icon.png";
import viewIcons from "../icons/seen-icon.png";
import commentIcon from "../icons/comment-icon.png";

const ArticleStatisticStyle = styled(motion.div)`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  .likes,
  .views,
  .comments {
    width: auto;
    height: 20px;
    display: flex;
    flex-direction: row;
    padding: 5px;
    justify-content: center;
    align-items: flex-end;
    margin-right: 20px;
    cursor: pointer;
  }
  .likeIcon,
  .viewIcon,
  .commentIcon {
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }
  .likes {
    color: #fa6d6d;
  }
  .comments {
    color: #85ef90;
  }
  .views {
    color: #768bfb;
  }
  .likeIcon {
    background-image: url("${likeIcons}");
  }
  .viewIcon {
    background-image: url("${viewIcons}");
  }
  .commentIcon {
    background-image: url("${commentIcon}");
  }
  ${(p) => p.styles}
`;

const ArticleStatistic = ({ statistic, styles }) => {
  return (
    <ArticleStatisticStyle styles={styles}>
      <motion.div className="likes" whileHover={{ scale: 1.1 }}>
        <div className="likeIcon" />
        <span>{statistic || Math.floor(Math.random() * 500)} </span>
      </motion.div>
      <motion.div className="comments" whileHover={{ scale: 1.1 }}>
        <div className="commentIcon" />
        <span>{statistic || Math.floor(Math.random() * 100)} </span>
      </motion.div>
      <motion.div className="views" whileHover={{ scale: 1.1 }}>
        <div className="viewIcon" />
        <span>{statistic || Math.floor(Math.random() * 1000)} </span>
      </motion.div>
    </ArticleStatisticStyle>
  );
};

export default ArticleStatistic;
