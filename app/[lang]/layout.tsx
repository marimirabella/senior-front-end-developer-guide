import { Locale, locales } from '../i18n/constants';
import { MainLayout } from '../views/layout';
import { ComponentWithChildren, StaticParams } from '../interfaces';
import { Providers } from '../root';
import { AppLanguage } from '../i18n';

import './globals.css';

export async function generateStaticParams(): Promise<AppLanguage[]> {
  return locales.map((lang) => ({ lang }));
}

export type RootLayoutProps<S> = StaticParams<S> & ComponentWithChildren;

export default function RootLayout<S extends Locale>({
  children,
  params: { lang },
}: RootLayoutProps<S>) {
  return (
    <html lang={lang}>
      <head />
      <body>
        <Providers lang={lang}>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
