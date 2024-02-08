import TripData from "./TripData";
import "./TripsStyles.css";
import Trip1 from "../assets/fallsvic.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Chinhoyi"
          text="Ikoko kune Chinhoyi cave menaje, yakapenga wena"
        />
        <TripData
          image={Trip1}
          heading="Trip in Nyanga"
          text="Ndakakusvika ne baby rangu rimwe gore soo"
        />
        <TripData
          image={Trip1}
          heading="Trip in Kariba"
          text="Uku tinowana hove huru dzekudya asi ini handizodye matemba acho manje zvangu"
        />
      </div>
    </div>
  );
}
export default Trip;
