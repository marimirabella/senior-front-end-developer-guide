'use client';

import { StyledComponent } from '@mui/styled-engine';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

export const Accordion: StyledComponent<AccordionProps> = styled(
  (props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ),
)(({ theme: { palette } }) => ({
  border: `1px solid ${palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
