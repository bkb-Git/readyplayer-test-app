import { TextField, styled } from "@mui/material";

const CustomInput = styled((props) => (
  <TextField variant="outlined" {...props} />
))(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.light,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.23)",
  },

  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  ":hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255,255,255,1) !important",
    },
  },
}));

export default CustomInput;
