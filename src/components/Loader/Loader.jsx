import { CircularProgress, Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid xl={12} height="100%">
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
