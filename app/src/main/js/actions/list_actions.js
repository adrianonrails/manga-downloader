import { LIST_ACTIONS } from '../consts/action_types';

export const selectMangaForDownload = id => ({
  type: LIST_ACTIONS.MANGA_SELECT_FOR_DOWNLOAD,
  id
});

export const addManga = manga => ({
  type: LIST_ACTIONS.MANGA_ADD,
  manga
});

export const searchManga = title => ({
  type: LIST_ACTIONS.MANGA_SEARCH,
  title
});

export const clearManga = () => ({
  type: LIST_ACTIONS.MANGA_CLEAR
});

export const setFilterValue = value => ({
  type: LIST_ACTIONS.SET_FILTER_VALUE,
  value
});

export const downloadManga = (mangaId, chapters) => ({
  type: LIST_ACTIONS.DOWNLOAD_MANGA,
  mangaId,
  chapters
});

export const toggleChapter = id => ({
  type: LIST_ACTIONS.CHAPTER_TOGGLE,
  id
});

export const selectAllChapters = chapters => ({
  type: LIST_ACTIONS.CHAPTER_SELECT_ALL,
  chapters
});

export const unselectAllChapters = () => ({
  type: LIST_ACTIONS.CHAPTER_UNSELECT_ALL
});

export const selectChapters = chapters => ({
  type: LIST_ACTIONS.CHAPTER_SELECT_RANGE,
  chapters
});