import React, { useState } from "react";

function Features() {
  const [containers, setContainers] = useState([
    {
      name: "",
      icon: "https://cdn-icons-png.flaticon.com/512/115/115893.png",
      info1: "Manage Portfolio",
      info2: "Effortlessly buy, sell, and track your digital assets in one unified space. Stay updated with real-time insights.",
    },
    {
      name: "",
      icon: "https://cdn-icons-png.flaticon.com/512/95/95454.png",
      info1: "Secure Transactions",
      info2: "Enjoy seamless and secure transactions with industry-leading encryption and fraud protection mechanisms.",
    },
    {
      name: "",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968137.png",
      info1: "Advanced Analytics",
      info2: "Gain deep insights with powerful analytics, tracking patterns and trends to maximize investment opportunities.",
    },
    {
      name: "",
      icon: "https://cdn-icons-png.flaticon.com/512/3068/3068327.png",
      info1: "Real-Time Alerts",
      info2: "Receive instant notifications for market changes, ensuring you never miss a critical update on your assets.",
    }
  ]);

  return (
    <div className="flex gap-10 p-10 rounded-xl mt-20 justify-center flex-wrap">
      {containers.map((container, index) => (
        <div key={index} className="bg-white/40 flex flex-col items-center p-6 rounded-2xl w-80 shadow-lg">
          <img src={container.icon} alt="icon" className="w-12 h-12 mb-4" />
          <p className="text-xl font-bold text-white text-center">{container.info1}</p>
          <p className="text-white text-center">{container.info2}</p>
          <button className="bg-green-500 w-36 py-2 rounded-lg text-black font-bold mt-4 hover:bg-green-700 transition-all duration-300 shadow-md hover:scale-105">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Features;
