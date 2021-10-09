import styled from "styled-components";
import { motion } from "framer-motion";

const DashbordDasbordStyle = styled(motion.div)`
  position: relative;
  top: 0;
  opacity: 1;
  /* margin-top: 100px; */
  font-size: 20px;
  color: ${(p) => p.theme.wColor};
  display: block;
  .yellow {
    cursor: pointer;
    color: ${(p) => p.theme.sColor};
  }
`;
const DashbordDashbord = () => {
  return (
    <DashbordDasbordStyle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <span className="title">
        Hello admin, <span className="yellow">(not admin? Sign in)</span>
      </span>
      <p></p>
      <span className="content">
        From your account dashboard you can view your dashboard, manage your
        <span className="yellow">
          Posts, Subscription,edit your password and profile
        </span>
      </span>
    </DashbordDasbordStyle>
  );
};
export default DashbordDashbord;
