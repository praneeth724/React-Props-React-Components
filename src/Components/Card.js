import React, { Component } from "react";
import MainComponent from "./MainComponent";
import FIFA from '../Assets/Assets/OIP.jpeg';
import AmongUs from '../Assets/Assets/OIP (1).jpeg';
import The_Legend_of_Zelda from '../Assets/Assets/OIP (2).jpeg';
import Fortnite from '../Assets/Assets/download.jpeg';
import Cod from '../Assets/Assets/download (1).jpeg'



export default class Card extends Component {
  render() {
    return (
      <div style={{display:"flex", flexDirection:"row"}}>
        <MainComponent Title="Call Of the Duty" Button="Play COD" Image={Cod} Para="A first-person shooter game that takes players on a thrilling journey through a modern-day conflict. With intense multiplayer modes and a gripping single-player campaign, Modern Warfare offers an immersive experience for fans of the franchise." Link="www.google.com" />
        <MainComponent Title="Legend of Zelda" Button="Play Legend of Zelda" Image={The_Legend_of_Zelda} Para="An action-adventure game set in a vast open world. Players control Link as he explores the kingdom of Hyrule, battles enemies, and solves puzzles. With stunning visuals and innovative gameplay, Breath of the Wild is a masterpiece of game design." />
        <MainComponent Title="FIFA 22" Button="Play FIFA 22" Image={FIFA} Para="The latest installment in the popular FIFA series, offering realistic soccer gameplay and a range of modes for both casual and competitive players. With updated rosters, improved graphics, and new features, FIFA 22 is a must-play for soccer fans" />
        <MainComponent Title="Among Us " Button="Play Among Us" Image={AmongUs} Para=" A multiplayer game of teamwork and betrayal, where players work together to complete tasks on a spaceship while trying to identify impostors among them. With its simple yet engaging gameplay, Among Us has become a sensation among gamers of all ages." />
        <MainComponent Title="Fortnite" Button="Play Fortnite" Image={Fortnite} Para="A battle royale game where players compete to be the last one standing. With its colorful graphics, building mechanics, and frequent updates, Fortnite has become a cultural phenomenon, attracting millions of players worldwide." />
       </div>
    );
  }
}
