import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import DashbordDashbord from "./dashbord.dashbord.component";
import DashbordPost from "./dashbord.posts.component";
import DashbordEditProfileComponent from "./dashbord.edit.prodile.component";
import DashbordPackInfo from "./dashbord.pack.info.component";
import { useEffect, useState } from "react";
import DashbordAdressComponent from "./dashbord.address.component";
import events from "../events";

const DshbordComponenetStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  left: 5vw;
  width: 90vw;
  margin-top: 150px;
  .tags {
    position: relative;
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
    }
    .tag {
      color: ${(p) => p.theme.gColor};
      padding: 10px;
      margin: 10px;
      cursor: pointer;
    }
    .tag:first-child {
      margin-left: 0;
    }
  }
  .view {
    margin-top: 50px;
    height: auto;
    width: 100%;
  }

  @media (max-width: 750px) {
    /* margin-bottom: 400px; */
    .tags {
      .tag {
        padding-left: 0;
        margin-left: 0;
      }
    }
  }
  @media (min-width: 2000px) {
    width: 1800px;
    margin-left: calc(50vw - 1000px);
  }
`;

const DashbordComponenet = () => {
  const [view, setView] = useState("Dash board");

  const AnimatDashbord = useAnimation();

  let controllers = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
    3: useAnimation(),
    4: useAnimation(),
    5: useAnimation(),
  };
  let tagsControllers = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
    3: useAnimation(),
    4: useAnimation(),
    5: useAnimation(),
  };
  useEffect(() => {
    tagsControllers[0].start({ color: events.theme().wColor });
  }, []);

  return (
    <DshbordComponenetStyle
      animate={AnimatDashbord}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="tags">
        {[
          "Dash board",
          "Posts",
          "Edit profile",
          "Subscription",
          "Billing address",
        ].map((e, i) => {
          return (
            <motion.span
              key={i}
              animate={tagsControllers[i]}
              className="tag"
              whileHover={{ backgroundColor: events.theme().sColor }}
              onClick={async () => {
                setView(e);
                Object.keys(tagsControllers).map((elmnt, index) => {
                  if (i !== index)
                    tagsControllers[elmnt].start({
                      color: events.theme().gColor,
                    });
                  else
                    tagsControllers[elmnt].start({
                      color: events.theme().wColor,
                    });
                });
              }}
            >
              {e}
            </motion.span>
          );
        })}
      </div>
      <div className="view">
        <AnimatePresence>
          {view === "Dash board" && <DashbordDashbord key={0} />}
          {view === "Posts" && <DashbordPost key={1} />}
          {view === "Edit profile" && <DashbordEditProfileComponent key={2} />}
          {view === "Subscription" && <DashbordPackInfo key={3} />}
          {view === "Billing address" && <DashbordAdressComponent key={4} />}
        </AnimatePresence>
      </div>
    </DshbordComponenetStyle>
  );
};

export default DashbordComponenet;
