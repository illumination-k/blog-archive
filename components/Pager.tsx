import Link from "@components/Link";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import Pagination from '@mui/material/Pagination';
import PaginationItem from "@mui/lab/PaginationItem";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

const Pager = ({ path, page, total_pages }) => {
  const classes = useStyles();
  return (
    <Pagination
      variant="outlined"
      className={classes.root}
      page={page}
      count={total_pages}
      renderItem={(item) => (
        // @ts-ignore
        <PaginationItem
          component={Link}
          href={`${path}/${item.page === 1 ? "1" : `${item.page}`}`}
          rel="canonical"
          {...item}
        />
      )}
    />
  );
};

export default Pager;
