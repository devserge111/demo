import appDataJson from '@/data/app-data.json';

export interface AppData { m: { n: 'app-data', v: number, u: string }, ns: { copy: Record<string, string>; i18n: Record<string, Record<string, string>> } }

const appData: AppData = appDataJson;

export default appData;
