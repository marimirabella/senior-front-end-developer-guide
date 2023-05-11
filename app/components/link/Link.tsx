import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { FC } from 'react';

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type LinkProps = MuiLinkProps & NextLinkProps;

export const Link: FC<LinkProps> = ({
  prefetch = false,
  href,
  children,
  ...props
}) => (
  <MuiLink
    component={NextLink}
    href={href}
    prefetch={prefetch}
    underline="hover"
    {...props}
  >
    {children}
  </MuiLink>
);
