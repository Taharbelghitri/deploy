import styled from "styled-components";
import { motion } from "framer-motion";
import facebookIcon from "../icons/facebook-icon.png";
import instagramIcon from "../icons/instagrame-icon.png";
import twitterIcon from "../icons/twitter-icon.png";

const ContactUsComponentStyle = styled(motion.div)`
  margin-top: 150px;
  background-color: #000000;
  width: 100vw;
  height: auto;
  padding: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    margin-bottom: 10px;
    color: #8a8888;
    font-size: 14px;
    cursor: pointer;
    width: 20%;
  }
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    .logo {
      font-size: 30px;
      color: #f2c14e;
      width: 40%;
      cursor: default;
    }
    .media,
    div {
      height: 50px;
      width: 50px;
      cursor: pointer;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
    }
    .media {
      width: 40%;
      display: flex;
      flex-direction: column;
      height: auto;
      justify-content: space-between;
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
  .section2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    .first {
      display: flex;
      justify-content: space-around;
      display: flex;
      // background-color: violet;
      flex-direction: column;
      width: auto;
      white-space: nowrap;
    }
    .title {
      font-size: 24px;
      color: #f8f8ff;
      margin-bottom: 30px;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 40%;
    /* @media (max-width: 600px) {
      flex-direction: column;
    } */
  }
  @media (max-width: 1300px) {
    /* flex-direction: column; */
    padding: 20px;
    width: calc(100% -40px);
    .section1 {
      flex-direction: row;
      width: 90%;
      .media {
        flex-direction: row;
      }
    }

    .section2 {
      margin-top: 0px;
      width: 90%;
      // background-color: whitesmoke;
      .row {
        width: 40%;
      }
    }
    .first {
      margin-top: 10vw;
      width: auto;
      white-space: nowrap;
    }
  }
  @media (max-width: 800px) {
    .section1 {
      flex-direction: row;
      width: 90%;
      .media {
        flex-direction: row;
        width: 40%;
        margin-left: 20vw;
      }
      margin-bottom: 10vw;
    }

    .section2 {
      flex-direction: row;
      .row {
        /* justify-content: first baseline; */
        width: 45%;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 400px) {
    .section1 {
      flex-direction: row;
      width: 80%;
      .media {
        flex-direction: column;
        width: 100%;
        margin-left: 20vw;
      }
      margin-bottom: 10vw;
    }
    .section2 {
      flex-direction: column;
      .row {
        justify-content: first baseline;
        width: 90%;
        flex-direction: column;
      }
    }
  }
  @media (min-width: 2000px) {
    padding-left: calc(55vw - 1000px);
    padding-right: calc(55vw - 1000px);
  }
`;

const Expolore = `Explore_Design features_Prototyping_Design systems_Pricing_Customers_Security_Integrations_Contact`;
const GetStarted = `Getting started_Installation_Release Notes_Upgrade Guide_Browser Support_Editor Support_Utility-First_Dark Mode_Responsive Design`;
const Resources = `Resources_Best practices_Support_Developers_Learn design_What's new_Releases_Careers_About us`;
const Community = `Community_Discussion Forums_Code of Conduct_Community Resources_Contributing_Concurrent Mode_API Reference_Advanced Guides_Main Concepts`;

const ContactUsComponent = () => {
  return (
    <ContactUsComponentStyle>
      <div className="section1">
        <span className="logo">DeepEnd</span>
        <div className="media">
          <div className="facebook" />
          <div className="instagram" />
          <div className="twitter" />
        </div>
      </div>
      <div className="section2">
        <div className="row">
          <div className="first">
            {GetStarted.split("_").map((e, i) => {
              return (
                <motion.span
                  key={i}
                  className={i === 0 ? "title" : "elmnt"}
                  whileHover={{ color: "#fff" }}
                >
                  {e}
                </motion.span>
              );
            })}
          </div>
          <div className="first">
            {Expolore.split("_").map((e, i) => {
              return (
                <motion.span
                  key={i}
                  className={i === 0 ? "title" : "elmnt"}
                  whileHover={{ color: "#fff" }}
                >
                  {e}
                </motion.span>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="first">
            {Resources.split("_").map((e, i) => {
              return (
                <motion.span
                  key={i}
                  className={i === 0 ? "title" : "elmnt"}
                  whileHover={{ color: "#fff" }}
                >
                  {e}
                </motion.span>
              );
            })}
          </div>
          <div className="first">
            {Community.split("_").map((e, i) => {
              return (
                <motion.span
                  key={i}
                  className={i === 0 ? "title" : "elmnt"}
                  whileHover={{ color: "#fff" }}
                >
                  {e}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </ContactUsComponentStyle>
  );
};

export default ContactUsComponent;
