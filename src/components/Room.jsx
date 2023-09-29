import React, { useState, useEffect } from "react";
import { AiFillCloud, AiFillCalendar } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Device from "./Device";

const Room = ({ devices, room, setRoom, device, setDevice, tnh }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleAddDevice = () => {
    setModal(!modal);
  };

  const handleSave = () => {
    if (modalData !== "") {
      console.log(devices[room]);
      let roomDevices = devices[room]
      roomDevices[modalData] = "off";
      setDevice((prev) => ({
        ...prev,
        [room]: roomDevices
      }));
      setModal(!modal);
      // setModal(!modal);
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
            <p>Please enter a device type</p>

            <input
              onChange={(e) => {
                setModalData(e.target.value);
              }}
              list="subcats"
              type="text"
              placeholder="Device type.."
              defaultValue=""
              className="p-4 rounded-xl shadow-md bg-white"
            />
            <datalist id="subcats">
              <option value="Washing Machine">Washing Machine</option>
              <option value="TV">TV</option>
              <option value="Hover">Hover</option>
              <option value="Speaker">Speaker</option>
              <option value="Light">Light</option>
              <option value="Door Lock">Door Lock</option>
              <option value="Air condition">Air condition</option>
              <option value="Hair dryer">Hair dryer</option>
              <option value="Air purifirt">Air purifirt</option>
            </datalist>

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

        <button onClick={() => navigate("/dashboard")} className="border-2 px-12 py-1 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md mr-auto ml-4 flex flex-nowrap items-center font-[600]">
          <MdOutlineArrowBackIosNew /> Go Back
        </button>
        <div className="flex flex-nowrap justify-between p-4">
          <span className="text-xl font-bold">Welcome to {room}!</span>
          <IoIosNotifications className="text-3xl" />
        </div>

        <div className="p-4">
          <img src="/assets/hk.jpg" className="h-[10svh] rounded-3xl" alt="" />
        </div>

        <div className="absolute flex flex-nowrap w-[100%] -bottom-10 gap-4 justify-end p-4">
          <button onClick={handleAddDevice} className="border-2 px-12 py-1 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
            +Add Device
          </button>
        </div>
      </div>

      <div className="listOfDevices grid grid-cols-2 grid-rows-[repeat(200px, minmax(0, 1fr))] gap-4 p-4 mt-4">
        {devices[room] &&
          Object.keys(devices[room]).map((device, index) => {
            return <Device key={crypto.randomUUID()} type={device} status={devices[room][device]} setDevice={setDevice} device={device} />;
          })}
      </div>
    </div>
  );
};

export default Room;
