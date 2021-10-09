import styled from "styled-components";
import { motion } from "framer-motion";
import ContactUs from "../components/contact.us.Page.component";

const ContactUsLayoutSTyle = styled(motion.div)`
  position: relative;
  width: 90vw;
  left: 5vw;
`;
const ContactUsLayout = () => {
  return (
    <ContactUsLayoutSTyle>
      <ContactUs />
    </ContactUsLayoutSTyle>
  );
};

export default ContactUsLayout;
