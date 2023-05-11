import { getI18NServer } from '../i18n/server';
import { Locale } from '../i18n';
import { Title, Paragraph } from '../components';
import { StaticParams } from '../interfaces';
import { GuideImage } from '../views';

export type HomeProps<S> = StaticParams<S>;

export default async function Home<S extends Locale>({
  params: { lang },
}: StaticParams<S>): Promise<JSX.Element> {
  const { t } = await getI18NServer(lang);

  return (
    <>
      <Title pb={5}>{t('home.header')}</Title>
      <Paragraph mb={4}>{t('home.description')}</Paragraph>
      <GuideImage />
    </>
  );
}
