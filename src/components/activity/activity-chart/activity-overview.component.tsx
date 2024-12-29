import * as React from "react";
import { ActivityList } from "./activity-list.component";
import { ActivityItemProps } from "./types";

const activities: ActivityItemProps[] = [
  { name: "Outdoor Activities", percentage: 85 },
  { name: "Paid Activities", percentage: 50 },
  { name: "Free Activities", percentage: 97 },
  { name: "At Home Activities", percentage: 90 }
];

export const ActivityOverview: React.FC = () => {
  return (
    <div className="col-span-6 xl:col-span-2 flex flex-col justify-center self-stretch p-5 text-sm font-extrabold bg-white rounded-2xl grow-1 min-w-full w-full text-neutral-600">
      <div className="gap-1.5 self-stretch w-full text-lg tracking-normal leading-none">
        Activity Performance Overview
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93e54f75241b64d8d94be14050b654ae4f13c88c0d7c5538842897203dad77b?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663"
        alt="Activity performance chart"
        className="object-contain self-center mt-8 max-w-full rounded-xl aspect-square w-[204px]"
      />
      <div className="gap-1.5 self-stretch mt-8 w-full tracking-normal leading-none">
        Participation Rate
      </div>
      <ActivityList activities={activities} />
    </div>
  );
};