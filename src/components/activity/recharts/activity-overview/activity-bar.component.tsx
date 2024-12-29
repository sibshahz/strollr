import React from "react";

const data = [
  { name: "Outdoor Activities", value: 85, fillColor: "#1cb0f6" },
  { name: "Paid Activities", value: 50, fillColor: "#ff4b4b" },
  { name: "Free Activities", value: 97, fillColor: "#ffc800" },
  { name: "At Home Activities", value: 90, fillColor: "#ce82ff" },
];

const ActivityBarItem = ({ name, value, fillColor }) => {
  return (
    <div className="flex flex-col justify-center mb-5 hover:cursor-pointer max-w-[90%]">
    

      <div className="text-info flex flex-row justify-between items-center mb-[10px]">
      <p className="text-text-primary text-sm font-medium">{name}</p>
      <p className="text-text-primary text-sm font-medium">{value}%</p>
      </div>
      <div className="bg-neutrals-main w-full h-2 rounded-full">
        <div
          className=" h-2 rounded-full"
          style={{ width: `${value}%`, background: fillColor }}
        ></div>
      </div>
    </div>
  );
};
const ActivityBarComponent = () => {
  return (
    <div>
      <h6 className="text-text-primary text-sm font-bold tracking-wide mb-8">
        Participation Rate
      </h6>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <ActivityBarItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default ActivityBarComponent;
