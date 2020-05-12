import httpService from '../http_service';

export function searchMovies(title, year) {
    return {
        type: "SEARCH_MOVIES",
        async: true,
        httpMethodToInvoke: httpService.searchMovies,
        params: [title, year]
    };
}