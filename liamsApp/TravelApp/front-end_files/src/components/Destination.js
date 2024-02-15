import DestinationData from "./DestinationData";
import DestiImg from "../assets/vicfallsBridge.jpg";
import DestiImg1 from "../assets/falls areaView.jpg";
import DestiImg2 from "../assets/lake kariba.jpg";
import DestiImg3 from "../assets/Zimbabwe--Lake-Kariba-623201522332891_crop_710_0.jpg";
import DestiImg4 from "../assets/Zimbabwe--Matobo-National-Park-623221522332979_crop_710_0.jpg";
import DestiImg5 from "../assets/zfs8fg4vwo7t460sqdc3evhxeszk_1615785404_shutterstock_500765143.jpg";
import DestiImg6 from "../assets/matusadona.jpg";
import DestiImg7 from "../assets/wildLife.jpg";
import "./DestinastionStyles.css";

const Destination = () => {
  return (
    <div>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity</p>

      <DestinationData
        className="first-destin"
        heading="Victoria Falls"
        text="The crowning jewel of Zimbabwe and certainly one of the best places to visit in the country, Victoria Falls is a small town on the east side of one of the world's great waterfalls. On the Zimbabwe side, the falls lie within the wildlife-rich Victoria Falls National Park. From a forest path which runs along the edge of the falls, there are a number of spectacular vantage points, although prepare to get very wet from the spray. Victoria Falls is the adventure capital of Africa with an array of air, water and land-based activities. For a spectacular birds-eye view, take a Flight of Angels helicopter ride or an exhilarating micro light flight over the falls, and for those brave enough there is the famous bungee jump.
        "
        img1={DestiImg}
        img2={DestiImg1}
      />

      <DestinationData
        className="first-destin-reverse"
        heading="Lake Kariba"
        text="The mighty Zambezi flows into the waters of Lake Kariba, one of the world’s largest artificial lakes. Covering an area of 5,00sq km and holding 180 billion tonnes of water, Lake Kariba is an area of extreme beauty, the expanse of water reflecting the nearby landscape. Remote and slightly trickier to get to than Zimbabwe’s other wildlife destinations, those who do make the journey here will be rewarded with an incredible safari experience. As well as being home to the Big Five, the largest island on the lake has impalas, hippos, crocodiles and an array of birdlife. A wonderful way to experience the wildlife of Lake Kariba is by setting off on a houseboat or motorboat."
        img1={DestiImg2}
        img2={DestiImg3}
      />

      <DestinationData
        className="first-destin"
        heading="Matobo National Park"
        text="Considered the spiritual home of Zimbabwe, Matobo National Park has some of the world’s most impressive granite scenery. As well as wildlife, including Zimbabwe’s highest concentration of white and black rhinos found in the game park section, the recreational park has Southern Africa’s highest concentration of ancient rock art. The 3,500 sites date back 13,000 years. The lunar landscape of balancing rocks, known as kopjes, giant boulders stacked on top of each other, as if they’re about to topple over, is an incredible sight. This site has an incredible history stretching back some 2,000 million years when molten rock erupted across the landscape. The Matobo Hills is still incredibly important to the local community with them used as shrines and sacred places. This national park is in the perfect location for people to visit when on the road to Hwange and Victoria Falls.
        "
        img1={DestiImg4}
        img2={DestiImg5}
      />

      <DestinationData
        className="first-destin-reverse"
        heading="Hwange National Park"
        text="Hwange National Park is Zimbabwe’s biggest national park and is one of Africa’s finest for wildlife. It also holds the title of one of the best places in the world to see elephants, thanks to the population of over 40,000 of these majestic animals. The vast amount elephants isn’t the only wildlife calling card to this incredible park. Herds of buffalo, zebras, giraffe and the powerful predators of leopards, cheetahs, hyenas and wild dogs are all found here. Alongside over 400 different species of bird. The national park has public and private camping facilities so incredible wildlife encounters are available 24 hours. The park is situated on the main road between Bulawayo and Victoria Falls making it easily accessible after visiting the natural wonder. Although it is Zimbabwe's premier safari destination, Hwange is almost always quiet when compared to more famous reserves in other countries, making it a great option for an off-the-beaten track safari.
        "
        img1={DestiImg6}
        img2={DestiImg7}
      />
    </div>
  );
};

export default Destination;
