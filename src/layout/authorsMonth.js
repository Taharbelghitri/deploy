import TitleComponent from "../components/title.component";
import styled from "styled-components";
import { motion } from "framer-motion";
import AuthorsList from "../components/authorsList.components";

const AuthorsOfTheMonthStyle = styled(motion.div)`
  position: relative;
  margin-top: 100px;
  margin-bottom: 00px;
  .AuthorsOfTheMonth,
  .NewestAuthors {
    padding-top: 150px;
    padding-bottom: 150px;
    height: auto;
    position: relative;
    width: auto;
  }
  ${(p) => p.styles}
`;
const AuthorsOfTheMonth = ({ styles = "", title = "Authors of the month" }) => {
  return (
    <AuthorsOfTheMonthStyle
      styles={styles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="AuthorsOfTheMonth">
        <TitleComponent
          text={{
            title: title,
            subTitle:
              "Many articles type because of the good traffic we have and our newest authors every day Many articles type because of the good traffic we have and our newest authors every day",
          }}
        />
        <AuthorsList />
      </div>

      <div className="NewestAuthors">
        <TitleComponent
          text={{
            title: "Newest Authors",
            subTitle:
              "Many articles type because of the good traffic we have and our newest authors every day Many articles type because of the good traffic we have and our newest authors every day Many articles type because of the good traffic we have and our newest authors every day",
          }}
        />
        <AuthorsList />
      </div>
    </AuthorsOfTheMonthStyle>
  );
};

export default AuthorsOfTheMonth;
