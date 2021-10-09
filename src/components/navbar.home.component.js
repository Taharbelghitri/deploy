import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import events from "../events";

const HomeNavbarDown = ["demo style 1", "demo style 2", "demo style 3"];
const Paths = ["/", "/home2", "/home3"];

const NavbarHome = ({ controller }) => {
  const controllers = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
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
            animate={controllers[i]}
            transition={{ duration: 0.3 }}
          >
            {e}
          </motion.span>
        </Link>
      ))}
    </motion.div>
  );
};

export default NavbarHome;
