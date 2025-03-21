export interface ProfileInfo {
  name: string;
  englishName: string;
  birthYear: number;
  birthPlace: string;
  currentPlace: string;
  catchphrase: string;
}

export const profile: ProfileInfo = {
  name: 'もちけん',
  englishName: 'Mochiken',
  birthYear: 1997,
  birthPlace: '埼玉県',
  currentPlace: '東京都',
  catchphrase: 'フロントエンドも、バックエンドも、アプリもインフラもやるエンジニア'
}; 