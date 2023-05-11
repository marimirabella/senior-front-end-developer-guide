'use client';

import { FC } from 'react';

import GamesIcon from '@mui/icons-material/Games';
import Box from '@mui/material/Box';

import { useClientTranslation } from '../../hooks';
import { Link } from '../link';
import { Subtitle } from '../heading';
import { List } from '../boxSystem';

import { IconListItem } from './item';

export interface LinkListItem {
  title: string;
  url: string;
}

export interface LinkListProps {
  title: string;
  links: LinkListItem[];
}

export const LinkList: FC<LinkListProps> = ({ title, links }) => {
  const { t } = useClientTranslation();

  return (
    <Box>
      <Subtitle>{t(title)}</Subtitle>
      <List>
        {links.map(({ title, url }) => (
          <IconListItem key={title} icon={GamesIcon} mb={0.5}>
            <Link href={url} target="_blank" rel="noopener">
              {t(title)}
            </Link>
          </IconListItem>
        ))}
      </List>
    </Box>
  );
};
