import React, { useEffect, useState } from "react";
import "./Home_page.moduel.css";
import image11 from ".././images/image11.png";
import RainCloud from ".././images/Vector.png";

const Home_Page = () => {
  const [music, setMusic] = useState();
  const [userData, setUserData] = useState();
  const [weather, setWeather] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=c4698d6c956642ad88f170949232602&q=Mumbai&aqi=no"
      );
      const musicData = await localStorage.getItem("Select Music");
      const userSavedata = await localStorage.getItem("User Details");
      if (musicData && userSavedata) {
        setMusic(JSON.parse(musicData));
        setUserData(JSON.parse(userSavedata));
      } else {
        console.error("error");
      }
      const Weatherdata = await response.json();
      setWeather([Weatherdata]);
    }

    fetchData();
  }, []);

  function dltBtnClick(btn) {
    if (music.length > 1) {
      const newMusicArray = music.filter((music) => music !== btn.target.id);
      setMusic(newMusicArray);
      localStorage.setItem("Select Music", JSON.stringify(newMusicArray));
    } else {
      alert("You can't remove all music");
    }
  }

  if (weather) {
    console.log(weather.length);
  } else {
    console.log("error");
  }

  // {weather ? (console.log("weather") : (console.log("weather"))}
  // // console.log(weather);
  // // weather.map((data) => {
  // //   console.log(data);
  // // });
  // console.log(weather);
  return (
    <div className="cc">
      <div className="LeftDiv">
        <div className="LeftDivInnerDiv">
          <div className="LeftDivInnerDivFirst">
            <img src={image11}></img>
            <div className="userDetails">
              <div>
                {userData ? (
                  userData.map((data) => (
                    <div className="userDetailsInner">
                      <p className="userName">{data.Name}</p>
                      <p className="userEmail">{data.Email}</p>
                      <p className="UserUserName">{data.UserName}</p>
                    </div>
                  ))
                ) : (
                  <p>Loading data</p>
                )}
                <div className="userSelectMusic">
                  {music ? (
                    music.map((musicData) => (
                      <div className="userSelectMusicInnerDiv">
                        <p>{musicData}</p>
                        <p
                          id={musicData}
                          onClick={dltBtnClick}
                          className="delete"
                        >
                          X
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>Loading data</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {weather ? (
            weather.map((data) => (
              <div className="LeftDivInnerDivSecond">
                <div className="dateTime">
                  <p>2-20-2023</p>
                  <p>07:35 PM</p>
                </div>

                <div className="al">
                  <div className="cloudInfo">
                    <img src={data.current.condition.icon}></img>
                    <p>{data.current.condition.text}</p>
                  </div>
                  <div className="slashDiv">|</div>
                  <div className="degreeC">
                    <p>{data.current.temp_c}°C</p>
                    <p>{data.current.pressure_mb} mbar </p>
                    <p>Pressure</p>
                  </div>
                  <div className="slashDiv">|</div>

                  <div className="windInfo">
                    <p>{data.current.wind_kph} km/h</p>
                    <p>Wind</p>
                    <p>{data.current.humidity} %</p>
                    <p>Humidiy </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading data</p>
          )}
        </div>
      </div>
      <div className="RightDiv">
        <div className="RightDivFirst">
          <div className="climbDiv">
            <p className="climb">Want to climb Mount Everest?</p>
            <div className="date">
              <p>2-20-2023</p>
              <p>2-20-2023</p>
            </div>
            <p className="climatePera">
              In the years since human beings first reached the summit of Mount
              Everest in 1953, climbing the world’s highest mountain has changed
              dramatically. Today, hundreds of mountaineers manage the feat each
              year thanks to improvements in knowledge, technology, and the
              significant infrastructure provided by commercially guided
              expeditions that provide a veritable highway up the mountain for
              those willing to accept both the......
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
