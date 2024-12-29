import * as React from 'react';
import StatusOverviewBarChart from './status-overview-barchart.component';

export const UserStatusOverviewRecharts: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 justify-between items-center pr-2.5 pl-4 w-full text-lg font-extrabold tracking-normal leading-none text-neutral-600 max-md:max-w-full mb-10">
        <div className="text-lg font-bold text-text-primary tracking-wide">User Status Overview</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d47fe0ed73bdd30b51f1e2b56615b63b25b2e1274d5bc12b2af9b94d4d686363?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
      <div className='h-96'>
        <StatusOverviewBarChart />
      </div>
    </div>
  );
};