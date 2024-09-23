import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import DrawerAppBar from '@/component/Navbar';

export default function HomePage({children,params}) {
 
  return (
    <div>
      <DrawerAppBar/>
    {children}
    </div>
  );
}