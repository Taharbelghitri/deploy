import styled from "styled-components";
import { motion } from "framer-motion";
import data from "../authorsData.json";
import moreIcon from "../icons/more-icon.png";

const DashbordPostStyle = styled(motion.div)`
  position: relative;
  /* margin-top: 100px; */
  top: 0;
  left: 0;
  z-index: 10000;
  /* overflow: clip; */
  width: auto;
  background-color: ${(p) => p.theme.bg};
  opacity: 1;
  display: block;
  .titles {
    position: relative;
    width: 90vw;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    * {
      color: ${(p) => p.theme.wColor};
      font-size: 20px;
    }
    .article {
      display: flex;
      width: 400px;
    }
    .status {
      width: 100px;
      margin-left: 25px;
    }
    .more2 {
      position: relative;
      top: -2.5px;
      height: 15px;
      width: 15px;
      min-height: 15px;
      min-width: 15px;
      max-height: 15px;
      max-width: 15px;
      padding: 10px;

      margin-left: 13.5vw;
    }
  }
  .content {
    color: ${(p) => p.theme.wColor};
    margin-top: 50px;
    width: 90vw;
    position: relative;
    height: auto;
    display: flex;
    flex-wrap: nowrap;

    margin-bottom: 50px;
    .cover {
      height: 75px;
      width: 150px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
    }
    .title {
      white-space: pre-wrap;
      margin-left: 25px;
      width: 225px;
    }
    .status {
      width: 100px;
      /* color: #85ef90; */
      margin-left: 25px;
    }
    .payment {
      width: 200px;
      color: ${(p) => p.theme.gColor};
    }
    .more {
      position: relative;
      top: -2.5px;
      height: 15px;
      width: 15px;
      min-height: 15px;
      min-width: 15px;
      max-height: 15px;
      max-width: 15px;
      padding: 10px;
      border-radius: 100%;
      background-color: #191919;
      background-image: url(${moreIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
      cursor: pointer;
    }
  }
  @media (max-width: 700px) {
    .article {
      width: 12vw;
      min-width: 65vw;
      max-width: 800px;
    }
    .payment {
      display: none;
    }
    .status {
      margin-left: 10vw;
    }
  }
  @media (max-width: 500px) {
    .status {
      display: none;
    }
    .more {
      padding-left: 3vw;
    }
  }
`;
const DashbordPost = () => {
  const articles = data.articles;
  return (
    <DashbordPostStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="titles">
        <span className="article">Articles</span>
        <span className="status">Status</span>
        <span className="payment">Payment</span>
        <div className="more2"></div>
      </div>
      {articles.map((e, i) => {
        const IsActive = Math.random() * 2 > 0.5;
        return (
          <div key={i} className="content">
            <div
              className="cover"
              style={{ backgroundImage: "url('" + e.cover + "')" }}
            />
            <span className="title">{e.title}</span>
            <span
              className="status"
              style={{ color: IsActive ? "#85ef90" : "#fa6d6d" }}
            >
              {IsActive ? "Active" : "Desactive"}
            </span>
            <span className="payment">Not Applicable</span>
            <div className="more" />
          </div>
        );
      })}
    </DashbordPostStyle>
  );
};
export default DashbordPost;
