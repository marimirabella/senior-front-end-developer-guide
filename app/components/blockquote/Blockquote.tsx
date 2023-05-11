'use client';

import { styled } from '@mui/material/styles';
import { StyledComponent } from '@mui/styled-engine';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { AlertProps } from '@mui/material/Alert';

import { Alert } from '../boxSystem';

export const Blockquote: StyledComponent<AlertProps> = styled((props) => (
  <Alert
    variant="outlined"
    severity="info"
    icon={<FormatQuoteIcon />}
    mt={4}
    mb={2}
    {...props}
  />
))(({ theme: { typography } }) => ({
  '> .MuiAlert-message p': {
    fontSize: typography.quote.fontSize,
  },
}));
