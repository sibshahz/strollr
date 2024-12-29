import * as React from 'react';
import { WeekdayLabelProps } from './types';

export const WeekdayLabel: React.FC<WeekdayLabelProps> = ({ day }) => {
  return (
    <div className="flex-1 shrink basis-0">{day}</div>
  );
};