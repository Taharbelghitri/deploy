import styled from "styled-components";
import { motion } from "framer-motion";

const BoostComponentStyle = styled(motion.div)`
  position: relative;
  height: auto;
  width: 90vw;
  left: 5vw;
  display: flex;
  flex-direction: column;
  margin-top: 10vw;
  .title {
    font-size: 100px;
    color: ${(p) => p.theme.wColor};
  }
  .details {
    margin-top: 8vw;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 8vw;
    .stat {
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: 20px;
      .number {
        font-size: 40px;
        color: ${(p) => p.theme.sColor};
        margin-bottom: 50px;
      }
      .text {
        color: ${(p) => p.theme.wColor};
        font-size: 20px;
      }
    }
  }
  @media (min-width: 2000px) {
    width: 1800px;
    margin-left: calc(50vw - 1000px);
  }
  @media (max-width: 1100px) {
    .title {
      font-size: 50px;
    }
    .details {
      width: 100%;
      flex-direction: column;
      .stat {
        padding-left: 0;
      }
    }
  }
`;

const BoostComponent = () => {
  return (
    <BoostComponentStyle
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      animate={{ opacity: 1 }}
    >
      <span className="title"> Flaying to the moon </span>
      <div className="details">
        <div className="stat">
          <span className="number">+10 million</span>
          <span className="text">
            Articles have been public around the world (as of Sept. 30, 2021)
          </span>
        </div>
        <div className="stat">
          <span className="number">+100 million</span>
          <span className="text">
            Registered users account (as of Sept. 30, 2021)
          </span>
        </div>
        <div className="stat">
          <span className="number">+180</span>
          <span className="text">
            Countries and regions have our presence (as of Sept. 30, 2021)
          </span>
        </div>
      </div>
    </BoostComponentStyle>
  );
};
export default BoostComponent;
