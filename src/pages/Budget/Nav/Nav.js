import { NavLink } from "react-router-dom";
import Styles from "../Budget.module.css";
import { Box } from "@mui/material";

const Nav = () => {

  const linkStyle = ({isActive}) => {
    return (
      `${Styles.navlinks} ${(isActive ? Styles.navLinksActive : Styles.navLinksInactive)}`
    );
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}>
        <NavLink to="/budget" className={linkStyle}>
          VER TODO
        </NavLink>
        <NavLink to="/budget" className={linkStyle}>
          ANUAL
        </NavLink>
        <NavLink to="/budget" className={linkStyle}>
          1ER TRIMESTRE
        </NavLink>
        <NavLink to="/budget" className={linkStyle}>
          2DO TRIMESTRE
        </NavLink>
        <NavLink to="/budget" className={linkStyle}>
          3ER TRIMESTRE
        </NavLink>
        <NavLink to="/budget" className={linkStyle}>
          4TO TRIMESTRE
        </NavLink>
      </Box>
    </>
  );
};

export default Nav;
