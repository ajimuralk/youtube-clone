import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter} from "react-router-dom";

const userComments = [
  {
    name: "*****",
    date: "7/4/2018",
    text:
      ""
  },
  {
    name: "Gary Wong",
    date: "7/5/2018",
    text:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "7/5/2018",
    text:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

const sideVideo = [
  {
    id: null,
    image: "../images/video-list-1.jpg",
    title: "The Miracle of Childbirth",
    channel: "Natasha Webber"
  },
  {
    id: null,
    image: "../images/video-list-2.jpg",
    title: "The Underworld for Idiots",
    channel: "Malcolm Cochies"
  },
  {
    id: null,
    image: "../images/video-list-3.jpg",
    title: "Health Foods for Yogis of Idaho",
    channel: "Willard Maxim"
  },
  {
    id: null,
    image: "../images/video-list-4.jpg",
    title: "Airballoon Death Stats",
    channel: "Malcolm Cochies"
  },
  {
    id: null,
    image: "../images/video-list-5.jpg",
    title: "The Art of Staycation",
    channel: "Wallace Manly"
  },
  {
    id: null,
    image: "../images/video-list-6.jpg",
    title: "STFU & Rest",
    channel: "Bernice Johnson"
  },
  {
    id: null,
    image: "../images/video-list-7.jpg",
    title: "Cruising for a Brusing",
    channel: "Walter Lim"
  },
  {
    id: null,
    image: "../images/video-list-8.jpg",
    title: "Sustainable Architecture",
    channel: "Madeline Vos"
  }
];

//Main Video Object
const video = [
  {
    id: null,
    title: "The Roadside Desert Chronicles",
    description: `Humblebrag disrupt mumblecore master cleanse, pickled ugh before they
    sold out helvetica edison bulb readymade. Retro meggings austin prism
    bushwick organic quinoa single-origin coffee kitsch affogato heirloom
    semiotics paleo health goth DIY. Tattooed polaroid next level, bitters
    pinterest disrupt tacos. Celiac street art plaid, drinking vinegar DIY
    readymade iceland shabby chic taiyaki dreamcatcher photo booth salvia
    cold-pressed bitters waistcoat. Shabby chic keffiyeh poke raw denim,
    succulents twee iceland actually franzen godard pork belly.`,
    channel: "Yürn",
    image: "public/images/video-list-0.jpg",
    views: 12000,
    likes: 2,
    duration: null,
    video: null,
    timestamp: "02/14/19",
    comments: null
  }
];

ReactDOM.render(
  <BrowserRouter>
    <App
      userComments={userComments}
      video={video}
      sideVideo={sideVideo}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
