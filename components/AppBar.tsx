import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";

//@ts-ignore
import Link from "@components/Link";
import AmpAvator from "./amp/AmpAvator";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
      marginBottom: "1rem",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      height: "3.8rem",
    },
    menuButton: {
      textAlign: "left",
      flexGrow: 1,
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    title: {
      flexGrow: 1,
      textAlign: "left",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    icons: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginLeft: "auto",
    },
  })
);

const IconButtons = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <IconButton
        href="https://twitter.com/IlluminationK"
        color="inherit"
        aria-label="mytwitter"
        edge="end"
      >
        <TwitterIcon
          style={{ color: "deepskyblue" }}
          className={classes.icons}
        />
      </IconButton>
      <IconButton
        href="https://github.com/illumination-k"
        aria-label="mygithub"
        edge="end"
      >
        <GitHubIcon style={{ color: "white" }} className={classes.icons} />
      </IconButton>
      <IconButton href="/about" aria-label="about" edge="end">
        <AmpAvator
          width="27"
          height="27"
          src="/avatar/avatar.jpg"
          alt="illumination-k"
        />
      </IconButton>
    </>
  );
};

export default function HeaderAppBar() {
  const classes = useStyles();

  const title = (
    //@ts-ignore
    <Link href="/" className={classes.title}>
      <Typography style={{ color: "white", fontSize: "2em" }}>
        illumination-dev
      </Typography>
    </Link>
  );
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        style={{ backgroundColor: "black" }}
      >
        <Container>
          <Toolbar>
            <div className={classes.menuButton}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                href="/"
              >
                <HomeIcon />
              </IconButton>
            </div>
            {title}
            <IconButtons />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
