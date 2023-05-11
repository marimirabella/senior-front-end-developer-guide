import { FC } from 'react';

import List from '@mui/material/List';

import { useClientTranslation } from '../../hooks';
import { IconListItem } from '../../components';

import { guideNavItems } from './constants';

export interface SidebarMenuProps {
  closeSidebar?: () => void;
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ closeSidebar }) => {
  const { t } = useClientTranslation();

  return (
    <nav aria-label="sidebar navigation">
      <List>
        {guideNavItems.map(({ path, title, icon }) => (
          <IconListItem
            key={path}
            icon={icon}
            path={path}
            {...(closeSidebar && { onClick: closeSidebar })}
          >
            {t(title)}
          </IconListItem>
        ))}
      </List>
    </nav>
  );
};
