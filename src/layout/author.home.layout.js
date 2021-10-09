import styled from "styled-components";
import { motion } from "framer-motion";
import AuthorHomeComponents from "../components/author.home.component";

const AuthorHomeLayoutStyle = styled(motion.div)``;

const AuthorHomeLayout = () => {
  return (
    <AuthorHomeLayoutStyle>
      <AuthorHomeComponents />
    </AuthorHomeLayoutStyle>
  );
};

export default AuthorHomeLayout;
