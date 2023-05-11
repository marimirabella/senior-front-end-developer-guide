import { FC } from 'react';

import { Text, Toolbar, AppBar } from '../../components';

import { footerStyles, footerToolbarAlignment } from './constants';

export const Footer: FC = () => (
  <AppBar component="footer" top="auto" bottom={0} sx={footerStyles}>
    <Toolbar pl={footerToolbarAlignment}>
      <Text color="primary.dark" fontSize="1rem">
        © 2023 Maryna Karpovets
      </Text>
    </Toolbar>
  </AppBar>
);
