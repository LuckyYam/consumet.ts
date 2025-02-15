"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDERS_LIST = void 0;
const providers_1 = require("../providers");
/**
 * List of providers
 *
 * add new providers here (order does not matter)
 */
exports.PROVIDERS_LIST = {
    ANIME: [
        new providers_1.ANIME.Gogoanime(),
        new providers_1.ANIME.NineAnime(),
        new providers_1.ANIME.AnimePahe(),
        new providers_1.ANIME.Zoro(),
        new providers_1.ANIME.AniMixPlay(),
        new providers_1.ANIME.AnimeFox(),
        new providers_1.ANIME.Enime(),
    ],
    MANGA: [new providers_1.MANGA.MangaDex(), new providers_1.MANGA.MangaHere(), new providers_1.MANGA.MangaKakalot()],
    BOOKS: [new providers_1.BOOKS.Libgen()],
    COMICS: [new providers_1.COMICS.GetComics()],
    LIGHT_NOVELS: [new providers_1.LIGHT_NOVELS.ReadLightNovels()],
    MOVIES: [new providers_1.MOVIES.FlixHQ()],
    NEWS: [new providers_1.NEWS.ANN()],
    META: [new providers_1.META.Anilist()],
    OTHERS: [],
};
//# sourceMappingURL=providers-list.js.map