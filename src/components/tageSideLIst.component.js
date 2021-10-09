import styled from "styled-components";
import { motion } from "framer-motion";
import events from "../events";

const TagSideListStyle = styled(motion.div)`
  background-color: ${(p) => p.theme.bg};
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 30vw;
  max-width: 500px;
  span {
    padding: 10px;
    background-color: ${(p) => p.theme.wColor};
    color: ${(p) => p.theme.dColor};
    margin: 10px;
    font-size: 14px;
    cursor: pointer;
  }
  .title {
    cursor: auto;
    position: relative;
    width: 100%;
    font-size: 32px;
    color: ${(p) => p.theme.wColor};
    margin-bottom: 10px;
    padding-bottom: 10px;
    padding-left: 0;
    background-color: inherit;
  }
  @media (max-width: 1250px) {
    .title {
      font-size: 32px;
    }
    width: auto;
  }
`;

const tags = `
Garden (13)_Jewelry (16)_Industrial (15)_Tools (21)_Automotive (16)_Toys (25)_Outdoors (14)_Health (4)_Electronics (7)_Industrial (26)_Health (20)_Toys (22)_Sports (15)_Automotive (9)_Computers (26)_Design (15)_Beauty (27)_Books (25)_`;

const TagSideList = () => {
  return (
    <TagSideListStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <span className="title"> Discover more tags </span>
      {tags.split("_").map((e, i) => {
        if (e !== "")
          return (
            <motion.span
              key={i}
              className="tag"
              transition={{ duration: 0.2 }}
              whileHover={{
                backgroundColor: events.theme().dColor,
                color: events.theme().wColor,
              }}
            >
              {e}
            </motion.span>
          );
        else return "";
      })}
    </TagSideListStyle>
  );
};

export default TagSideList;
