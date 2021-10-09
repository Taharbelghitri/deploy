import styled from "styled-components";
import { motion } from "framer-motion";

const ArticleTextStyle = styled(motion.div)`
  width: 800px;
  left: 5vw;
  position: relative;
  margin-top: 10vw;
  color: ${(p) => p.theme.wColor};
  font-size: 20px;
  line-height: 30px;
  .titleInText {
    font-size: 24px;
    color: ${(p) => p.theme.sColor};
  }
  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(50vw - 1000px);
  }
  @media (max-width: 900px) {
    font-size: 18px;
    width: 90vw;
    .titleInText {
      font-size: 18px;
    }
  }
`;

// if you add ._ it's gonna replace it with <p></p>
// if you wanna add an title inside letter add "__!" before it and "_-" in the end of the title

const text =
  ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
      officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
      distinctio veritatis sapiente, minima corrupti dolores necessitatibus
      suscipit accusantium dignissimos culpa cumque._
      It is a long established fact that a reader will be distracted by the
      __!readable_- content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters._
      1- We want everything to look good out of the box._
      2-Really just the first reason, that's the whole point of the plugin._
      3-Here's a third pretend reason though a list with three items looks more
      realistic than a list with two items._ __!Typography_- should be easy So
      that's a header for you — with any luck if we've done our job correctly
      that will look pretty reasonable._ Something a wise person once told
      me about .___!typography is: Typography is pretty important if you don't want
      your stuff to look like trash_-._ Make it good then it won't be bad.
      It's probably important that images look okay here by default as well:
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
      officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
      distinctio veritatis sapiente, minima corrupti dolores necessitatibus
      suscipit accusantium dignissimos culpa cumque._
      It is a long established fact that a reader will be distracted by the
      __!readable_- content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters._
      1- We want everything to look good out of the box._
      2-Really just the first reason, that's the whole point of the plugin._
      3-Here's a third pretend reason though a list with three items looks more
      realistic than a list with two items._ __!Typography_- should be easy So
      that's a header for you — with any luck if we've done our job correctly
      that will look pretty reasonable._ Something a wise person once told
      me about .___!typography is: Typography is pretty important if you don't want
      your stuff to look like trash_-._ Make it good then it won't be bad.
      It's probably important that images look okay here by default as well:`
    .split("._")
    .map((e, i) => {
      var tt = e.split("__").map((e, i) => {
        return e.split("_-").map((e, i) => {
          if (e[0] === "!")
            return (
              <span className="titleInText" key={i}>
                {e.replace("!", "")}
              </span>
            );
          else return e;
        });
      });
      return <p key={i}>{tt}</p>;
    });

const ArticleText = () => {
  return (
    <ArticleTextStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {text}
    </ArticleTextStyle>
  );
};

export default ArticleText;
