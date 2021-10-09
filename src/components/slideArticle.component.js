import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleStatistic from "./articleStatisti.component";
import AuthorComponent from "./author.component";
import { useHistory } from "react-router-dom";
import data from "../authorsData.json";

const SlideComponentStyle = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  padding: 20px;
  padding-top: 0;
  padding-right: 0;
  font-size: 16px;
  margin-bottom: 50px;
  .articleCover {
    height: 150px;
    width: 400px;
    margin-right: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }
  .ArticleDetails {
    position: relative;
    height: 130px;
    width: 390px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    .title {
      color: ${(p) => p.theme.wColor};
      position: absolute;
      top: 0;
      font-size: 18px;
    }
  }
  @media (max-width: 1860px) {
    .articleCover {
      width: 250px;
    }
  }
  @media (max-width: 1500px) {
    width: 40vw;
  }

  @media (max-width: 1100px) {
    margin-top: 50px;
    width: 60vw;
    margin-left: 0;
    padding-left: 0;
    &:first-child {
      margin-top: 100px;
    }
  }
  @media (max-width: 800px) {
    .articleCover {
      min-width: 150px;
    }
    .ArticleDetails {
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      title {
        font-size: 16px;
        width: 100%;
        min-width: 100%;
        max-height: 38px;
        overflow-y: hidden;
      }
    }
  }
  @media (max-width: 500px) {
    overflow-y: clip;
    .articleCover {
      min-width: 150px;
    }
    .ArticleDetails {
      flex-wrap: wrap;
      font-size: 16px;
      width: 50%;
      min-width: 50%;

      .title {
        font-size: 16px;
        width: 100%;
        min-width: 100%;
        max-height: 33px;
        overflow-y: hidden;
      }
      /* width: 500px; */
    }
  }
  @media (max-width: 360px) {
    .articleCover {
      min-width: 150px;
    }
    .ArticleDetails {
      flex-wrap: wrap;
      font-size: 16px;
      width: 70%;
      min-width: 70%;
      .title {
        min-width: 100%;
        font-size: 16px;
        width: 100%;
        max-height: 33px;
        overflow-y: hidden;
      }
      /* width: 500px; */
    }
  }
`;

const SlideComponent = () => {
  const history = useHistory();
  const { title, cover } =
    data.articles[Math.floor(Math.random() * data.articles.length)];
  return (
    <SlideComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onClick={() => history.push("/article")}
    >
      <div
        className="articleCover"
        style={{ backgroundImage: "url('" + cover + "')" }}
      />
      <div className="ArticleDetails">
        <span className="title">{title}</span>
        {/* <span className="subTitle">{subTitle}</span> */}
        <ArticleStatistic
          styles={`span { font-size : 14px ;}  
        
        @media(max-width : 400px){
          display : none;
        }
        `}
        />
        <AuthorComponent
          styles={`
            span { font-size : 14px ; }
            .authorPIc {
                height : 30px ;
                width :30px;
            }
            .startedAt{
                display : none;
            }
             @media(max-width : 400px){
          display : none;
        }
        `}
        />
      </div>
    </SlideComponentStyle>
  );
};

export default SlideComponent;
