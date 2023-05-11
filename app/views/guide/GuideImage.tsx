'use client';
/** @jsxImportSource @emotion/react */

import { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import guruImage from '../../../public/images/guru.jpg';
import { ResponsiveImage } from '../../components';

import { cardStyles } from './constants';

export const GuideImage: FC = () => (
  <Card sx={cardStyles}>
    <CardContent>
      <ResponsiveImage
        src={guruImage}
        alt="Senior Front End Developer Guru"
        height={650}
        sizes="100%"
        priority
      />
    </CardContent>
  </Card>
);
