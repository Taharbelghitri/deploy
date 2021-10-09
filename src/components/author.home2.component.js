import styled from "styled-components";
import { motion } from "framer-motion";
import facebookIcon from "../icons/facebook-icon.png";
import instagramIcon from "../icons/instagrame-icon.png";
import twitterIcon from "../icons/twitter-icon.png";

const AuthorHomeComponentsStyle2 = styled(motion.div)`
  position: relative;
  top: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  left: 5%;
  height: 600px;
  max-width: 1000px;
  .authorCover {
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 400px;
    background-image: url("https://images.unsplash.com/photo-1490598000245-075175152d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }
  .uauthorDetails {
    z-index: 20;
    position: absolute;
    top: 0;
    margin-top: 350px;
    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 300px;
    .author {
      display: flex;
      align-items: baseline;
    }
    .authorPic {
      height: 95px;
      width: 95px;
      border: 5px ${(p) => p.theme.wColor} solid;
      background-image: url("https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
      border-radius: 100%;
    }
    .name {
      font-size: 32px;
      color: ${(p) => p.theme.wColor};
    }
    .socialMedia {
      height: 50px;
      width: 225px;
      display: flex;
      justify-content: space-between;
      div {
        height: inherit;
        width: 50px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-clip: border-box;
      }
      .facebook {
        background-image: url(${facebookIcon});
      }
      .instagram {
        background-image: url(${instagramIcon});
      }
      .twitter {
        background-image: url(${twitterIcon});
      }
    }
    .descirption {
      font-size: 20px;
      color: ${(p) => p.theme.gColor};
    }
  }
  @media (max-width: 1000px) {
    width: 90vw;
    height: 70vw;
    .authorPic {
      min-height: 20vw;
      min-width: 20vw;
      max-height: 20vw;
      max-width: 20vw;
    }
    .authorCover {
      height: 30vw;
    }
    .socialMedia {
      width: 90vw;
    }
    .uauthorDetails {
      width: 90vw;
      height: 70vw;
      max-height: 350px;
      margin-top: 20vw;
      .name {
        font-size: 5vw;
      }
      .descirption {
        font-size: 16px;
      }
      .socialMedia {
        height: 10vw;
        div {
          max-height: 40px;
          max-width: 40px;
          height: inherit;
          width: 10vw;
        }
      }
    }
  }
  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(50vw - 1000px);
  }
`;
const AuthorHomeComponents2 = () => {
  return (
    <AuthorHomeComponentsStyle2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="uauthorDetails">
        <motion.div
          className="author"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <div className="authorPic" />
          <span className="name"> tahar belghitri </span>
        </motion.div>
        <motion.div
          className="socialMedia"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          exit={{ opacity: 0 }}
        >
          <div className="facebook" />
          <div className="instagram" />
          <div className="twitter" />
        </motion.div>
        <motion.span
          className="descirption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          There’s no stopping the tech giant. Apple now opens its 100th store in
          China.There’s no stopping the tech giant.
        </motion.span>
      </div>
      <motion.div
        className="authorCover"
        animate={{ width: ["0px", "10px", "1000px"] }}
        transition={{ duration: 0.5, delay: 0.6 }}
        exit={{ width: 0 }}
      />
    </AuthorHomeComponentsStyle2>
  );
};

export default AuthorHomeComponents2;
