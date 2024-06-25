import { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";

import "./App.css";
function App() {
  const weather = useWeather();
  console.log(weather);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg"
  ];

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    return () => clearInterval(interval); 
  }, [backgroundImages]);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
    >
      <h1 className="title">Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
