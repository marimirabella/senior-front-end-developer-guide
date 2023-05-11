import Image, { ImageProps } from 'next/image';

import { FC } from 'react';

import { ClientBox } from '../box';

import { defaultImageSizes, imageStyles } from './constants';

export const ResponsiveImage: FC<ImageProps> = ({
  priority = false,
  sizes = defaultImageSizes,
  height,
  src,
  alt,
  ...props
}) => (
  <ClientBox position="relative" height={height} width="100%" {...props}>
    <Image
      src={src}
      alt={alt}
      style={imageStyles}
      priority={priority}
      {...(sizes && { sizes })}
      fill
    />
  </ClientBox>
);
