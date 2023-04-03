import { useEffect, useState } from "react";

//Material UI imported here
import { createTheme, Grid, styled, ThemeProvider } from "@mui/material";
import { Download, Man } from "@mui/icons-material";

// Components imported here
import CustomAvatar from "./components/CustomAvatar";
import StyledButton from "./components/StyledButton";
import CustomInput from "./components/CustomInput";
import CustomSwitch from "./components/CustomSwitch";
import Animations from "./actions/Animations";

// Animation imports here
import twistDance from "./assets/twistDance.glb";
import twerkDance from "./assets/dancingTwerk.glb";
import moonwalkDance from "./assets/moonwalk.glb";

// Local avatar imported here
import MyAvatar from "./assets/my-avatar.glb";

import "./App.css";

// Model url defined here
const modelSrc = MyAvatar; // You can change this URL and place your own avatar

const ANIMATIONS = {
  twist: twistDance,
  moonwalk: moonwalkDance,
  twerk: twerkDance,
};

// Theme created
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#9d27b0",
    },
  },
});

// StyledGrid
const StyledGrid = styled((props) => (
  <Grid xs={12} sm={12} md={12} lg={12} xl={12} container {...props} />
))(() => ({
  height: "100%",
  backgroundImage: "linear-gradient(to bottom right, #7e57c2, #1e88e5)",
}));

const App = () => {
  // Avatar config state
  const [avatarConfig, setAvatarConfig] = useState({
    model: modelSrc,
    animation: ANIMATIONS.twerk,
    halfBody: false,
  });

  // Input states
  const [input, setInput] = useState({ model: null, animation: null });

  // UseEffect called upon config change
  useEffect(() => {
    console.log(`Loading`);
    console.log(avatarConfig);
  }, [avatarConfig]);

  // Handler functions defined here
  const handleSetSource = (e) => {
    const {
      currentTarget: { id },
    } = e;

    return id === "model"
      ? setAvatarConfig({ ...avatarConfig, model: input.model })
      : setAvatarConfig({ ...avatarConfig, animation: input.animation });
  };

  const handleChangeBodyType = () =>
    setAvatarConfig(({ halfBody, ...otherConfigs }) => {
      return { ...otherConfigs, halfBody: !halfBody };
    });

  const handleChangeAnimation = (e) => {
    const {
      currentTarget: { id },
    } = e;

    setAvatarConfig({ ...avatarConfig, animation: ANIMATIONS[id] });
  };

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;

    setInput({ ...input, [id]: value });
  };

  // Render functions for this app's views
  const renderActions = () => {
    return (
      <Grid
        xl={4}
        item
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        gap={5}
      >
        <StyledButton
          icon={<Download />}
          input={
            <CustomInput onChange={handleChange} id="model" label="Model" />
          }
          handler={handleSetSource}
          id="model"
        />
        <Animations handler={handleChangeAnimation} />
        <StyledButton
          icon={<Man />}
          input={
            <CustomSwitch
              checked={avatarConfig.halfBody}
              onChange={handleChangeBodyType}
              id="bodyType-input"
            />
          }
          id="body-type"
        />
      </Grid>
    );
  };

  const renderAvatar = () => {
    return (
      <Grid
        xl={8}
        item
        height="100%"
        container
        justifyContent="center"
        alignItems="flex-end"
      >
        <CustomAvatar {...avatarConfig} />
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledGrid>
        {renderActions()}
        {renderAvatar()}
      </StyledGrid>
    </ThemeProvider>
  );
};

export default App;
