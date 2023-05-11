'use client';

import { FC } from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { ComponentWithChildren } from '../../interfaces';
import { ScrollToTopButton } from '../../components';
import { Footer } from '../footer';
import { contentAlignment } from '../../constants';

import { gridStyles } from './constants';
import { AppNavigation } from './AppNavigation';

export type MainLayoutProps = BoxProps & ComponentWithChildren;

export const MainLayout: FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <Box display="flex" {...props}>
      <AppNavigation />
      <Grid
        component="main"
        display="flex"
        spacing={2}
        sx={gridStyles}
        container
        xs
      >
        <Box px={contentAlignment} width="100%">
          {children}
        </Box>
        <ScrollToTopButton />
      </Grid>
      <Footer />
    </Box>
  );
};
