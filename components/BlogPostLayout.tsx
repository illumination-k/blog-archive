import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { NextSeo } from "next-seo";

import Layout from "./Layout";
import Toc from "./Toc";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contents: {
      [theme.breakpoints.up("sm")]: {
        marginRight: 240,
      },
    },
  })
);

const BlogPostLayout = ({ meta, children }) => {
  const classes = useStyles();
  const listitems = (
    <>
      <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>
        Table of Contents
      </Typography>
      <Toc headings={meta.toc} />
    </>
  );

  const contents = (
    <div className={classes.contents}>
      <Grid item xs={12} className="markdown-body">
        <h1>{meta.title}</h1>

        <details>
          <summary>Table of Contents</summary>
          {meta.toc.map((heading, idx) => {
            return (
              <div key={idx}>
                <a href={heading.url}>
                  {`\xa0`.repeat((heading.depth - 1) * 2) + "-"}
                  &nbsp;
                  {heading.text}
                </a>
              </div>
            );
          })}
        </details>
        {children}
        <div style={{ textAlign: "right" }}>
          <amp-social-share type="twitter" />
          <amp-social-share type="facebook" />
          <amp-social-share type="line" />
        </div>
      </Grid>
    </div>
  );

  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Layout>
        {contents}
        <Grid>
          <Drawer listitems={listitems} />
        </Grid>
      </Layout>
    </>
  );
};

export default BlogPostLayout;
