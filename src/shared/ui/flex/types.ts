import type { CSSProperties, PropsWithChildren } from 'react';

export interface FlexProps extends PropsWithChildren {
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
}
