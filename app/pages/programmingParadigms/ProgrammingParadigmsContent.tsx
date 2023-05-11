import { AccordionPanel, Title, ClientBox, LinkList } from '../../components';
import { Locale } from '../../i18n';
import { getI18NServer } from '../../i18n/server';

import { programmingParadigmsLinks } from './constants';

import PPIntroductionMDX from './ppIntroduction.mdx';
import OOPParadigmContentMDX from './oopParadigmContent.mdx';
import PPContentMDX from './ppContent.mdx';
import FPContentMDX from './fpContent.mdx';

export interface ProgrammingParadigmsContentProps {
  lang: Locale;
}

export const ProgrammingParadigmsContent = async ({
  lang,
}: ProgrammingParadigmsContentProps): Promise<JSX.Element> => {
  const { t } = await getI18NServer(lang);

  return (
    <section>
      <Title pb={5}>{t('pp.header')}</Title>
      <PPIntroductionMDX />
      <ClientBox mb={6}>
        <AccordionPanel key="oop" title={t('pp.oop')} defaultExpanded>
          <section>
            <OOPParadigmContentMDX />
          </section>
        </AccordionPanel>
        <AccordionPanel key="fp" title={t('pp.fp')}>
          <section>
            <FPContentMDX />
          </section>
        </AccordionPanel>
      </ClientBox>
      <PPContentMDX />
      <LinkList
        title={t('pp.links.heading')}
        links={programmingParadigmsLinks}
      />
    </section>
  );
};
