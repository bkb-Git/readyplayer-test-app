import { Grid, IconButton, Typography, styled } from "@mui/material";

const CustomButton = styled((props) => (
  <IconButton size="large" color="secondary" {...props} />
))(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "0 3px 5px 2px rgba(30, 136, 229, .3)",
  transition: theme.transitions.create("all"),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StyledButton = ({ icon, tooltipText, input, handler, id }) => {
  return (
    <Grid container justifyContent="flex-end" alignItems="center" gap={2}>
      {!!tooltipText && <Typography color="white">{tooltipText}</Typography>}
      {!!input && input}
      <CustomButton id={id} onClick={!!handler && handler}>
        {icon}
      </CustomButton>
    </Grid>
  );
};

export default StyledButton;
