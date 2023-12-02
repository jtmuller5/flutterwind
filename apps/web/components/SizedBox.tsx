import exp from 'constants';
import React from 'react';

export function SizedBox({
    height,
    width,
    children,
    className = '',
  }: {
    height?: number;
    width?: number;
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
  }) {
    const style = {
      height: height ? `${height}px` : undefined,
      width: width ? `${width}px` : undefined,
    };
  
    return <div style={style} className={className}>{children}</div>;
  }
  

export const Gap4 = () => <SizedBox height={4} width={4} />;
export const Gap8 = () => <SizedBox height={8} width={8} />;
export const Gap12 = () => <SizedBox height={12} width={12} />;
export const Gap16 = () => <SizedBox height={16} width={16} />;
export const Gap20 = () => <SizedBox height={20} width={20} />;
export const Gap24 = () => <SizedBox height={24} width={24} />;
export const Gap28 = () => <SizedBox height={28} width={28} />;
export const Gap32 = () => <SizedBox height={32} width={32} />;