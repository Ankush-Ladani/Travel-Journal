import React from "react";
import Card from "./Card";
import img1 from "../Images/Rectangle 77.png";
import locIcon from "../Images/Fill 219.png";
import img2 from "../Images/Rectangle 78.png";
import img3 from '../Images/Rectangle 84.png'
export default function Main() {
  return (
    <div className="Main-Div">
      <Card
        className = 'Card1'
        imgLink={img1}
        locationIcon={locIcon}
        famousPlace="Mount Fuji"
        placeName="JAPAN"
        Date="12 Jan, 2021 - 24 Jan, 2021"
        about="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      ></Card>
      <Card
        className = 'Card2'
        imgLink={img2}
        locationIcon={locIcon}
        famousPlace="Sydney Opera House"
        placeName="AUSTRALIA"
        Date="27 May, 2021 - 8 Jun, 2021"
        about="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      ></Card>
      <Card 
      className = 'Card3'
      imgLink = {img3}
      locationIcon = {locIcon}
      famousPlace = "Geirangerfjord"
      placeName = "NORWAY"
      Date = "01 Oct, 2021 - 18 Nov, 2021"
      about = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      ></Card>
    </div>
  );
}
