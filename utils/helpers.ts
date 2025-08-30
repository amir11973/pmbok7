import { pmbokData } from '../data';
import { Chapter, Language, LocalizedString } from '../types';

export const findChapterById = (id: string): Chapter | undefined => {
    return [...pmbokData.principles, ...pmbokData.domains].find(c => c.id === id);
};

export const getLocalized = (item: LocalizedString | undefined, lang: Language) => {
    if (!item) return '';
    return item[lang];
}

export const getScoreColorClass = (score: number) => {
    if (score >= 80) return 'success';
    if (score >= 50) return 'warning';
    return 'danger';
};
