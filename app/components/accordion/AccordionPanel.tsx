'use client';

import { FC, ReactNode } from 'react';

import Typography from '@mui/material/Typography';
import { AccordionProps } from '@mui/material/Accordion';

import { Accordion, AccordionDetails, AccordionSummary } from './styled';

export interface AccordionPanelProps extends Omit<AccordionProps, 'title'> {
  title: ReactNode;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({
  title,
  children,
  ...props
}) => (
  <Accordion {...props}>
    <AccordionSummary>
      <Typography variant="h6">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);
