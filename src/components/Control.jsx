import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillCloud, AiFillCalendar, AiFillFire } from "react-icons/ai";
import { BsSnow, BsBatteryCharging } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { GiDividedSpiral } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { MdOutlineArrowBackIosNew, MdOutlineMotionPhotosAuto } from "react-icons/md";

const Control = ({ type, tnh, devices, setDevices }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(">>>>>", type);
  }, [type, status]);

  let predefinedDevices = ["Air Condition", "Lights", "Speaker", "Door Lock", "TV", "Washing Machine", "Air purifier", "Robot", "Hair dryer"];
  return (
    <div className="pb-[5rem]">
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

        <button onClick={() => navigate("/room")} className="border-2 px-12 py-1 border-gray-50 text-black rounded-xl bg-gray-50 mr-auto ml-4 flex flex-nowrap items-center font-[600]">
          <MdOutlineArrowBackIosNew /> Go Back
        </button>

        {!predefinedDevices.includes(type) && (
          <div className="device flex flex-col items-center justify-center p-4">
            <p className="p-4 border-2 text-xl font-[900] tracking-widest rounded-xl shadow-md" style={{ textShadow: "1px 1px 1px #919191,1px 2px 1px #919191,1px 3px 1px #919191,1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)" }}>
              IcontrolHome
            </p>
            <span className="mt-auto">{type}</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}

        {type === "Air Condition" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/ac.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Air Condition</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Lights" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/cl.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Lights</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Speaker" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/sp.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Speaker</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Door Lock" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/dl.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Door Lock</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "TV" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/tv.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">TV</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Washing Machine" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/wm.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Washing Machine</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Air purifier" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/ap.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Air purifier</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Robot" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/rv.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Robot</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {type === "Hair dryer" && (
          <div className="device flex flex-col items-center justify-center p-4">
            <img src="/assets/hd.png" alt="" className="w-auto max-h-[20svh]" />
            <span className="mt-auto">Hair dryer</span>
            <label className="switch">
              <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
              <span className="slider"></span>
            </label>
          </div>
        )}
      </div>
      <div className="p-4 mt-4 flex flex-col gap-4">
        <span className="px-4 font-bold">Schedule</span>
        <div className="flex flex-nowrap justify-evenly px-4">
          <input type="datetime-local" />
          <input type="datetime-local" />
        </div>
        <button className="px-4 py-1  text-white font-bold text-lg rounded-xl bg-blue-500 shadow-md border-2 border-white">Set Schedule</button>
      </div>


      {type === "Air purifier" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Power</p>
            <input className="py-1 text-lg rounded-xl bg-blue-100 " type="range" defaultValue="2" min="0" max="10" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Timer</p>
            <input type="time" className="px-4 py-1 text-lg rounded-xl bg-blue-100 " />
          </div>
        </div>
      )}
      {type === "Washing Machine" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>
              Temperature: <span id="temperatureValue">40</span>&deg;
            </p>
            <input
              className="py-1 text-lg rounded-xl bg-blue-100"
              type="range"
              defaultValue="40"
              min="0"
              max="100"
              onChange={(e) => {
                document.getElementById("temperatureValue").textContent = e.target.value;
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-8">
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <GiDividedSpiral className="mx-auto" />
              Spin
            </button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <TiArrowRepeatOutline className="mx-auto" />
              Wash
            </button>

            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <MdOutlineMotionPhotosAuto className="mx-auto" />
              Eco
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Timer</p>
            <input type="time" className="px-4 py-1 text-lg rounded-xl bg-blue-100 " />
          </div>
        </div>
      )}
      {type === "TV" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="grid grid-cols-3 gap-2">
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">1</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">2</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">3</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">4</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">5</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">6</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">7</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">8</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">9</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">*</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">0</button>
            <button className="p-2 shadow-md font-bold rounded-lg text-lg">#</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 shadow-md font-bold rounded-lg text-lg py-8 px-4 bg-gray-200 flex flex-col justify-between gap-8">
              <button className="grid grid-cols-1 border-2 rounded-t-full p-3 border-t-black border-x-black bg-gray-200"></button>
              <span>Vol</span>
              <button className="grid grid-cols-1 border-2 rounded-b-full p-3 border-b-black border-x-black bg-gray-200"></button>
            </div>
            <div className="p-2 shadow-md font-bold rounded-lg text-lg py-8 px-4 bg-gray-200 flex flex-col justify-between gap-8">
              <button className="grid grid-cols-1 border-2 rounded-t-full p-3 border-t-black border-x-black bg-gray-200"></button>
              <span>Ch</span>
              <button className="grid grid-cols-1 border-2 rounded-b-full p-3 border-b-black border-x-black bg-gray-200"></button>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-4 border-2 shadow-xl rounded-full p-2">
            <div className="grid grid-cols-1 border-2 rounded-t-full p-3 border-t-black border-x-black bg-gray-200">
              <span></span>
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              <span className="grid grid-cols-1 border-2 rounded-l-full p-3 border-l-black border-y-black bg-gray-200"></span>
              <span>⚫</span>
              <span className="grid grid-cols-1 border-2 rounded-r-full p-3 border-r-black border-y-black bg-gray-200"></span>
            </div>
            <div className="grid grid-cols-1 border-2 rounded-b-full p-3 border-b-black border-x-black bg-gray-200">
              <span></span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button className="p-4 rounded-lg shadow-md font-bold text-lg bg-red-400"></button>
            <button className="p-4 rounded-lg shadow-md font-bold text-lg bg-yellow-400"></button>
            <button className="p-4 rounded-lg shadow-md font-bold text-lg bg-blue-400"></button>
            <button className="p-4 rounded-lg shadow-md font-bold text-lg bg-green-400"></button>
          </div>
        </div>
      )}
      {type === "Door Lock" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="grid grid-cols-3 gap-6">
            <button className="p-2 shadow-md font-bold text-lg">1</button>
            <button className="p-2 shadow-md font-bold text-lg">2</button>
            <button className="p-2 shadow-md font-bold text-lg">3</button>
            <button className="p-2 shadow-md font-bold text-lg">4</button>
            <button className="p-2 shadow-md font-bold text-lg">5</button>
            <button className="p-2 shadow-md font-bold text-lg">6</button>
            <button className="p-2 shadow-md font-bold text-lg">7</button>
            <button className="p-2 shadow-md font-bold text-lg">8</button>
            <button className="p-2 shadow-md font-bold text-lg">9</button>
            <button className="p-2 shadow-md font-bold text-lg">*</button>
            <button className="p-2 shadow-md font-bold text-lg">0</button>
            <button className="p-2 shadow-md font-bold text-lg">#</button>
          </div>

          <img src="/assets/fp.JPG" className="rounded-full" alt="" />
        </div>
      )}
      {type === "Robot" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="grid grid-cols-1 justify-items-center gap-4 border-2 shadow-xl rounded-full p-2">
            <div className="grid grid-cols-1 border-2 rounded-t-full p-3 border-t-black border-x-black bg-gray-200">
              <span></span>
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              <span className="grid grid-cols-1 border-2 rounded-l-full p-3 border-l-black border-y-black bg-gray-200"></span>
              <span>⚫</span>
              <span className="grid grid-cols-1 border-2 rounded-r-full p-3 border-r-black border-y-black bg-gray-200"></span>
            </div>
            <div className="grid grid-cols-1 border-2 rounded-b-full p-3 border-b-black border-x-black bg-gray-200">
              <span></span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8">
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <GiDividedSpiral className="mx-auto" />
              Spiral
            </button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <TiArrowRepeatOutline className="mx-auto" />
              Side Wall
            </button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <BsBatteryCharging className="mx-auto" />
              Charge
            </button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <MdOutlineMotionPhotosAuto className="mx-auto" />
              Auto
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Power</p>
            <input className="py-1 text-lg rounded-xl bg-blue-100 " type="range" defaultValue="2" min="0" max="10" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Timer</p>
            <input type="time" className="px-4 py-1 text-lg rounded-xl bg-blue-100 " />
          </div>
        </div>
      )}
      {type === "Speaker" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Light Color</p>
            <input className=" text-lg rounded-xl bg-blue-100" type="color" defaultValue="#000000" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Volume</p>
            <input className="py-1 text-lg rounded-xl bg-blue-100 " type="range" defaultValue="2" min="0" max="10" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Timer</p>
            <input type="time" className="px-4 py-1 text-lg rounded-xl bg-blue-100 " />
          </div>
        </div>
      )}
      {type === "Lights" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Light Color</p>
            <input className=" text-lg rounded-xl bg-blue-100" type="color" defaultValue="#000000" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Brightness</p>
            <input className="py-1 text-lg rounded-xl bg-blue-100 " type="range" defaultValue="2" min="0" max="10" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Timer</p>
            <input type="time" className="px-4 py-1 text-lg rounded-xl bg-blue-100 " />
          </div>
        </div>
      )}
      {type === "Air Condition" && (
        <div className="device flex flex-col items-center justify-center p-4 gap-4">
          <div className="flex justify-center items-center gap-8">
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">➕</button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">➖</button>
          </div>
          <div className="flex justify-center items-center gap-8">
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <BsSnow className="mx-auto" />
              Cool
            </button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <AiFillFire className="mx-auto" />
              Hot
            </button>
            <button className="px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
              <MdOutlineMotionPhotosAuto className="mx-auto" />
              Auto
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Fan Speed</p>
            <input className="py-1 text-lg rounded-xl bg-blue-100 " type="range" defaultValue="2" min="0" max="10" />
          </div>

          <div className="flex justify-center items-center gap-8 px-4 py-1 text-lg rounded-xl bg-blue-100 shadow-md border-2 border-white">
            <p>Timer</p>
            <input type="time" className="px-4 py-1 text-lg rounded-xl bg-blue-100 " />
          </div>
        </div>
      )}
    </div>
  );
};

export default Control;
