import styled from "styled-components";
import { motion } from "framer-motion";

const DashbordPackInfoStyle = styled(motion.div)`
  position: relative;
  top: 0;
  /* margin-top: 100px; */
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 22px;
    color: ${(p) => p.theme.wColor};
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    color: ${(p) => p.theme.gColor};
    margin-bottom: 50px;
  }
  .packInfo {
    margin: 10px;
    margin-left: 0;
    display: flex;
    flex-wrap: nowrap;
    color: ${(p) => p.theme.gColor};
    font-size: 18px;
    span {
      width: 250px;
      color: ${(p) => p.theme.wColor};
    }
  }
  @media (max-width: 450px) {
    div {
      flex-direction: column;
    }
  }
`;

const DashbordPackInfo = () => {
  return (
    <DashbordPackInfoStyle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <span className="title">Package Information</span>
      <span className="subTitle">
        You've subscribed to the following package
      </span>
      <div className="packInfo">
        <span>Subcription</span> Name Premium
      </div>
      <div className="packInfo">
        <span>Package & billing details</span> $222.00
      </div>
      <div className="packInfo">
        <span>Remaining post</span>18
      </div>
      <div className="packInfo">
        <span>Expire date</span> September 20, 2022
      </div>
    </DashbordPackInfoStyle>
  );
};

export default DashbordPackInfo;
