import * as React from 'react';
import { YAxisLabelProps } from './types';

export const YAxisLabel: React.FC<YAxisLabelProps> = ({ value }) => {
  return (
    <div className="flex flex-wrap flex-1 gap-2.5 items-center size-full max-md:max-w-full">
      <div className="self-stretch my-auto">{value}</div>
      <div className="flex-1 shrink self-stretch my-auto h-px border border-dashed basis-0 bg-neutral-200 border-neutral-200 min-w-[240px] w-[742px]" />
    </div>
  );
};