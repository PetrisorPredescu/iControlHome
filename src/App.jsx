import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, NavLink, BrowserRouter } from "react-router-dom";

import Auth from "./components/Auth";
import Room from "./components/Room";
import Device from "./components/Device";
import Dashboard from "./components/Dashboard";
import Control from "./components/Control";

const App = () => {
  const [data, setzData] = useState([
    { name: "January", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "February", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "March", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "April", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "May", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "June", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "July", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "August", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "September", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "October", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "November", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
    { name: "December", kw: parseFloat((Math.random() * (399 - 111) + 100).toFixed(1)) },
  ]);
  const [tnh, setTNH] = useState({
    temp: (Math.random() * (40 - 1) + 1).toFixed(1),
    humidity: (Math.random() * (40 - 1) + 1).toFixed(1),
  });
  const [room, setRoom] = useState("Reception");
  const [device, setDevice] = useState(undefined);
  const [devices, setDevices] = useState({
    Reception: {
      "Door Lock": "off",
      "Air Condition": "on",
      Lights: "off",
    },
    Living: {
      TV: "on",
      Lights: "off",
      Robot: "off",
    },
    Kitchen: {
      Speaker: "off",
      Lights: "on",
      "Washing Machine": "off",
    },
    Bedroom1: {
      Robot: "off",
      "Air purifier": "off",
      "Hair dryer": "off",
      Lights: "on",
    },
    Bedroom2: {
      Lights: "off",
      "Air purifier": "on",
      Robot: "off",
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Auth />} />
          <Route path="/Dashboard" element={<Dashboard devices={devices} setDevices={setDevices} room={room} setRoom={setRoom} tnh={tnh} data={data} />} />
          <Route path="/Room" element={<Room devices={devices} setDevices={setDevices} room={room} setRoom={setRoom} device={device} setDevice={setDevice} tnh={tnh} />} />
          <Route path="/Control" element={<Control devices={devices} setDevices={setDevices} room={room} setRoom={setRoom} type={device} setDevice={setDevice} tnh={tnh} />} />
          <Route path="/Device" element={<Device devices={devices} setDevices={setDevices} device={device} setDevice={setDevice} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  return <Outlet />;
};

export default App;
