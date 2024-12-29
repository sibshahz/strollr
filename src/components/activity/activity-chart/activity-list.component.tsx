import * as React from "react";
import { ActivityItem } from "./activity-item.component";
import { ActivityListProps } from "./types";

export const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="flex flex-col mt-8 w-full font-bold tracking-wider leading-none">
      {activities.map((activity, index) => (
        <div key={activity.name} className={index > 0 ? "mt-5" : ""}>
          <ActivityItem name={activity.name} percentage={activity.percentage} />
        </div>
      ))}
    </div>
  );
};