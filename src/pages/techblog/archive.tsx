import { NextSeo } from "next-seo";

import DefaultLayout from "@components/DefaultLayout";
import BlogPostCard from "@components/BlogPostCard";
import Grid from "@mui/material/Grid";

import { getDateKey, post2meta, updateMapArray } from "@libs/utils";
import BackendApi from "@libs/api";

export const config = { amp: true };

function makeSections(datePostMap) {
  const sections = datePostMap.map((m, i) => {
    const cards = m[1].map((post, index) => (
      <Grid item xs={12} key={index}>
        <BlogPostCard key={index} {...post2meta(post)} />
      </Grid>
    ));
    return (
      <section key={i}>
        <h3
          style={{ paddingLeft: "1rem", background: "whitesmoke" }}
        >{`${m[0]} (${m[1].length})`}</h3>
        <Grid container spacing={1}>
          {cards}
        </Grid>
      </section>
    );
  });
  return sections;
}

const Archive = (props) => {
  const { publishedMap, updateMap } = props;
  //
  const publishedSections = makeSections(publishedMap);
  const updateSections = makeSections(updateMap);

  return (
    <DefaultLayout>
      <NextSeo
        title={`illumination-dev: Archive`}
        description={`Archive of illumination-k.dev`}
      />
      <h1>Archive (Published Date)</h1>

      <amp-accordion>{publishedSections}</amp-accordion>

      <h1>Archive (Update Date)</h1>
      <amp-accordion>{updateSections}</amp-accordion>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const posts = (await BackendApi.postsGet()).data;

  let publishedMap = new Map();
  let updateMap = new Map();
  posts.forEach((post) => {
    const publishedKey = getDateKey(post.created_at);
    const updateKey = getDateKey(post.updated_at);

    updateMapArray(publishedMap, publishedKey, post);
    updateMapArray(updateMap, updateKey, post);
  });

  let publishedArr = [...publishedMap];
  publishedArr = publishedArr.sort(function (a, b) {
    const a_date = new Date(a[0]);
    const b_date = new Date(b[0]);
    return b_date.valueOf() - a_date.valueOf();
  });
  let updateArr = [...updateMap];
  updateArr = updateArr.sort(function (a, b) {
    const a_date = new Date(a[0]);
    const b_date = new Date(b[0]);
    return b_date.valueOf() - a_date.valueOf();
  });

  return {
    props: { publishedMap: publishedArr, updateMap: updateArr },
  };
}

export default Archive;
