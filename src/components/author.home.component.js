import styled from "styled-components";
import { motion } from "framer-motion";
import facebookIcon from "../icons/facebook-icon.png";
import instagramIcon from "../icons/instagrame-icon.png";
import twitterIcon from "../icons/twitter-icon.png";

const AuthorHomeComponentsStyle = styled(motion.div)`
  position: relative;
  top: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  left: 5%;
  height: auto;
  .authorCover {
    width: 45%;
    max-width: 100%;
    height: 400px;
    background-image: url("https://images.unsplash.com/photo-1490598000245-075175152d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }
  .uauthorDetails {
    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .authorPic {
      height: 150px;
      width: 150px;
      background-image: url("https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
      border-radius: 100%;
    }
    .name {
      font-size: 50px;
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
        cursor: pointer;
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
  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(50vw - 1000px);
  }
  @media (max-width: 1000px) {
    .authorCover {
      height: 30vw;
      width: 70vw;
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    .authorCover {
      width: 100%;
    }
    .authorPic {
      margin-top: 10vw;
      max-height: 100px;
      max-width: 100px;
      min-height: 100px;
      min-width: 100px;
    }
    .uauthorDetails {
      width: 90vw;
      max-width: 90vw;
      .name {
        font-size: 20px;
      }
    }
  }
`;

const AuthorHomeComponents = () => {
  return (
    <AuthorHomeComponentsStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="uauthorDetails">
        <div className="authorPic" />
        <span className="name"> tahar belghitri </span>
        <div className="socialMedia">
          <div className="facebook" />
          <div className="instagram" />
          <div className="twitter" />
        </div>
        <span className="descirption">
          There’s no stopping the tech giant. Apple now opens its 100th store in
          China.There’s no stopping the tech giant.
        </span>
      </div>
      <motion.div
        className="authorCover"
        animate={{ width: ["0px", "10px", "1000px"] }}
        transition={{ duration: 0.5, delay: 0.6 }}
        exit={{ width: 0 }}
      />
    </AuthorHomeComponentsStyle>
  );
};

export default AuthorHomeComponents;
