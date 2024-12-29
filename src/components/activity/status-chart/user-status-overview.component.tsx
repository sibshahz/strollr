import * as React from 'react';
import { BarChart } from './barchart.component';
import { YAxisLabel } from './yaxis-label.component';
import { WeekdayLabel } from './weekly-label.component';

export const UserStatusOverview: React.FC = () => {
  const yAxisValues = [35, 30, 25, 20, 15, 10, 5, 0];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const chartData = [
    { active: 160, inactive: 153 },
    { active: 150, inactive: 122 },
    { active: 176, inactive: 102 },
    { active: 144, inactive: 102 },
    { active: 196, inactive: 75 },
    { active: 116, inactive: 81 },
    { active: 76, inactive: 39 }
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 justify-between items-center pr-2.5 pl-4 w-full text-lg font-extrabold tracking-normal leading-none text-neutral-600 max-md:max-w-full">
        <div className="text-lg font-bold text-text-primary tracking-wide">User Status Overview</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d47fe0ed73bdd30b51f1e2b56615b63b25b2e1274d5bc12b2af9b94d4d686363?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
      <div className="flex flex-col items-center self-center mt-10 max-w-full w-[765px]">
        <div className="flex flex-col w-full max-w-[765px] max-md:max-w-full">
          <div className="flex flex-col w-full text-xs tracking-wide leading-tight whitespace-nowrap min-h-[292px] text-neutral-600 max-md:max-w-full">
            {yAxisValues.map((value) => (
              <YAxisLabel key={value} value={value} />
            ))}
          </div>
          
          <div className="relative ml-8">
            {chartData.map((data, index) => (
              <div key={index} className={`absolute ${index === 0 ? 'bottom-0' : 'bottom-0'}`} style={{ left: `${index * 110}px` }}>
                <BarChart 
                  height={data.active + data.inactive}
                  activeHeight={data.active}
                  inactiveHeight={data.inactive}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-20 items-start pl-9 mt-5 text-xs tracking-wide leading-tight whitespace-nowrap min-h-[13px] text-neutral-600 max-md:pl-5 max-md:max-w-full">
            {weekDays.map((day) => (
              <WeekdayLabel key={day} day={day} />
            ))}
          </div>
        </div>
        
        <div className="flex gap-10 items-start mt-6 text-sm font-bold tracking-wider leading-none whitespace-nowrap text-neutral-600">
          <div className="flex gap-2.5 items-center">
            <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-green-900 rounded-full fill-green-900" />
            <div className="self-stretch my-auto">Active</div>
          </div>
          <div className="flex gap-2.5 items-center">
            <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-full border border-solid bg-neutral-200 border-neutral-200 fill-neutral-200 stroke-[1px] stroke-neutral-200" />
            <div className="self-stretch my-auto">Inactive</div>
          </div>
        </div>
      </div>
    </div>
  );
};