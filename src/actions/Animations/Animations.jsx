import { Grid, IconButton, Typography, styled } from "@mui/material";

const CustomButton = styled((props) => (
  <IconButton size="large" color="secondary" {...props} />
))(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "0 3px 5px 2px rgba(30, 136, 229, .3)",
  width: "48px",
  height: "48px",
  transition: theme.transitions.create("all"),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const Animations = ({ handler }) => {
  return (
    <Grid container justifyContent="flex-end" alignItems="center" gap={2}>
      <Grid xl={12}>
        <Typography variant="h4" color="white" textAlign="right">
          Animations
        </Typography>
      </Grid>
      <Grid
        xl={12}
        container
        justifyContent="flex-end"
        alignItems="center"
        gap={5}
      >
        <CustomButton onClick={handler} id="twist">
          1
        </CustomButton>
        <CustomButton onClick={handler} id="twerk">
          2
        </CustomButton>
        <CustomButton onClick={handler} id="moonwalk">
          3
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default Animations;
