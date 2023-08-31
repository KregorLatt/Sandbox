import "./styles.css";

const myjson = [
  {
    Car: {
      Color: "Rose red",
      "Tinted Windows": false,
      Wheels: "4",
      "Roof cargo": null,
      Entertainment: [
        "FM Radio",
        "Mp3, MP4 and MKV player",
        "Harman/kardon speakers"
      ],
      Accessories: "satnav, cruise control"
    },

    Car2: {
      Color: "Navy blue",
      "Tinted Windows": true,
      Wheels: "4",
      "Roof cargo": "Thule",
      Entertainment: [
        "FM Radio",
        "Apple CarPlay/Android Auto",
        "Bowers & Wilkins Premium Sound speakers"
      ],
      Accessories: "self dive system, luggage cover"
    }
  }
];

document.getElementById("app").innerHTML = `
<div id="json"> 
<h1> Car properties </h1>
 <p> Color: ${myjson[0].Car.Color}</p>
 <p> Tinted windows: ${myjson[0].Car["Tinted Windows"]}</p>
 </div>
 `;
