import styled from "styled-components";
import { motion } from "framer-motion";
import SearchComponent from "../components/search.componant";
import TitleComponent from "../components/title.component";
import TagLIstComponent from "../components/tagList.component";
const SearchLayoutStyle = styled(motion.div)``;
const SearchLayout = () => {
  return (
    <SearchLayoutStyle>
      <TitleComponent
        styles="top : 10vw"
        colors={{ title: "#F8F8FF", subTitle: "#53504D" }}
        text={{
          title: "Search",
          subTitle:
            "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
        }}
      />
      <div style={{ height: "5vw" }} />
      <SearchComponent />
      <TagLIstComponent
        list={false}
        styles={"margin-left : 5vw ; margin-top : 100px"}
      />
    </SearchLayoutStyle>
  );
};

export default SearchLayout;
