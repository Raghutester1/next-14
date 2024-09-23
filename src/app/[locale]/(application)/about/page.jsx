import React from 'react'
import {useTranslations} from 'next-intl';
const page = () => {
  const t = useTranslations('AboutPage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <h1>{t('about')}</h1>

    </div>
  );
}

export default page