import TripData from "./TripData";
import "./TripsStyles.css";
import Trip1 from "../assets/Chinhoyi.jpg";
import Trip2 from "../assets/karibaa.jpg";
import Trip3 from "../assets/Zimbabwe--Harare-623181522332891_crop_710_0.jpg";
import Trip4 from "../assets/fallsvic.jpg";
import Trip5 from "../assets/fallsvic.jpg";
import Trip6 from "../assets/fallsvic.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Chinhoyi"
          text="In central northern Zimbabwe, Chinhoyi is located along the banks of the Manyame River in the Mashonaland West. Owing to mining and agriculture, it is one of the important places in Zimbabwe. Chinhoyi was set up in 1906 by  Lieutenant Margherito Guidotti and was known by the name Sinoia until 1982."
        />
        <TripData
          image={Trip2}
          heading="Trip in Nyanga"
          text="Nyanga is primarily a tourist town and is a popular tourist destination with its fishing, golf courses, mountain hikes and holiday resorts."
        />
        <TripData
          image={Trip3}
          heading="Trip in Harare"
          text="The capital of Zimbabwe is the gateway to the country’s incredible wildlife destinations."
        />
      </div>
    </div>
  );
}
export default Trip;
