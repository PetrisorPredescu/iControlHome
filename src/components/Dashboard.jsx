import React, { useState, useEffect } from "react";
import { AiFillCloud, AiFillCalendar } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { IoIosNotifications } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import Room from "./Room";
import Device from "./Device";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush } from "recharts";

const Dashboard = ({ devices, room, setRoom, tnh, data, setDevices }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");

  useEffect(() => {}, [devices]);

  const handleAddRoom = () => {
    setModal(!modal);
  };

  const handleSave = () => {
    if (modalData !== "") {
      setDevices((prev) => ({
        ...prev,
        [modalData]: {},
      }));
      setModal(!modal);
    }
  };

  return (
    <div className="pb-[5rem] relative">
      {modal && (
        <div className="modalBG fixed right-0 left-0 bg-white/90 top-0 bottom-0 z-40 text-center flex flex-col items-center">
          <button className="absolute top-0 left-0 p-2 text-lg animate-fadeUP1 flex flex-nowrap items-center" onClick={() => setModal(!modal)}>
            <BsChevronLeft /> Cancel
          </button>

          <div className="flex flex-col mt-[20svh] gap-8">
            <p>Please enter a room name</p>
            <input type="text" className="p-4 rounded-xl shadow-md bg-white" defaultValue="" onChange={(e) => setModalData(e.target.value)} />
            <button onClick={handleSave} className="px-4 py-1 rounded-xl bg-[#254BEC] text-white text-bold shadow-md">
              Save
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col w-[100%] bg-[#254BEC] text-white rounded-b-3xl relative">
        <div className="flex flex-col w-[100%]">
          <div className="flex flex-wrap gap-2 items-center w-[100%] p-4">
            <div className="flex flex-nowrap gap-2">
              <AiFillCloud className="m-auto" />
              <span>{tnh.temp}&deg;C</span>
            </div>
            <div className="flex flex-nowrap gap-2">
              <WiHumidity className="m-auto text-2xl" />
              <span>{tnh.humidity}</span>
            </div>
            <div className="flex flex-nowrap gap-2">
              <AiFillCalendar className="m-auto" />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="ml-auto flex">
              <span className="h-[40px] w-[40px] rounded-full bg-red-300 p-2 aspect-square text-center border-2 border-white">L</span>
            </div>

            <button onClick={() => navigate("/")} className="border-2 px-4 py-1 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              Sign Out
            </button>
          </div>
        </div>

        <div className="flex flex-nowrap justify-between p-4">
          <span className="text-xl font-bold">Hi, John Doe</span>
          <IoIosNotifications className="text-3xl" />
        </div>

        <div className="p-4">
          <span>Welcome to IcontrolHome! Take control as you begin your seamless journey of home automation.</span>
        </div>

        <div className="absolute flex flex-nowrap w-[100%] -bottom-10 gap-4 justify-end p-4">
          <button onClick={handleAddRoom} className="border-2 px-12 py-1 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
            +Add Room
          </button>
        </div>
      </div>

      <div className="rooms mt-12 p-4 w-[100%] overflow-x-scroll flex flex-nowrap gap-4">
        {Object.keys(devices).map((device, index) => {
          return (
            <button key={crypto.randomUUID()} onClick={() => setRoom(device)} className={`px-12 py-1 text-black rounded-xl ${room === device ? "bg-blue-200" : "bg-gray-200"}  shadow-md`}>
              {device}
            </button>
          );
        })}
      </div>

      <div className="listOfDevices grid grid-cols-2 grid-rows-[repeat(200px, minmax(0, 1fr))] gap-4 p-4">
        {devices[room] &&
          Object.keys(devices[room]).map((device, index) => {
            if (index < 2) return <Device key={crypto.randomUUID()} type={device} status={devices[room][device]} />;
          })}

        {Object.keys(devices[room]).length < 1 && <p className="col-span-2 text-center">No devices in this room registred.</p>}

        <div className="grid col-span-2 grid-cols-2">
          <span></span>
          <button onClick={() => navigate("/room")} className=" ml-auto py-1 text-black rounded bg-gray-50 shadow-md flex justify-end gap-4 px-4 w-[100%]">
            <span>Manage Room</span>
            <span>▶</span>
          </button>
        </div>

        <div className="col-span-2 h-[50svh] flex flex-col mt-4">
          <div className="flex justify-between px-4">
            <span className="font-bold text-lg flex flex-col">
              <span className="px-4">Total Consumption {new Date().getFullYear()}</span>
              <span className="px-4">{data.reduce((sum, item) => sum + item.kw, 0).toFixed(1)}kw</span>
            </span>
            <select name="sbm" id="sbm" defaultValue="Monthly" className="p-2 border-2 rounded-xl">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="kw" stroke="#254BEC" fill="#254BEC" />
              <Brush dataKey="kw" height={30} stroke="#254BEC" travellerWidth={50} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
