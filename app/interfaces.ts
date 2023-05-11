import { ReactNode } from 'react';

export interface Params<P> {
  [key: string]: P;
}

export interface StaticParams<S> {
  params: Params<S>;
}

export interface ComponentWithChildren {
  children: ReactNode;
}
