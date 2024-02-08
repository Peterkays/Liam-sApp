import DestinationData from "./DestinationData";
import DestiImg from "../assets/vicfallsBridge.jpg";
import DestiImg1 from "../assets/falls areaView.jpg";
import DestiImg2 from "../assets/vicfallsBridge.jpg";
import DestiImg3 from "../assets/vicfallsBridge.jpg";
import "./DestinastionStyles.css";

const Destination = () => {
  return (
    <div>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity</p>

      <DestinationData className="first-destin"
        heading="Victoria Falls"
        text="Kunonakidzaaa"
        img1={DestiImg}
        img2={DestiImg1}
      />

<DestinationData className="first-destin-reverse"
        heading="Vhumba Mountains"
        text="Ndakambokuendeswa zvangu, kuri bho"
        img1={DestiImg2}
        img2={DestiImg3}
      />
    </div>
  );
};

export default Destination;
