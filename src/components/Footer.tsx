import React from 'react';
import appData from '@/lib/appData';
import { t } from '@/lib/i18n';

const Footer: React.FC = () => {
  const dict = appData.ns.i18n.en;
  return (
    <footer className="bg-gray-100 py-4 text-center">
      <p className="text-sm text-gray-500">{t(dict, 'footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
