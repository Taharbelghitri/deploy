import styled from "styled-components";
import { motion } from "framer-motion";
import CommentsComponent from "../components/comments.component";

const CommentsLayoutStyle = styled(motion.div)`
  margin-top: 100px;
  position: relative;
`;
const CommentsLayout = () => {
  return (
    <CommentsLayoutStyle>
      <CommentsComponent />
      <CommentsComponent array={[1, 2, 2, 2]} />
    </CommentsLayoutStyle>
  );
};
export default CommentsLayout;
