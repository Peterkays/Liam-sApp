import { Component } from "react";
import DestiImg from "../assets/vicfallsBridge.jpg";
import DestiImg1 from "../assets/falls areaView.jpg";
import DestiImg2 from "../assets/vicfallsBridge.jpg";
import DestiImg3 from "../assets/vicfallsBridge.jpg";
import "./DestinastionStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="destina-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
