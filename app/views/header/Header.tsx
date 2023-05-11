import NextLink from 'next/link';

import { FC } from 'react';

import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

import { AppBar, IconButton, Toolbar } from '../../components';
import { GuideRoute, contentAlignment } from '../../constants';

import { contentWidth, displayOnlyOnMobile } from './constants';

export interface HeaderProps {
  openSidebar: () => void;
}

export const Header: FC<HeaderProps> = ({ openSidebar }) => (
  <AppBar width={contentWidth}>
    <Toolbar px={contentAlignment}>
      <IconButton
        color="inherit"
        edge="start"
        display={displayOnlyOnMobile}
        onClick={openSidebar}
      >
        <MenuIcon />
      </IconButton>
      <Box flexGrow={1} justifyContent="flex-end" display="flex">
        <Button component={NextLink} href={GuideRoute.Home}>
          <HomeIcon />
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
