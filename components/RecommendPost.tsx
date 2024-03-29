import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import CategoryChip from "./CategoryChip";
import Link from "@components/Link";
import { Typography } from "@mui/material";

const RecommendPost = ({ title, url, category, description }) => {
  return (
    <Card variant="outlined" style={{ margin: "1rem" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <CategoryChip category={category} />
          </Grid>
          <Grid item>
            <Link href={url} rel="canonical">
              <Typography
                variant="h3"
                style={{ color: "black", marginTop: "0.15rem" }}
              >
                {title}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <p>{description}</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RecommendPost;
