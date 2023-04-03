import { Avatar } from "@readyplayerme/visage";
import Loader from "../Loader";

const CustomAvatar = (props) => {
  const { model, animation, halfBody } = props;

  const config = {
    ambientLightColor: "#fff5b6",
    ambientLightIntensity: 0.25,
    animationSrc: animation,
    modelSrc: model,
    halfBody,
    loader: <Loader />,
    cameraInitialDistance: 2.5,
    cameraTarget: 1.65,
    cameraZoomTarget: {
      x: -0.11,
      y: 0,
      z: 0.48,
    },
    dirLightColor: "#002aff",
    dirLightIntensity: 5,
    dirLightPosition: {
      x: -3,
      y: 5,
      z: -5,
    },
    environment: "city",
    onLoaded: function noRefCheck() {},
    onLoading: function noRefCheck() {},
    scale: 1,
    spotLightAngle: 0.314,
    spotLightColor: "#fff5b6",
    spotLightIntensity: 1,
    spotLightPosition: {
      x: 12,
      y: 10,
      z: 7.5,
    },
  };

  return <Avatar {...config} />;
};

export default CustomAvatar;
