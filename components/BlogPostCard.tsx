import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

import Link from "@components/Link";
import CategoryChip from "./CategoryChip";
import { getFormattedDate, trimDescription } from "@libs/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
    title: { color: "black", fontSize: "1.8em", marginBottom: "0.5rem" },
    date: {
      color: "gray",
      fontSize: "1em",
    },
  })
);

type Props = {
  title: string;
  category: string;
  description: string;
  created_at: string;
  updated_at: string;
  slug: string;
};

const BlogPostCard: React.VFC<Props> = ({
  title,
  slug,
  category,
  description,
  created_at,
  updated_at,
}) => {
  const classes = useStyles();

  // description settings
  const maxLength = 120;
  const trimedDescription = trimDescription(description, maxLength);
  const url = `/techblog/posts/${slug}`;

  // title settings
  const titleChips = (
    <>
      <Grid item>
        <CategoryChip category={category} style={{ marginTop: "0.1rem" }} />
      </Grid>
      <Grid item>
        <Link href={url} rel="canonical">
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
        </Link>
      </Grid>
    </>
  );

  // date settings
  const published = getFormattedDate(created_at);
  const update = getFormattedDate(updated_at);

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={1}>
          {titleChips}
          <Grid item xs={12}>
            <Typography>{trimedDescription}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.date}>
              published: {published} update: {update}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
