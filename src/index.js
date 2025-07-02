import React from "react";
import ReactDOM from "react-dom";

var picture = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png"
        alt="bacon"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmnkZ-4VclOBc-kHc-sFyjHeD5vZSV0urqA&s"
        alt="jamon"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiCh9QdvSiq7g5SRR1_74NaADakwY8s6VAYa19vNCns0h9uQHADxVuZVmvO2V06c8OGM&usqp=CAU"
        alt="noodles"
      />
    </div>
    <h1>My Favourite Picture</h1>
    <img src={picture + "?grayscale"} alt="random" />
  </div>,
  document.getElementById("root")
);
