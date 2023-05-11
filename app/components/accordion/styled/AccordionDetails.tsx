'use client';

import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const AccordionDetails = styled(MuiAccordionDetails)(
  ({ theme: { spacing } }) => ({
    padding: spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }),
);
