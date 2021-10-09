import styled from "styled-components";
import { motion } from "framer-motion";

const TitleComponentStyle = styled(motion.div)`
  position: relative;
  height: auto;
  width: 90vw;
  margin: 0px 0 0 5vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: nowrap;
  .title {
    font-size: 50px;
    color: ${(props) => props.theme.wColor};
    white-space: nowrap;
    margin-right: 40px;
    line-height: 30px;
    ${(p) => p.titleSize}
  }
  .subTitle {
    width: 40%;
    font-size: 18px;
    color: ${(p) => p.theme.gColor};
    width: 50vw;
    max-width: 1000px;
    ${(p) => p.subTitle};
  }
  ${(p) => p.styles};
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    justify-content: left;
    .title {
      margin-bottom: 50px;
      width: 100%;
      font-size: 40px;
      white-space: pre-wrap;
      line-height: 45px;
    }
    .subTitle {
      font-size: 18px;
      line-height: 20px;
      width: 90vw;
    }
  }
  @media (min-width: 2000px) {
    width: calc(2000px - 5vw);
    margin-left: calc(55vw - 1000px);
  }
`;

const TitleComponent = ({
  titleSize = "",
  styles = "",
  colors = { subTitle: "#f8f8ff", title: "#f2c14e" },
  subTitle = "",
  text = {
    title: "some title",
    subTitle:
      " somr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshssomr text for the bla dj zkjj js ksjsk ssh jshshs vsomr text for the bla dj zkjj js ksjsk ssh jshshs somr text for the bla dj zkjj js ksjsk ssh jshshs somr text for the bla dj zkjj js ksjsk ssh jshshs somr text for the bla dj zkjj js ksjsk ssh jshshs",
  },
}) => (
  <TitleComponentStyle
    // theme={colors}
    colors={colors}
    styles={styles}
    titleSize={titleSize}
    subTitle={subTitle}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      delay: 0.3,
    }}
  >
    <div className="title">{text.title}</div>
    <div className="subTitle">{text.subTitle}</div>
  </TitleComponentStyle>
);

export default TitleComponent;
