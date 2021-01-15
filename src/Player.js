import "./Player.css";
import Bini from "./bini.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}`;
}

function Player(props) {
  const classes = useStyles();
  return (
    <div className="player">
      <div className="player-buttons">
        <Link>
          <i className="fas fa-fast-backward player-button"></i>
        </Link>
        <Link to="/calculadora">
          <i className="fas fa-play player-button"></i>
        </Link>
        <Link>
          <i className="fas fa-fast-forward player-button"></i>
        </Link>
      </div>
      <div className="progress-bars">
        <div className="hr"></div>
        <div className="volume-bar">
          <i className="fas fa-volume-up"></i>
          <div className="hr2"></div>
        </div>
      </div>
      <Link to="/contacto">
        <img className="mini-bini" src={Bini} alt="Bini"></img>
      </Link>
      <div className={classes.root}>
        <Typography id="discrete-slider">
          <i className="fas fa-volume-up"></i>
        </Typography>
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={100}
          marks
          min={0}
          max={100}
        />
        <Typography id="discrete-slider">
          {/* <i className="fas fa-volume-up"></i> */}
        </Typography>
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={25}
          marks
          min={0}
          max={100}
        />
      </div>
    </div>
  );
}

export default Player;

//   return (
//     <div className={classes.root}>
//       <Typography id="discrete-slider" gutterBottom>
//         Temperature
//       </Typography>
//       <Slider
//         defaultValue={0}
//         getAriaValueText={valuetext}
//         aria-labelledby="discrete-slider"
//         valueLabelDisplay="auto"
//         step={25}
//         marks
//         min={0}
//         max={100}
//       />
//     </div>
//   );
// }
