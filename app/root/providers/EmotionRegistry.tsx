'use client';

import { useServerInsertedHTML } from 'next/navigation';

import { FC, ReactNode, useState } from 'react';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export interface EmotionRegistryProps {
  children: ReactNode;
}

// ! Emotion is currently working on support
// * This is a current solution from https://github.com/emotion-js/emotion/issues/2928#issuecomment-1293012737
export const EmotionRegistry: FC<EmotionRegistryProps> = ({ children }) => {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' });

    cache.compat = true;

    return cache;
  });

  const dataEmotion = `${cache.key} ${Object.keys(cache.inserted).join(' ')}`;

  const html = Object.values(cache.inserted).join(' ');

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={dataEmotion}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
