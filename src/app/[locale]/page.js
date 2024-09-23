import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { redirect } from '@/i18n/routing';
import { headers } from 'next/headers';
export default function HomePage({params}) {
redirect('/home')
  const headersList = headers();
  const host = headersList.get('host');
  const { slug } = params;  // dynamic [slug] parameter
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      
      
      
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}