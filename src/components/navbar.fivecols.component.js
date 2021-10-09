import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarFiveColsStyle = styled(motion.div)`
  position: absolute;
  right: 1vw;
  width: 800px;
  background-color: #f8f8ff;
  height: auto;
  padding: 20px;
  cursor: auto;
  display: flex;
  justify-content: space-between;
  display: none;
  opacity: 0;
  .section {
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 150px;
    * {
      cursor: auto;
    }
    .cover {
      position: absolute;
      height: 100px;
      width: 150px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: border-box;
    }
    .title {
      color: #679267;
      margin-top: 120px;
      margin-bottom: 10px;
    }
    span {
      cursor: auto;
      .Link {
        text-decoration: none;
        cursor: pointer;
        color: #1f1f1f;
      }
    }
  }
`;

const NavbarFiveCols = ({ controller }) => {
  return (
    <NavbarFiveColsStyle animate={controller}>
      <div className="section">
        <div
          className="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlciUyMHBhbmNlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",
          }}
        />
        <span className="title"> Company </span>
        <span>
          <Link className="Link" to="/">
            Katz
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Livefish
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Digitube
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Midel
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Rhyloo
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Innojam
          </Link>
        </span>
      </div>
      <div className="section">
        <div
          className="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563089145-599997674d42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlciUyMHBhbmNlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",
          }}
        />
        <span className="title"> App Name </span>
        <span>
          <Link className="Link" to="/">
            Tresom
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Hatity
          </Link>
        </span>
        <span>
          {" "}
          <Link className="Link" to="/">
            Otcom
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Daltfresh
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Duobam
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Mat Lam Tam
          </Link>
        </span>
      </div>
      <div className="section">
        <div
          className="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdhbGxwYXBlciUyMHBhbmNlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 ')",
          }}
        />
        <span className="title"> City </span>
        <span>
          <Link className="Link" to="/">
            Nezamyslice
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Herzliyya
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Hongqi
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Kamakura
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Yahil’nytsya
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Mandalay
          </Link>
        </span>
      </div>
      <div className="section">
        <div
          className="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1622976480033-d7458ff18425?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdhbGxwYXBlciUyMHBhbmNlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 ')",
          }}
        />
        <span className="title"> Contruction </span>
        <span>
          <Link className="Link" to="/">
            Plexiglass
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Plexiglass
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Stone
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Granite
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Glass
          </Link>
        </span>
        <span>
          <Link className="Link" to="/">
            Plexiglass
          </Link>
        </span>
      </div>
    </NavbarFiveColsStyle>
  );
};

export default NavbarFiveCols;
