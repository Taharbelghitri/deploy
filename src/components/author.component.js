import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import data from "../authorsData.json";
import events from "../events";

const AuthorComponentStyle = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 40px;
  margin-top: 10px;
  .authorPIc {
    height: 40px;
    width: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    border-radius: 100%;
    margin-right: 10px;
    cursor: pointer;
  }
  .authorDetails {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .name {
      font-size: 16px;
      cursor: pointer;
    }
    .startedAt {
      font-size: 16px;
      color: ${(p) => p.theme.gColor};
      cursor: pointer;
    }
  }
  ${(p) => p.styles}
`;

const AuthorComponent = ({
  author = {},
  styles = "",
  styleAnimation = {},
  controllers,
  nameColor = events.theme().wColor,
}) => {
  const random = Math.floor(Math.random() * data.authors.length);
  const AuthorDb = data.authors[random];
  const history = useHistory();
  return (
    <AuthorComponentStyle
      styles={styles}
      whileHover={styleAnimation}
      onClick={() => history.push("/author")}
    >
      <div
        className="authorPIc"
        style={{ backgroundImage: "url('" + AuthorDb.picture + "')" }}
      />
      <div className="authorDetails">
        <motion.span
          className="name"
          animate={controllers}
          style={{ color: nameColor }}
        >
          {AuthorDb.name}
        </motion.span>
        {author ? "" : ""}
        <span className="startedAt">
          {Math.floor(Math.random() * 12) +
            "/" +
            Math.floor(Math.random() * 12) +
            "/21"}
        </span>
      </div>
    </AuthorComponentStyle>
  );
};
export default AuthorComponent;
