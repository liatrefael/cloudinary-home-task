
import { generateSuccessActionTypeName } from '../actions/network_middleware';


const initialState = {
    movie: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case generateSuccessActionTypeName("SEARCH_MOVIES"): {
            return {
                ...state,
                movie: {
                    title : action.Title,
                    image: action.Poster,
                    year: action.Year,
                    duration: action.Runtime,
                    genre: action.Genre,
                    plot: action.Plot,
                    director: action.Director,
                    stars: action.Actors
                },
                found: (action.Response === "True")
            };
        }

        default:
            return state;
    }
}
