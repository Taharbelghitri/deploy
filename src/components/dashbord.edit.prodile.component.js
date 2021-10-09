import styled from "styled-components";
import { motion } from "framer-motion";

const EditProfileComponentStyle = styled(motion.div)`
  position: relative;
  /* margin-top: 100px; */
  /* height: 0; */
  width: 100%;
  opacity: 1;
  /* overflow: hidden; */
  display: block;
  .profileDetails {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
      margin: 20px;
      margin-bottom: 50px;
      width: 40vw;
      margin-left: 20px;
      span {
        font-size: 20px;
        color: ${(p) => p.theme.sColor};
      }
      input {
        padding: 10px;
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: 2px solid ${(p) => p.theme.gColor};
        color: ${(p) => p.theme.wColor};
        font-size: 20px;
      }
      input :placeholder {
        font-size: 16px;
      }
      input :focus {
        border: none;
        outline: none;
      }
    }
  }
  .email {
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-bottom: 50px;
    width: 40vw;
    margin-left: 20px;
    span {
      font-size: 20px;
      color: ${(p) => p.theme.sColor};
    }
    input {
      padding: 10px;
      border: none;
      outline: none;
      background-color: transparent;
      border-bottom: 2px solid ${(p) => p.theme.gColor};
      color: ${(p) => p.theme.wColor};
      font-size: 20px;
    }
    input :placeholder {
      font-size: 16px;
    }
    input :focus {
      border: none;
      outline: none;
    }
  }
  .update {
    margin-top: 5vw;
    span {
      cursor: pointer;
      padding: 20px;
      background-color: ${(p) => p.theme.sColor};
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    * {
      margin-left: 0;
    }
    .profileDetails {
      width: 100%;
      div {
        margin-left: 0;
        width: 100%;
      }
    }
    .email {
      margin-left: 0;
      width: 100%;
    }
  }
`;
const DashbordEditProfileComponent = () => {
  return (
    <EditProfileComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="profileDetails">
        <div>
          <span> First name </span>
          <input placeholder="first name" />
        </div>
        <div>
          <span> Last name </span>
          <input placeholder="last name" />
        </div>
        <div>
          <span> Current password </span>
          <input placeholder="current password" />
        </div>
        <div>
          <span> New password </span>
          <input placeholder="new password" />
        </div>
      </div>
      <div className="email">
        <span> Email Address </span>
        <input placeholder="email" />
      </div>
      <div className="update">
        <span>update profile </span>
      </div>
    </EditProfileComponentStyle>
  );
};
export default DashbordEditProfileComponent;
