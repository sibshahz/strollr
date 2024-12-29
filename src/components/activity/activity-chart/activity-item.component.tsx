import * as React from "react";
import { ActivityItemProps } from "./types";

export const ActivityItem: React.FC<ActivityItemProps> = ({ name, percentage }) => {
  return (
    <div className="flex flex-col px-5 pb-2.5 w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="flex gap-10 justify-between items-center w-full">
          <div className="self-stretch my-auto">{name}</div>
          <div className="self-stretch my-auto">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};