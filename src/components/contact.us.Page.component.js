import styled from "styled-components";
import { motion } from "framer-motion";

const Infos = [
  {
    title: "Address",
    infos:
      "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  { title: "Email", infos: "nc.example@example.com" },
  { title: "Phone", infos: "000-123-456-7890" },
];

const ContactUsStyle = styled(motion.div)`
  position: relative;
  margin-top: 10vw;
  margin-bottom: 150px;
  display: flex;
  .infos {
    width: 50%;
    div {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 32px;
        color: ${(p) => p.theme.sColor};
        margin-bottom: 30px;
      }
      .infos {
        color: ${(p) => p.theme.wColor};
        font-size: 20px;
        margin-bottom: 60px;
      }
    }
  }
  .sendMessage {
    display: flex;
    flex-direction: column;
    height: auto;

    .input {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
      span {
        color: ${(p) => p.theme.sColor};
        font-size: 18px;
        margin-bottom: 20px;
      }
      input {
        width: 100%;
        height: 20px;
        padding: 10px;
        background-color: ${(p) => p.theme.bg};
        border: none;
        border: 3px solid #8a8888;
        font-size: 20px;
        color: ${(p) => p.theme.wColor};
      }
      input:focus {
        outline: none;
      }
      .message {
      }
    }
  }
  .send {
    span {
      width: auto;
      background-color: ${(p) => p.theme.sColor};
      cursor: pointer;
      padding: 20px;
    }
  }

  @media (min-width: 2000px) {
    width: 1800px;
    margin-left: calc(50vw - 1000px);
  }
  @media (max-width: 1440px) {
    .infos {
      width: 90%;
    }
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContactUs = () => {
  return (
    <ContactUsStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="infos">
        {Infos.map((e, i) => {
          return (
            <div key={i}>
              <span className="title">{e.title}</span>
              <span className="infos">{e.infos}</span>
            </div>
          );
        })}
      </div>
      <div className="sendMessage">
        <div className="input">
          <span> full name </span>
          <input />
        </div>
        <div className="input">
          <span> email </span>
          <input />
        </div>
        <div className="input">
          <span> message </span>
          <input />
        </div>
        <div className="send">
          <span>send message</span>
        </div>
      </div>
    </ContactUsStyle>
  );
};
export default ContactUs;
