'use client';

import { FC } from 'react';

import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { scrollToOptions, useScrollTriggerOptions } from './constants';

export const ScrollToTopButton: FC = () => {
  const trigger = useScrollTrigger(useScrollTriggerOptions);

  const onScrollToTopButtonClick = () => {
    window.scrollTo(scrollToOptions);
  };

  return (
    <Fade in={trigger}>
      <Box
        position="fixed"
        bottom={80}
        right={20}
        onClick={onScrollToTopButtonClick}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};
