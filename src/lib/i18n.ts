import appData from '@/lib/appData';

export function t(dict: Record<string, string>, key: string): string {
  return dict[key] || key; 
}

export function useI18n(locale: string) {
  const i18nData = appData.ns.i18n[locale] || appData.ns.i18n['en'];

  function t(key: string): string {
    return i18nData[key] || key;
  }

  return { t };
}
