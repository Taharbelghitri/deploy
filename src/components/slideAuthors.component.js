import styled from "styled-components";
import { motion } from "framer-motion";
import AuthorComponent from "./author.component";
import events from "../events";

const SlideAuthorsStyle = styled(motion.div)`
  background-color: ${(p) => p.theme.bg};
  margin-bottom: 50px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 20px;
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
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    .title {
      font-size: 32px;
    }
  }
`;

const SlideAuthors = () => {
  return (
    <SlideAuthorsStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <span className="title">Discover more authors</span>
      {[1, 1, 1, 1, 1, 1, 1].map((e, i) => {
        return (
          <AuthorComponent
            nameColor={events.theme().wColor}
            key={i}
            styles="
            backgroud-color : #111111 ;
            width :auto;
            height: 65px;
            margin-bottom : 20px ;
            padding : 10px ;
            .authorDetails {
                .name {
                font-size: 16px;
                color: ${(p) => p.theme.dColor}; 
                }
            }
            "
            styleAnimation={{ backgroundColor: events.theme().bg }}
          />
        );
      })}
    </SlideAuthorsStyle>
  );
};

export default SlideAuthors;
