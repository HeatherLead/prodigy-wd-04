import React, { useState, useEffect, useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AirIcon from "@mui/icons-material/Air";
import SpeedIcon from "@mui/icons-material/Speed";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Home = () => {
  const [change, setChange] = useState("");
  const [city, setCity] = useState("london");
  const [event, setEvent] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [wind, setWind] = useState();
  const [units, setUnits] = useState("metric");
  const [un, setUn] = useState(false);
  const [des, setDes] = useState(false);
  const [hum, setHum] = useState(false);
  const [pres, setPres] = useState(false);
  const [win, setWin] = useState(false);
  const [error, setError] = useState("");
  const [wSpeed, setWspeed] = useState("m/s");

  useEffect(() => {
    try {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=21941ec6cbbcc691ab9923bb07a142d6&units=" +
          units +
          ""
      )
        .then((res) => {
          if (res.ok === false) {
            setError("unable to find city!");
            console.log(error);
          }
          return res.json();
        })
        .then((value) => {
          const Wname = value.weather[0].main;
          setName(Wname);
          const wDescription = value.weather[0].description;
          setDescription(wDescription);
          const wIcon = value.weather[0].icon;
          setIcon(wIcon);
          const wTemp = Math.round(Number(value.main.temp));
          setTemp(wTemp);
          const wHumidity = value.main.humidity;
          setHumidity(wHumidity);
          const wPressure = value.main.pressure;
          setPressure(wPressure);
          const wWind = value.wind.speed;
          setWind(wWind);
          setError(null);
        })
        .catch((err) => {
          setError("unable to find city!");
        });
    } catch (e) {
      console.log(e);
    }
  }, [city]);
  function submit() {
    setEvent(true);
    setChange("");
    setCity(change);
  }
  function handleChange(event) {
    const newValue = event.target.value;
    setChange(newValue);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date().getDate();
  const point = new Date().getMonth();
  function handle(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  return (
    <div className=" p-10 w-screen h-screen">
      <div className=" w-[94vw] h-[90vh] bg-white bg-opacity-15 backdrop-filter backdrop-blur-md shadow-sm rounded-xl grid  grid-rows-3 grid-cols-6 gap-5 justify-items-center content-center items-center p-2">
        <div className=" col-span-4 row-span-2 grid grid-rows-2 grid-cols-4">
          <div className=" col-span-2 row-span-2">
            <h1 className=" justify-start  text-white text-5xl ">
              <span className=" text-white ">
                <LocationOnIcon fontSize="large" />
              </span>
              {city}
            </h1>
            <div className=" flex justify-evenly items-center w-full">
              <h1 className=" text-[10rem] font-bold text-white text-center">
                {temp}°C
              </h1>
            </div>
          </div>
          <div className=" col-span-2 row-span-2">
            <img
              className=" w-full"
              src={"https://openweathermap.org/img/wn/" + icon + "@2x.png"}
            />
          </div>
        </div>
        <div className=" col-span-2 row-span-2 grid grid-rows-2 grid-cols-2 w-full h-full ">
          <div className="row-span-1 col-span-2">
            <input
              onChange={handleChange}
              className="w-[80%] h-10 px-4  mt-14 rounded-lg"
              type="text"
              placeholder="Enter your City"
              value={change}
            ></input>
            <button
              className=" ml-4 w-10 h-10 bg-white rounded-lg"
              onClick={submit}
            >
              <SendIcon />
            </button>
            {error && (
              <div className="text-red-500 text-xl font-bold mt-10">
                {error}
              </div>
            )}
          </div>
          <h1 className=" pl-5 text-white text-8xl col-span-2 row-span-1 font-bold">
            {months[point] + "  " + date}
          </h1>
        </div>
        <div className="col-span-1 row-span-1 w-full h-full self-center content-center  bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg">
          <h1 className="text-white text-3xl text-center ">{description}</h1>
          <p className="pt-5 text-center text-white text-xl">Description</p>
        </div>
        <div className="col-span-1 row-span-1 w-full h-full self-center content-center  bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg">
          <h1 className="text-white text-xl text-center">
            <SpeedIcon />
            {"   " + wind + " " + wSpeed}
          </h1>
          <p className="pt-5 text-center text-white text-xl">Wind Speed</p>
        </div>
        <div className="col-span-1 row-span-1 w-full h-full self-center content-center  bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg">
          <h1 className="text-white text-xl text-center">
            <AirIcon />
            {"  " + humidity + " g.m-3"}
          </h1>
          <p className="pt-5 text-center text-white text-xl">Humidity</p>
        </div>
        <div className="col-span-1 row-span-1 w-full h-full self-center content-center  bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg">
          <h1 className="text-white text-xl text-center">{pressure + " pa"}</h1>
          <p className="pt-5 text-center text-white text-xl">Pressure</p>
        </div>
        <div className=" col-span-2 row-span-1">
          <h1 className=" text-white text-3xl font-bold mb-5">
            Sign In for NewsLetter!
          </h1>

          <div className=" flex justify-end space-x-2">
            <a
              className=" text-white  "
              href="https://www.linkedin.com/in/ayush-bangar-474608297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a className=" text-white" href="https://github.com/HeatherLead">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
