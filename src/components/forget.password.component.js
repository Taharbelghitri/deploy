import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const SignComponentStyle = styled(motion.div)`
  margin-top: 10vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 90vw;
  max-width: 2000px;
  .cover {
    position: absolute;
    right: 0;
    top: 0vw;
    height: 90vh;
    width: 40vw;
    background-image: url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    max-height: 800px;
    @media (min-width: 2000px) {
      width: 800px;
      right: calc(50vw - 1000px);
    }
  }
  .other {
    font-size: 20px;
    color: ${(p) => p.theme.wColor};
    margin-top: 40px;
    margin-bottom: 30px;
    span {
      color: ${(p) => p.theme.sColor};
      cursor: pointer;
    }
  }
  .social {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 40vw;
    align-items: center;
    font-size: 20px;
    margin-bottom: 3vw;
    align-items: center;
    max-width: 700px;
    div {
      position: relative;
      min-height: 30px;
      min-width: 30px;
      border-radius: 50px;
      background-color: ${(p) => p.theme.dColor};
      margin-right: 6%;
    }
    span {
      margin-right: 10%;
      color: ${(p) => p.theme.wColor};
    }
  }
  .title {
    font-size: 24px;
    color: ${(p) => p.theme.wColor};
    margin-top: 40px;
    margin-bottom: 30px;
  }
  input {
    font-size: 20px;
    width: 30vw;
    max-width: 700px;
    padding: 10px;
    outline: none;
    background-color: transparent;
    border: 4px solid ${(p) => p.theme.gColor};
    color: ${(p) => p.theme.wColor};
    &::placeholder {
      color: ${(p) => p.theme.gColor};
    }
    &:focus {
      color: ${(p) => p.theme.wColor};
    }
  }
  .submit {
    margin-top: 5vw;
    span {
      margin-top: 5vw;
      background-color: ${(p) => p.theme.sColor};
      padding: 1.5vw;
      font-size: 24px;
      cursor: pointer;
    }
  }
  @media (min-width: 2000px) {
    width: 1850px;
    margin-left: calc(55vw - 1000px);
  }
  @media (max-width: 500px) {
    .social {
      flex-direction: column;
      align-items: flex-start;
      span {
        margin: 4vw 0 3vw 0;
      }
    }
  }
  @media (max-width: 800px) {
    input {
      width: 80%;
    }
    .cover {
      position: relative;
      width: 90%;
      margin-top: 10vw;
    }
  }
`;
const ForgetPAssword = () => {
  const history = useHistory();
  return (
    <SignComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {window.scrollTo(0, 0)}

      <span className="title">Email Adress</span>
      <input placeholder="Email Adress" />

      <div className="other">
        You want to{" "}
        <span
          onClick={() => {
            history.push("/signin");
          }}
        >
          Create new account ?
        </span>
      </div>

      <div className="submit">
        <span> Continue </span>
      </div>
      <motion.div
        className="cover"
        animate={{ height: ["0vw", "10vw", "30vw", "90vw"] }}
        transition={{ duration: 0.9, delay: 0.6 }}
        exit={{ height: 0 }}
      />
    </SignComponentStyle>
  );
};
export default ForgetPAssword;
