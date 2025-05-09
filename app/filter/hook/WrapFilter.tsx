'use client';

import useFilterStore from '@/app/store/Filter';
import React from 'react';
export interface IWrappFilters {
  destination: string;
  duration: string;
  type: string;
}
type Props = {
  children: React.ReactElement; 
};

const WithFilterClientWrapper = ({ children }: Props) => {
  const { destination, duration, type } = useFilterStore();

  return <>   
  {React.isValidElement(children) &&
    React.cloneElement(children, {
      destination,
      duration,
      type,
    })}
</>
};

export default WithFilterClientWrapper;