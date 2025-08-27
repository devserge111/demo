import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '@/routes/paths';
import appData from '@/lib/appData';
import { t } from '@/lib/i18n';

const Header: React.FC = () => {
  const dict = appData.ns.i18n.en;
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="space-x-4">
          <Link to={paths.home} className="text-gray-500 hover:text-gray-900">{t(dict, 'nav.home')}</Link>
          <Link to={paths.generator} className="text-gray-500 hover:text-gray-900">{t(dict, 'nav.generator')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
