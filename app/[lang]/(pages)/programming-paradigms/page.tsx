import { Locale } from '../../../i18n';
import { StaticParams } from '../../../interfaces';
import { ProgrammingParadigmsContent } from '../../../pages';

export type ProgrammingParadigmsProps<S> = StaticParams<S>;

export default function ProgrammingParadigms<S extends Locale>({
  params: { lang },
}: ProgrammingParadigmsProps<S>): JSX.Element {
  /* @ts-expect-error Async Server Component */
  return <ProgrammingParadigmsContent lang={lang} />;
}
