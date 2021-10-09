import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import data from "../authorsData.json";
import events from "../events";

const AuthorstListStyle = styled(motion.div)`
  position: relative;
  margin-top: 100px;
  width: 93vw;
  margin-left: 5vw;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .Author {
    cursor: pointer;
    position: relative;
    margin-right: 50px;
    margin-top: 50px;
    width: 200px;
    height: 230px;
    background-color: ${(p) => p.theme.wColor};
    .AuthorBg {
      position: absolute;
      top: 0px;
      height: 100px;
      width: 200px;
      background-image: url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .authorDeatils {
      padding: 20px;
      padding-bottom: 10px;
      margin-top: 10px;
      z-index: 100;
      position: absolute;
      bottom: 00px;
      height: 180px;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 16px;
      color: ${(p) => p.theme.gColor};
      .AuthorPIc {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        background-image: url("https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 3px solid #f8f8ff;
      }
      .name {
        color: ${(p) => p.theme.dColor};
      }
    }
  }
  @media (max-width: 1000px) {
    .Author {
      margin-right: 10px;
      width: 170px;
      .AuthorBg {
        width: 170px;
      }
      .authorDeatils {
        width: 170px;
      }
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const AuthorsList = () => {
  const AuthorDb = data.authors;
  const history = useHistory();
  const shadow = "0 5px 20px 1px " + events.theme().gColor;
  return (
    <AuthorstListStyle>
      {AuthorDb.map((e, i) => {
        return (
          <motion.div
            className="Author"
            key={i}
            whileHover={{ boxShadow: shadow }}
            transition={{ duration: 0.3 }}
            onClick={() => history.push("/author")}
          >
            <div className="AuthorBg" />
            <div className="authorDeatils">
              <div
                className="AuthorPIc"
                style={{ backgroundImage: "url('" + e.picture + "')" }}
              />
              <span className="name">{e.name}</span>
              <span className="posts">
                {" "}
                {Math.floor(Math.random() * 120)} posts{" "}
              </span>
              <span className="startedAt">
                {" "}
                started at{" "}
                {Math.floor(Math.random() * 11 + 1) +
                  "/" +
                  Math.floor(Math.random() * 11 + 1) +
                  "/21"}{" "}
              </span>
            </div>
          </motion.div>
        );
      })}
    </AuthorstListStyle>
  );
};

export default AuthorsList;
