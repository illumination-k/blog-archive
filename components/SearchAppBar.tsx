import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase"; !importantを生んでそう
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";
import Link from "@components/Link";

import AmpAvator from "./amp/AmpAvator";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "1rem",
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

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
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
            <Link href="/" className={classes.title}>
              <Button color="inherit">
                <Typography style={{ color: "white" }}>
                  Bioinformaticsしたい！
                </Typography>
              </Button>
            </Link>
            <IconButton
              href="https://twitter.com/illumination27"
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
              <GitHubIcon
                style={{ color: "white" }}
                className={classes.icons}
              />
            </IconButton>
            <IconButton href="/about" aria-label="about" edge="end">
              <AmpAvator
                width="27"
                height="27"
                src="/avatar/avatar.jpg"
                alt="illumination-k"
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}