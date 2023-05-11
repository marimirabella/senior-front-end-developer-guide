import { FC } from 'react';

import { GuideRoute } from '../../constants';

export interface GuideNavigationItem {
  path: GuideRoute;
  title: string;
  icon: FC;
}
