import React, { type CSSProperties } from 'react';

import type { FlexProps } from './types';

/**
 * Универсальный Flex-контейнер.
 */
export const Flex: React.FC<FlexProps> = ({
  justify,
  align,
  direction,
  wrap,
  gap,
  margin,
  padding,
  children,
}) => {
  const combinedStyle: CSSProperties = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
    margin,
    padding,
    gap,
  };

  return <div style={combinedStyle}>{children}</div>;
};
