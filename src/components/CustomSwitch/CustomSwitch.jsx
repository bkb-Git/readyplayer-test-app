import { Switch, styled } from "@mui/material";

const CustomSwitch = styled((props) => <Switch {...props} />)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",

      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.secondary.main,

        "&:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>')`,
        },
      },

      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "white",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.secondary.light,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "#fff"
      )}"  d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" /></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 0.7,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 20 / 2,
  },
}));

export default CustomSwitch;
