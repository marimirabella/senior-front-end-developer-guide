'use client';

import { FC } from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export const Loader: FC = () => (
  <Box mt={4} width="100%">
    <Stack spacing={2}>
      <Box display="flex" mb={2}>
        <Skeleton variant="circular" width={70} height={70} />
        <Box ml={3} width="80%">
          <Skeleton animation="wave" width="100%" height={30} />
          <Skeleton animation="wave" width="70%" height={30} />
        </Box>
      </Box>

      <Skeleton animation="wave" variant="rectangular" height="60vh" />

      <Box mb={3} />

      <Box>
        <Skeleton animation="wave" width="100%" height={30} />
        <Skeleton animation="wave" width="70%" height={30} />
      </Box>
    </Stack>
  </Box>
);
