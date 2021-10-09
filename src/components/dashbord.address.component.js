import styled from "styled-components";
import { motion } from "framer-motion";

const DashbordAdressComponentStyle = styled(motion.div)`
  position: relative;
  top: 0;
  height: auto;
  width: 100%;
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
      color: #f2c14e;
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
    width: auto;
    span {
      cursor: pointer;
      padding: 20px;
      background-color: ${(p) => p.theme.sColor};
      font-size: 20px;
    }
  }
  select {
    padding: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 2px solid #${(p) => p.theme.gColor};
    color: ${(p) => p.theme.wColor};
    font-size: 20px;
  }
  select :placeholder {
    font-size: 16px;
  }
  select :focus {
    border: none;
    outline: none;
  }
  option {
    margin-top: 10px;
    font-size: 18px;
    background-color: ${(p) => p.theme.dColor};
  }
  @media (max-width: 500px) {
    width: 100%;
    .profileDetails {
      width: 100%;
      div {
        width: 100%;
      }
    }
  }
`;
const DashbordAdressComponent = () => {
  return (
    <DashbordAdressComponentStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="profileDetails">
        <div>
          <span> Country </span>
          <select>
            <option>Uninted state</option>
            <option>Canada</option>
            <option>Mexico</option>
            <option>Russia</option>
            <option>Japan</option>
            <option>Germany</option>
          </select>
        </div>
        <div>
          <span> State/Province/Region * </span>
          <select>
            <option>New york</option>
            <option>Los angelos</option>
            <option>California</option>
            <option>Wachenton</option>
          </select>
        </div>
        <div>
          <span> Address Line 1 * </span>
          <input placeholder="Address Line 1" />
        </div>
        <div>
          <span> Address Line 2</span>
          <input placeholder="Address Line 2" />
        </div>
        <div>
          <span> City *</span>
          <input placeholder="City " />
        </div>
        <div>
          <span>City * Postal/ZIP Code * </span>
          <input placeholder="Zip code" />
        </div>
      </div>

      <div className="update">
        <span> Update Billing Address</span>
      </div>
    </DashbordAdressComponentStyle>
  );
};

export default DashbordAdressComponent;
