import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Device = ({ type, status, device, setDevice }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, [type, status]);

  const handleView = () => {
    setDevice(type);
    navigate("/control");
  };

  let predefinedDevices = ["Air Condition", "Lights", "Speaker", "Door Lock", "TV", "Washing Machine", "Air purifier", "Robot", "Hair dryer"];

  return (
    <>
      {!predefinedDevices.includes(type) && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <p className="p-4 border-2 text-xl font-[900] tracking-widest rounded-xl shadow-md" style={{ textShadow: "1px 1px 1px #919191,1px 2px 1px #919191,1px 3px 1px #919191,1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)" }}>
            IcontrolHome
          </p>
          <span className="mt-auto">{type}</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}

      {type === "Air Condition" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/ac.png" alt="" className="w-1/2" />
          <span className="mt-auto">Air Condition</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Lights" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/cl.png" alt="" className="w-1/2" />
          <span className="mt-auto">Lights</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Speaker" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/sp.png" alt="" className="w-1/2" />
          <span className="mt-auto">Speaker</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Door Lock" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/dl.png" alt="" className="w-1/2" />
          <span className="mt-auto">Door Lock</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "TV" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/tv.png" alt="" className="w-1/2" />
          <span className="mt-auto">TV</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Washing Machine" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/wm.png" alt="" className="w-1/2" />
          <span className="mt-auto">Washing Machine</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Air purifier" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/ap.png" alt="" className="w-1/2" />
          <span className="mt-auto">Air purifier</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Robot" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/rv.png" alt="" className="w-1/2" />
          <span className="mt-auto">Robot</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
      {type === "Hair dryer" && (
        <div className="device flex flex-col items-center justify-center shadow-md p-4">
          <img src="/assets/hd.png" alt="" className="w-1/2" />
          <span className="mt-auto">Hair dryer</span>
          <label className="switch">
            <input type="checkbox" onChange={() => null} defaultChecked={status === "off" ? false : true} />
            <span className="slider"></span>
          </label>
          {location.pathname === "/room" && (
            <button onClick={handleView} className="border-2 px-12 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md">
              View Controlls
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Device;
