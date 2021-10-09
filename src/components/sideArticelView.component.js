import styled from "styled-components";
import { motion } from "framer-motion";
import AuthorComponent from "./author.component";

const SideArticleViewStyle = styled(motion.div)`
  padding: 10px;
  padding-top: 50px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  .mainTitle {
    position: relative;
    font-size: 20px;
    color: #1b1811;
    margin-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .articles {
    position: relative;
    display: flex;
    flex-direction: row;
    color: #1b1811;
    padding: 10px;
    margin-bottom: 30px;
    width: 360px;
    .articleCover {
      height: 100px;
      width: 150px;
      max-width: 20vw;
      background-color: green;
    }
    .authorDetails {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-right: 20px;
      width: 210px;
      .title {
        margin-left: 00px;
        font-size: 20px;
        color: #1b1811;
      }
    }
  }
  @media (max-width: 1100px) {
    padding-left: 0;

    display: flex;
    flex-wrap: wrap;
    background-color: darkorchid;

    * {
      margin-left: 0;
    }
  }
`;

const SideArticleView = () => {
  return (
    <SideArticleViewStyle>
      <span className="mainTitle"> More articles </span>
      {[1, 1, 1, 1, 1, 1].map((e, i) => {
        return (
          <div className="articles" key={i}>
            <div className="authorDetails">
              <span className="title">
                side article title side article title side article title
              </span>
              <AuthorComponent
                styles=".authorDetails {
                .name {
                font-size: 16px;
                color: #223222;
                }
                margin-right: 20px ;
            }  width: auto ;"
              />
            </div>
            <div className="articleCover" />
          </div>
        );
      })}
    </SideArticleViewStyle>
  );
};

export default SideArticleView;
