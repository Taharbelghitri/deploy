import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useAnimation } from "framer-motion";
import events from "../events";

const HomeNavbarDown = [
  "Archive Page",
  "Author Page",
  "Author Page 2",
  "Search Page",
  "articles Template",
  "articles Template 2",
];
const Paths = [
  "/topics",
  "/author",
  "/author2",
  "/search",
  "/article",
  "/article2",
];

const NavbarTemplates = ({ controller }) => {
  const controllers = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
    3: useAnimation(),
    4: useAnimation(),
    5: useAnimation(),
  };
  const location = useLocation().pathname;

  const isHere = (e) => {
    e = Paths[e];
    if (e === location) return true;
    else return false;
  };

  Paths.forEach((e, i) => {
    if (e === location) controllers[i].start({ color: events.theme().sColor });
    else controllers[i].start({ color: events.theme().wColor });
  });

  return (
    <motion.div
      className="dropDown"
      animate={controller}
      whileHover={{ opacity: 1 }}
    >
      {HomeNavbarDown.map((e, i) => (
        <Link to={Paths[i]} className="dropDownItem" key={i}>
          <motion.span
            className="span"
            onHoverStart={() => {
              if (!isHere(i)) {
                controllers[i].start({ color: events.theme().sColor });
              }
            }}
            onHoverEnd={() => {
              if (!isHere(i)) {
                controllers[i].start({ color: events.theme().wColor });
              }
            }}
            onClick={() => {}}
            animate={controllers[i]}
            transition={{ duration: 0.2 }}
          >
            {e}
          </motion.span>
        </Link>
      ))}
    </motion.div>
  );
};
export default NavbarTemplates;
