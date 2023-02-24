import React, { useState, useEffect } from "react";
import "./Select_Music.moduel.css";
import Image2 from ".././images/image2.png";
import Image3 from ".././images/image3.png";
import Image4 from ".././images/image4.png";
import Image5 from ".././images/image5.png";
import Image6 from ".././images/image6.png";
import Image7 from ".././images/image7.png";
import Image8 from ".././images/image8.png";
import Image9 from ".././images/image9.png";
import Image10 from ".././images/image10.png";
const Select_Music = () => {
  const [newArray, setNewArray] = useState([]);
  const [clicked, setClicked] = useState(false);
  let arr = [
    {
      id: 1,
      color: "#FF5209",
      text: "Action",
      image: Image2,
    },
    {
      id: 2,
      color: "#D7A4FF",

      text: "Drama",
      image: Image3,
    },
    {
      id: 3,
      color: "#11B800",
      text: "Romance",
      image: Image4,
    },
    {
      id: 4,
      color: "#84C2FF",

      text: "Thriller",
      image: Image5,
    },
    {
      id: 5,
      color: "#902500",
      text: "Western",
      image: Image6,
    },
    {
      id: 6,
      color: "#7358FF",

      text: "Horror",
      image: Image7,
    },
    {
      id: 7,
      color: "#FF4ADE",

      text: "Fantasty",
      image: Image8,
    },
    {
      id: 8,
      color: "#E61E32",

      text: "Music",
      image: Image9,
    },
    {
      id: 9,
      color: "#6CD061",

      text: "Fiction",
      image: Image10,
    },
  ];

  function handleClick(e) {
    if (!clicked) {
      setClicked(true);
    }
    if (newArray.includes(e)) {
      setNewArray(newArray.filter((i) => i !== e));
    } else {
      setNewArray([...newArray, e]);

      console.log(setNewArray);
      console.log(newArray);
    }
  }
  function dltBtnClick(btn) {
    const newMusicArray = newArray.filter((music) => music !== btn.target.id);
    setNewArray(newMusicArray);
  }

  function nextBtnHandler() {
    console.log(newArray.length);

    if (!newArray.length == 0) {
      localStorage.setItem("Select Music", newArray);
    } else {
      alert("Please select at least one Music Category");
    }
  }

  return (
    <div className="Container">
      <div className="leftContainer">
        <p className="aaa">Super app</p>
        <h1>
          Choose your <br /> entertainment <br /> category
        </h1>
        <div className="category">
          {newArray.map((music) => (
            <div className="categoryInnerDiv">
              <p>{music}</p>
              <p id={music} onClick={dltBtnClick} className="delete">
                X
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="rightContainer">
        <div class="row">
          {arr.map((image) => (
            <div
              id={image.id}
              name={image.text}
              onClick={() => handleClick(image.text)}
              style={{ backgroundColor: image.color }}
              class="column buttonShadow {pickerHover}"
            >
              <div class="card">
                <div className="textDiv">
                  <p>{image.text}</p>
                </div>

                <img src={image.image}></img>
              </div>
            </div>
          ))}
        </div>
        <div className="nextBtnDiv">
          <button onClick={nextBtnHandler} className="nextBtn">
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select_Music;
