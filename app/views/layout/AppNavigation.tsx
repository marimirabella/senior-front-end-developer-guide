import { FC } from 'react';

import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { useSidebarToggle } from '../../hooks';

export const AppNavigation: FC = () => {
  const { isMobile, isSidebarOpenOnMobile, openSidebar, closeSidebar } =
    useSidebarToggle();

  return (
    <>
      <Header openSidebar={openSidebar} />
      <Sidebar
        isMobile={isMobile}
        isSidebarOpenOnMobile={isSidebarOpenOnMobile}
        closeSidebar={closeSidebar}
      />
    </>
  );
};
