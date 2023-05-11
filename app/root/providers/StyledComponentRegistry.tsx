'use client';

import { useServerInsertedHTML } from 'next/navigation';

import { FC, ReactNode, useState } from 'react';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export interface StyledComponentsRegistryProps {
  children: ReactNode;
}

export const StyledComponentsRegistry: FC<StyledComponentsRegistryProps> = ({
  children,
}) => {
  // * Only create stylesheet once with lazy initial state
  // * x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (styledComponentsStyleSheet.instance as any).clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
