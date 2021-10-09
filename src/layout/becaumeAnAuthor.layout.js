import styled from "styled-components";
import { motion } from "framer-motion";
import BecomeAuthor from "../components/becomeauthor.component";

const BecomeAuthorLayoutStyle = styled(motion.div)``;
const BecomeAuthorLayout = () => {
  return (
    <>
      <BecomeAuthorLayoutStyle>
        <BecomeAuthor />
      </BecomeAuthorLayoutStyle>
    </>
  );
};

export default BecomeAuthorLayout;
