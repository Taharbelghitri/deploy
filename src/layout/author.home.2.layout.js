import styled from "styled-components";
import { motion } from "framer-motion";
import AuthorHomeComponents2 from "../components/author.home2.component";

const AuthorHomeLayoutStyle = styled(motion.div)``;

const AuthorHomeLayout2 = () => {
  return (
    <AuthorHomeLayoutStyle>
      <AuthorHomeComponents2 />
    </AuthorHomeLayoutStyle>
  );
};

export default AuthorHomeLayout2;
