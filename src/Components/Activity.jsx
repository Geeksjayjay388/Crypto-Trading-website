import { useEffect, useState } from "react";

function Activity() {
  const [data, setData] = useState([
    { name: "BTC", fullName: "Bitcoin", price: "$56,623.54", change: "1.41%", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png", graph:"https://cdn-icons-png.flaticon.com/512/10762/10762997.png" },
    { name: "ETH", fullName: "Ethereum", price: "$3,456.23", change: "2.10%", icon: "https://cdn-icons-png.flaticon.com/512/15208/15208017.png ", graph: "https://cdn-icons-png.flaticon.com/512/10728/10728560.png" },
    { name: "ADA", fullName: "Cardano", price: "$1.23", change: "-0.85%", icon: "https://cdn-icons-png.flaticon.com/512/7582/7582846.png", graph: "https://cdn-icons-png.flaticon.com/512/10762/10762997.png" },
    { name: "DOGE", fullName: "Dogecoin", price: "$0.062", change: "5.12%", icon: "https://cdn-icons-png.flaticon.com/512/9301/9301018.png ", graph: "https://cdn-icons-png.flaticon.com/512/10728/10728560.png" },
    { name: "XRP", fullName: "Ripple", price: "$0.45", change: "1.76%", icon: "https://cdn-icons-png.flaticon.com/512/1490/1490820.png ", graph: "https://cdn-icons-png.flaticon.com/512/10762/10762997.png" },
    { name: "SOL", fullName: "Solana", price: "$125.80", change: "3.44%", icon: "   https://cdn-icons-png.flaticon.com/512/14446/14446237.png ", graph: "https://cdn-icons-png.flaticon.com/512/10728/10728560.png"},
  ]);

  useEffect(() => {
    const updatePrices = () => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          price: `$${(parseFloat(item.price.slice(1)) + (Math.random() * 10 - 5)).toFixed(2)}`,
        }))
      );
    };

    const interval = setInterval(updatePrices, 5000); // Updates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-transparent text-white pt-40 p-10">
      <p className="font-bold text-white text-3xl pb-10">Market Trend</p>

      <div className="grid grid-cols-3 px-20 gap-25">
        {data.map((item, index) => (
          <section 
            key={index} 
            className="p-8  pl-9 space-y-4 backdrop-blur-md bg-white/10 rounded-lg transition-transform duration-500 ease-in-out"
          >
            <div className="flex space-x-3 items-center">
              <img src={item.icon} className="h-12" alt={item.name} />
              <p className="font-bold text-2xl">{item.name}</p>
              <p className="font-bold text-sm">{item.fullName}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-4xl font-bold pb-2 transition-opacity duration-500">{item.price}</p>
                <p className="font-bold">{item.change}</p>
              </div>
              <img src={item.graph} className="h-24" alt="Price trend graph" />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Activity;
