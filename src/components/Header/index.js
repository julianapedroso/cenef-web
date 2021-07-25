import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Wrapper, CdnLogo, TextNavegation, NavBar } from "./styles";
// assets
import Logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "20.875 rem",
    height: "2.5rem",
    border: "1px solid #000",
    boxShadow: "none",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Wrapper>
        <NavBar>
          <CdnLogo src={Logo} alt="Logo ONG ACEF" />
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <TextNavegation>Quem Somos</TextNavegation>
          <TextNavegation>Quero Doar</TextNavegation>
          <TextNavegation>Seja um voluntário</TextNavegation>
          <TextNavegation>Contato</TextNavegation>
        </NavBar>
      </Wrapper>
    </>
  );
};

export default Header;
