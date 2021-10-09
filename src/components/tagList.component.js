import styled from "styled-components";
import { motion } from "framer-motion";
import events from "../events";

const TagLIstComponentStyle = styled(motion.div)`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
  margin-bottom: 50px;
  ${(p) => p.styles};
  .tag {
    width: auto;
    height: auto;
    padding: 10px;
    margin-right: 20px;
    color: ${(p) => p.theme.gColor};
    cursor: pointer;
  }
  .tagmedia {
    color: ${(p) => p.theme.sColor};
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const TagLIstComponent = ({ list = [], styles = "" }) => {
  return (
    <TagLIstComponentStyle
      styles={styles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {(list || ["health", "traveling", "media", "news", "psychologie"]).map(
        (e, i) => {
          return (
            <motion.span
              key={i}
              whileHover={{
                backgroundColor: events.theme().wColor,
                color: events.theme().dColor,
              }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className={"tag tag" + e}
            >
              {e}
            </motion.span>
          );
        }
      )}
    </TagLIstComponentStyle>
  );
};

export default TagLIstComponent;
