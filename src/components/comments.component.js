import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleStatistic from "./articleStatisti.component";
import moreIcon from "../icons/more-icon.png";
import data from "../authorsData.json";

const CommentsComponentStyle = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  /* border-left: 1px solid #f8f8ff; */
  margin-left: -5px;
  padding-left: 10vw;
  max-width: 800px;
  padding-top: 50px;
  max-width: 1000px;
  .commentInfo {
    margin-bottom: 20px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .userName {
      color: ${(p) => p.theme.sColor};
      font-size: 24px;
      margin-left: 20px;
    }
    .userPic {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .more {
      position: absolute;
      right: 0;
      float: right;
      max-height: 20px;
      max-width: 20px;
      padding: 10px;
      cursor: pointer;
      background-image: url(${moreIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
    }
  }
  .content {
    font-size: 24px;
    color: ${(p) => p.theme.wColor};
  }
  .replay {
    position: relative;
    margin-left: 0px;
    height: auto;
    width: 500px;
    border-left: 1px solid ${(p) => p.theme.wColor};
  }
  .load {
    width: 130px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 20px;
    color: ${(p) => p.theme.wColor};
  }
  @media (max-width: 1000px) {
    width: 90vw;
    .replay {
      width: 20vw;
    }
  }
  @media (max-width: 500px) {
    .replay {
      width: 70vw;
      .commentInfo {
        align-items: flex-start;
        flex-direction: column;
        .userName {
          margin-top: 3vw;
          color: ${(p) => p.theme.sColor};
          font-size: 20px;
          margin-left: 00px;
        }
        .userPic {
          height: 30px;
          width: 30px;
          min-width: 30px;
          min-height: 30px;

          border-radius: 100%;
        }
        .more {
          height: 30px;
          width: 30px;
          min-height: 30px;
          min-width: 30px;
        }
      }
    }
  }

  @media (min-width: 2000px) {
    left: calc(50vw - 1000px);
    margin-left: 100px;
    padding-left: 0vw;
    padding: 0;
    margin: 0;
    .replay {
      position: relative;
      right: 0;
      left: 0;
      padding: 0;
      margin: 0;
      * {
        left: 10vw;
      }
    }
  }
`;

const CommentsComponent = ({ array = [1, 1, 1] }) => {
  const AuthorDb = data.authors;
  return (
    <CommentsComponentStyle>
      <div className="commentInfo">
        <div
          className="userPic"
          style={{
            backgroundImage:
              "url('" + AuthorDb[Math.floor(Math.random() * 7)].picture + "')",
          }}
        />
        <span className="userName">
          {AuthorDb[Math.floor(Math.random() * 7)].name}
        </span>
        <div className="more" />
      </div>
      <span className="content">
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.
        Morbi ut odio.
      </span>
      <ArticleStatistic
        styles={`views { display : none }  margin-top : 30px ; @media (max-width: 500px) { width: 280px; }`}
      />
      <span className="load">load more +{Math.floor(Math.random() * 20)}</span>
      <div className="replay">
        {array.map((e, i) => {
          return (
            <CommentsComponentStyle key={i}>
              <div className="commentInfo">
                <div
                  className="userPic"
                  style={{
                    backgroundImage:
                      "url('" +
                      AuthorDb[Math.floor(Math.random() * 7)].picture +
                      "')",
                  }}
                />
                <span className="userName">
                  {AuthorDb[Math.floor(Math.random() * 7)].name}
                </span>
                <div className="more" />
              </div>
              <span className="content">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo. Morbi ut odio.
              </span>
              <ArticleStatistic
                styles={".views { display : none }  margin-top : 2vw ;"}
              />
            </CommentsComponentStyle>
          );
        })}
      </div>
    </CommentsComponentStyle>
  );
};
export default CommentsComponent;
