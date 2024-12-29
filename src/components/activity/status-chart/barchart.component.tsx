import * as React from 'react';
import { BarChartProps } from './types';

export const BarChart: React.FC<BarChartProps> = ({ height, activeHeight, inactiveHeight }) => {
  return (
    <div className="flex gap-1" style={{ height: `${height}px` }}>
      <div className="flex gap-2.5 h-full w-[27px]">
        <div 
          className="flex flex-1 shrink w-full bg-green-900 rounded-md basis-0"
          style={{ minHeight: `${activeHeight}px` }}
        />
      </div>
      <div className="flex gap-2.5 self-end w-[27px]">
        <div 
          className="flex flex-1 shrink w-full rounded-md basis-0 bg-neutral-200"
          style={{ minHeight: `${inactiveHeight}px` }}
        />
      </div>
    </div>
  );
};